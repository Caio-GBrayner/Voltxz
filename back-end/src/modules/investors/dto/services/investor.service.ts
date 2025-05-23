import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateInvestorDto } from "src/modules/investors/dto/create-investor.dto";
import { UpdateInvestorDto } from "src/modules/investors/dto/update-investor.dto";

@Injectable()
export class InvestorsService {
  constructor(private prisma: PrismaService) {}

  async create(createInvestorDto: CreateInvestorDto) {
    return this.prisma.investors.create({
        data: createInvestorDto,
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