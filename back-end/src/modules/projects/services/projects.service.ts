// src/projects/project.service.ts
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectProposalService } from 'src/modules/project_proposal/service/project_proposal.service'; // Ajuste o caminho conforme a localização do seu serviço de proposta
import { SolarProjectStatus } from 'generated/prisma';

@Injectable()
export class ProjectService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectProposalService: ProjectProposalService,
  ) {}

  async create(createProjectDto: CreateProjectDto, userId: string) {
    const company = await this.prisma.companies.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });
    if (!company) {
      throw new BadRequestException('User is not registered as a company.');
    }

    const land = await this.prisma.lands.findUnique({
      where: { id: createProjectDto.land_id },
      select: { id: true, owner_id: true },
    });
    if (!land) {
      throw new NotFoundException(
        `Land with ID "${createProjectDto.land_id}" not found.`,
      );
    }

    const newProject = await this.prisma.projects.create({
      data: {
        ...createProjectDto,
        company_id: company.id,
        status: 'pendingApproval',
      },
    });

    await this.projectProposalService.createInternal({
      project_id: newProject.id,
      land_id: land.id,
    });
    return newProject;
  }

  async findProjectsByCompanyUserId(
    userId: string,
    status: SolarProjectStatus | undefined,
  ) {
    const company = await this.prisma.companies.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!company) {
      throw new NotFoundException('Company profile not found for this user.');
    }

    return this.prisma.projects.findMany({
      where: {
        company_id: company.id,
        status: status ? status : undefined,
      },
      include: {
        land: {
          select: {
            city: true,
            state: true,
            postal_code: true,
            country: true,
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
        Investments: {
          select: {
            id: true,
            value_invested: true,
            status: true,
            title: true,
          },
        },
        ProjectProposal: {
          select: {
            id: true,
            status: true,
            owner_agreed: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findAll() {
    return await this.prisma.projects.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.projects.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    return await this.prisma.projects.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.projects.delete({
      where: { id },
    });
  }
}
