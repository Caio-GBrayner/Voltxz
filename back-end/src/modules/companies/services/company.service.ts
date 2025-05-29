import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { UpdateCompanyDto } from 'src/modules/companies/dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.companies.create({
      data: createCompanyDto,
    });
  }

  async findAll() {
    return this.prisma.companies.findMany();
  }

  async findOne(id: string) {
    return this.prisma.companies.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.companies.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: string) {
    return this.prisma.companies.delete({
      where: { id },
    });
  }
}
