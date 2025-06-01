import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProjectProposalDto } from '../dto/update-project_proposal.dto';
import { AgreementStatus, OwnerAgreementStatus } from 'generated/prisma';

@Injectable()
export class ProjectProposalService {
  constructor(private readonly prisma: PrismaService) {}

  async createInternal(data: { project_id: string; land_id: string }) {
    const project = await this.prisma.projects.findUnique({
      where: { id: data.project_id },
    });
    if (!project) {
      throw new NotFoundException(
        `Project with ID "${data.project_id}" not found.`,
      );
    }

    const land = await this.prisma.lands.findUnique({
      where: { id: data.land_id },
    });
    if (!land) {
      throw new NotFoundException(`Land with ID "${data.land_id}" not found.`);
    }

    return this.prisma.projectProposal.create({ data });
  }

  async findAll() {
    return this.prisma.projectProposal.findMany();
  }

  async findOne(id: string) {
    return this.prisma.projectProposal.findUnique({ where: { id } });
  }

  async ownerRespondToProposal(
    proposalId: string,
    ownerUserId: string,
    response: 'accept' | 'reject',
  ) {
    const proposal = await this.prisma.projectProposal.findUnique({
      where: { id: proposalId },
      include: {
        land: {
          select: { owner_id: true },
        },
        project: {
          select: { id: true, status: true },
        },
      },
    });

    if (!proposal) {
      throw new NotFoundException(
        `Project Proposal with ID "${proposalId}" not found.`,
      );
    }

    const landOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: ownerUserId },
      select: { id: true },
    });

    if (!landOwner || landOwner.id !== proposal.land.owner_id) {
      throw new BadRequestException(
        'You are not authorized to respond to this proposal.',
      );
    }

    if (proposal.owner_agreed !== OwnerAgreementStatus.pending) {
      throw new BadRequestException(
        `This proposal has already been ${proposal.owner_agreed}.`,
      );
    }

    const newOwnerAgreedStatus =
      response === 'accept'
        ? OwnerAgreementStatus.accepted
        : OwnerAgreementStatus.rejected;
    const newProposalStatus =
      response === 'accept'
        ? AgreementStatus.accepted
        : AgreementStatus.rejected;

    const updatedProposal = await this.prisma.projectProposal.update({
      where: { id: proposalId },
      data: {
        owner_agreed: newOwnerAgreedStatus,
        status: newProposalStatus,
      },
    });

    if (newOwnerAgreedStatus === OwnerAgreementStatus.accepted) {
      await this.prisma.projects.update({
        where: { id: proposal.project.id },
        data: {
          status: 'active',
        },
      });
      await this.prisma.lands.update({
        where: { id: proposal.land_id },
        data: {
          availability: false,
        },
      });
    } else if (newOwnerAgreedStatus === OwnerAgreementStatus.rejected) {
      await this.prisma.projects.update({
        where: { id: proposal.project.id },
        data: {
          status: 'rejected',
        },
      });
    }

    return updatedProposal;
  }

  async update(id: string, data: UpdateProjectProposalDto) {
    return this.prisma.projectProposal.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.projectProposal.delete({ where: { id } });
  }

  async findProposalsByLandOwnerUserId(userId: string) {
    const landOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!landOwner) {
      throw new NotFoundException(
        'Land Owner profile not found for this user.',
      );
    }

    const lands = await this.prisma.lands.findMany({
      where: {
        owner_id: landOwner.id,
      },
      select: { id: true },
    });

    if (lands.length === 0) {
      throw new NotFoundException('No lands found for this land owner.');
    }
    const landIds = lands.map((land) => land.id);

    return this.prisma.projectProposal.findMany({
      where: {
        land: {
          id: {
            in: landIds,
          },
        },
      },
      include: {
        project: true,
        land: true,
      },
    });
  }

  async findProposalsByCompanyUserId(userId: string) {
    const company = await this.prisma.companies.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!company) {
      throw new NotFoundException('Company profile not found for this user.');
    }

    const projects = await this.prisma.projects.findMany({
      where: {
        company_id: company.id,
      },
      select: { id: true },
    });

    if (projects.length === 0) {
      return [];
    }

    const projectIds = projects.map((project) => project.id);

    return this.prisma.projectProposal.findMany({
      where: {
        project_id: {
          in: projectIds,
        },
      },
      include: {
        land: {
          select: {
            street: true,
            number: true,
            city: true,
            state: true,
            owner: {
              select: {
                user: {
                  select: {
                    name: true,
                    email: true,
                    phone: true,
                  },
                },
              },
            },
          },
        },
        project: {
          select: {
            title: true,
            description: true,
            power_kw: true,
            cost: true,
            estimated_return: true,
            status: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }
}
