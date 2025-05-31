import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProjectDto: CreateProjectDto, userId: string) {
    const company = await this.prisma.companies.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });
    if (!company) {
      throw new Error('User is not registered as a company.');
    }
    return await this.prisma.projects.create({
      data: {
        ...createProjectDto,
        company_id: company.id,
        status: 'pendingApproval',
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
