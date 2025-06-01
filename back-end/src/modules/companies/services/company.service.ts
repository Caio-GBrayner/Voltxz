import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { UpdateCompanyDto } from 'src/modules/companies/dto/update-company.dto';
// import { User } from 'generated/prisma';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto, userId: string) {
    const existingCompany = await this.prisma.companies.findUnique({
      where: { user_id: userId },
    });
    if (existingCompany) {
      throw new Error('User is already a company owner');
    }
    return this.prisma.companies.create({
      data: {
        ...createCompanyDto,
        user_id: userId,
      },
    });
  }

  async getCompanyProfileByUserId(userId: string) {
    const company = await this.prisma.companies.findUnique({
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
    if (!company) {
      throw new NotFoundException('Company profile not found for this user.');
    }
    return company;
  }

  // async updateCompanyProfileByUserId(
  //   userId: string,
  //   updateCompanyDto: UpdateCompanyDto,
  //   user: User,
  // ) {
  //   const company = await this.prisma.companies.findUnique({
  //     where: { user_id: userId },
  //   });

  //   if (!company) {
  //     throw new NotFoundException('Company profile not found.');
  //   }

  //   return this.prisma.companies.update({
  //     where: { id: company.id },
  //     data: {
  //       company_name: updateCompanyDto.company_name,
  //       document_id: updateCompanyDto.document_id,
  //       user: {
  //         update: {
  //           name: user.name,
  //           email: user.email,
  //           phone: user.phone,
  //         },
  //       },
  //     },
  //   });
  // }

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
