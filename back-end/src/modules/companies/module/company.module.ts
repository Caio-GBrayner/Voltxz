import { Module } from '@nestjs/common';
import { CompanyService } from 'src/modules/companies/services/company.service';
import { CompanyController } from 'src/modules/companies/controllers/company.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class CompanyModule {}
