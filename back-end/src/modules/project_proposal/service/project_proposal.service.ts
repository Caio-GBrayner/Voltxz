import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectProposalDto } from '../dto/create-project_proposal.dto';
import { UpdateProjectProposalDto } from '../dto/update-project_proposal.dto';

@Injectable()
export class ProjectProposalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProjectProposalDto) {
    return this.prisma.projectProposal.create({ data });
  }

  async findAll() {
    return this.prisma.projectProposal.findMany();
  }

  async findOne(id: string) {
    return this.prisma.projectProposal.findUnique({ where: { id } });
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
}
