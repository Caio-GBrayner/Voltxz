import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return await this.prisma.companies.create({
        data: createCompanyDto,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Company with this name already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.companies.findMany();
  }

  async findOne(id: string) {
    const company = await this.prisma.companies.findUnique({
      where: { id },
    });
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }
    return company;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.prisma.companies.findUnique({
      where: { id },
    });
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }
    return this.prisma.companies.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: string) {
    const company = await this.prisma.companies.findUnique({
      where: { id },
    });
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }
    return this.prisma.companies.delete({
      where: { id },
    });
  }
}
