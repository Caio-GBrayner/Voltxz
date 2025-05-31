import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  Agreement,
  InvestmentStatus,
  SolarProjectStatus,
} from 'generated/prisma';

@Injectable()
export class InvestmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvestmentDto: CreateInvestmentDto, userId: string) {
    const investor = await this.prisma.investors.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });
    if (!investor) {
      throw new BadRequestException(
        'Only users registered as investors can create investments.',
      );
    }

    const project = await this.prisma.projects.findUnique({
      where: { id: createInvestmentDto.project_id },
      select: {
        id: true,
        status: true,
        company_id: true,
        land: { select: { owner_id: true } },
      },
    });

    if (!project) {
      throw new NotFoundException(
        `Project with ID "${createInvestmentDto.project_id}" not found.`,
      );
    }

    if (project.status !== SolarProjectStatus.active) {
      throw new BadRequestException(
        `Project is not active and cannot receive investments. Current status: ${project.status}`,
      );
    }

    return this.prisma.investments.create({
      data: {
        ...createInvestmentDto,
        investor_id: investor.id,
        project_id: createInvestmentDto.project_id,
      },
    });
  }

  async findAll() {
    return this.prisma.investments.findMany({
      include: {
        investor: {
          select: { id: true, user: { select: { email: true } } },
        },
        project: {
          select: {
            id: true,
            title: true,
            company_id: true,
            land: { select: { owner_id: true } },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const investment = await this.prisma.investments.findUnique({
      where: { id },
      include: {
        investor: {
          select: {
            id: true,
            user: { select: { email: true, user_type: true, name: true } },
          },
        },
        project: {
          select: {
            id: true,
            title: true,
            company_id: true,
            land: { select: { owner_id: true } },
          },
        },
      },
    });
    if (!investment) {
      throw new NotFoundException(`Investment with ID "${id}" not found.`);
    }
    return investment;
  }

  async respondToInvestment(
    investmentId: string,
    userId: string,
    userType: 'LandOwner' | 'Company',
    response: 'accept' | 'reject',
  ) {
    const investment = await this.prisma.investments.findUnique({
      where: { id: investmentId },
      include: {
        project: {
          select: {
            id: true,
            company_id: true,
            land: { select: { owner_id: true } },
          },
        },
      },
    });

    if (!investment) {
      throw new NotFoundException(
        `Investment with ID "${investmentId}" not found.`,
      );
    }

    let fieldToUpdate: 'owner_agree' | 'company_agree';
    let alreadyRespondedError: string | null = null;

    if (userType === 'LandOwner') {
      const landOwner = await this.prisma.landOwners.findUnique({
        where: { user_id: userId },
        select: { id: true },
      });
      if (!landOwner || landOwner.id !== investment.project.land.owner_id) {
        throw new BadRequestException(
          'You are not authorized to respond to this investment as a Land Owner.',
        );
      }
      fieldToUpdate = 'owner_agree';
      if (investment.owner_agree !== Agreement.pending) {
        alreadyRespondedError = `Land Owner has already responded (${investment.owner_agree}).`;
      }
    } else if (userType === 'Company') {
      const company = await this.prisma.companies.findUnique({
        where: { user_id: userId },
        select: { id: true },
      });
      if (!company || company.id !== investment.project.company_id) {
        throw new BadRequestException(
          'You are not authorized to respond to this investment as a Company.',
        );
      }
      fieldToUpdate = 'company_agree';
      if (investment.company_agree !== Agreement.pending) {
        alreadyRespondedError = `Company has already responded (${investment.company_agree}).`;
      }
    } else {
      throw new BadRequestException(`Invalid user type: ${String(userType)}`);
    }

    if (alreadyRespondedError) {
      throw new BadRequestException(alreadyRespondedError);
    }

    const newAgreementStatus =
      response === 'accept' ? Agreement.accepted : Agreement.rejected;

    const updatedInvestment = await this.prisma.investments.update({
      where: { id: investmentId },
      data: {
        [fieldToUpdate]: newAgreementStatus,
      },
    });

    const finalInvestment = await this.prisma.investments.findUnique({
      where: { id: investmentId },
    });

    if (!finalInvestment) {
      throw new NotFoundException(
        `Investment with ID "${investmentId}" not found after update.`,
      );
    }

    let overallInvestmentStatus: InvestmentStatus;

    if (
      finalInvestment.owner_agree === Agreement.rejected ||
      finalInvestment.company_agree === Agreement.rejected
    ) {
      overallInvestmentStatus = InvestmentStatus.rejected;
    } else if (
      finalInvestment.owner_agree === Agreement.accepted &&
      finalInvestment.company_agree === Agreement.accepted
    ) {
      overallInvestmentStatus = InvestmentStatus.accepted;
    } else {
      overallInvestmentStatus = InvestmentStatus.pending;
    }

    if (finalInvestment.status !== overallInvestmentStatus) {
      await this.prisma.investments.update({
        where: { id: investmentId },
        data: {
          status: overallInvestmentStatus,
        },
      });
    }

    return { ...updatedInvestment, status: overallInvestmentStatus };
  }

  async update(id: string, updateInvestmentDto: UpdateInvestmentDto) {
    const investment = await this.prisma.investments.findUnique({
      where: { id },
    });
    if (!investment) {
      throw new NotFoundException(`Investment with ID "${id}" not found.`);
    }
    if (investment.status !== InvestmentStatus.pending) {
      throw new BadRequestException(
        'Cannot update an investment that is not in pending status.',
      );
    }

    return this.prisma.investments.update({
      where: { id },
      data: updateInvestmentDto,
    });
  }

  async remove(id: string) {
    return this.prisma.investments.delete({
      where: { id },
    });
  }
}
