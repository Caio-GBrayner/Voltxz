import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return this.prisma.investments.create({
      data: {
        ...createInvestmentDto,
        investor_id: investor.id,
        project_id: createInvestmentDto.project_id,
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
      data: updateInvestmentDto,
    });
  }
  async remove(id: string) {
    return this.prisma.investments.delete({
      where: { id },
    });
  }
}
