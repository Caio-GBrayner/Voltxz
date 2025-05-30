import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInvestorDto } from 'src/modules/investors/dto/create-investor.dto';
import { UpdateInvestorDto } from 'src/modules/investors/dto/update-investor.dto';

@Injectable()
export class InvestorService {
  constructor(private prisma: PrismaService) {}

  async create(createInvestorDto: CreateInvestorDto, userId: string) {
    const existingInvestor = await this.prisma.investors.findUnique({
      where: { user_id: userId },
    });

    if (existingInvestor) {
      throw new Error('User is already an investor');
    }
    return this.prisma.investors.create({
      data: {
        ...createInvestorDto,
        user_id: userId,
      },
    });
  }

  async findAll() {
    return this.prisma.investors.findMany();
  }

  async findOne(id: string) {
    return this.prisma.investors.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateInvestorDto: UpdateInvestorDto) {
    return this.prisma.investors.update({
      where: { id },
      data: updateInvestorDto,
    });
  }

  async remove(id: string) {
    return this.prisma.investors.delete({
      where: { id },
    });
  }
}
