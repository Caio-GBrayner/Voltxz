import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getInvestorProfileByUserId(userId: string) {
    const investor = await this.prisma.investors.findUnique({
      where: { user_id: userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            user_type: true,
          },
        },
      },
    });
    if (!investor) {
      throw new NotFoundException('Investor profile not found for this user.');
    }
    return investor;
  }

  // async updateInvestorProfileByUserId(
  //   userId: string,
  //   updateInvestorDto: UpdateInvestorDto,
  // ) {
  //   const investor = await this.prisma.investors.findUnique({
  //     where: { user_id: userId },
  //   });

  //   if (!investor) {
  //     throw new NotFoundException('Investor profile not found.');
  //   }

  //   const userDataToUpdate: { name?: string; email?: string; phone?: string } =
  //     {};
  //   if (updateInvestorDto.user_name !== undefined) {
  //     userDataToUpdate.name = updateInvestorDto.user_name;
  //   }
  //   if (updateInvestorDto.user_email !== undefined) {
  //     userDataToUpdate.email = updateInvestorDto.user_email;
  //   }
  //   if (updateInvestorDto.user_phone !== undefined) {
  //     userDataToUpdate.phone = updateInvestorDto.user_phone;
  //   }

  //   return this.prisma.investors.update({
  //     where: { id: investor.id },
  //     data: {
  //       document_id: updateInvestorDto.document_id,
  //       user: {
  //         update: userDataToUpdate,
  //       },
  //     },
  //   });
  // }

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
