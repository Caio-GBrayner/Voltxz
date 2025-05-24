import { Injectable } from "@nestjs/common";
import { CreateInvestmentDto } from "../dto/create-investments.dto";
import { UpdateInvestmentDto } from "../dto/update-investments.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class InvestmentService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createInvestmentDto: CreateInvestmentDto) {
        return this.prisma.investments.create({
            data: createInvestmentDto
        });
    }
    async findAll() {
        return this.prisma.investments.findMany();
    }
    async findOne(id: string) {
        return this.prisma.investments.findUnique({
            where: { id }
        });
    }
    async update(id: string, updateInvestmentDto: UpdateInvestmentDto) {
        return this.prisma.investments.update({
            where: { id },
            data: updateInvestmentDto
        });
    }
    async remove(id: string) {
        return this.prisma.investments.delete({
            where: { id }
        });
    }
}
