import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProjectDto: CreateProjectDto) {
    return await this.prisma.projects.create({
      data: createProjectDto,
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
