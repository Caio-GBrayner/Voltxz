import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Agreement, InvestmentStatus } from 'generated/prisma';

@Injectable()
export class InvestmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvestmentDto: CreateInvestmentDto, userId: string) {
    const investor = await this.prisma.investors.findUnique({
      where: { user_id: userId },
    });

    if (!investor) {
      throw new BadRequestException('Usuário não tem perfil de investidor.');
    }

    return this.prisma.investments.create({
      data: {
        project_id: createInvestmentDto.project_id,
        investor_id: investor.id,
        value_invested: String(createInvestmentDto.value_invested),
        title: createInvestmentDto.title ?? null,
        description: createInvestmentDto.description ?? null,
        owner_agree: createInvestmentDto.owner_agree ?? Agreement.pending,
        company_agree: createInvestmentDto.company_agree ?? Agreement.pending,
        status: createInvestmentDto.status ?? InvestmentStatus.pending,
      },
    });
  }

  async findAll() {
    return this.prisma.investments.findMany();
  }

  async findOne(id: string) {
    return this.prisma.investments.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateInvestmentDto: UpdateInvestmentDto) {
    return this.prisma.investments.update({
      where: { id },
      data: {
        ...updateInvestmentDto,
        value_invested: updateInvestmentDto.value_invested
          ? String(updateInvestmentDto.value_invested)
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.investments.delete({
      where: { id },
    });
  }
}
