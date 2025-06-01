import { Module } from '@nestjs/common';
import { CompanyService } from 'src/modules/companies/services/company.service';
import { CompanyController } from 'src/modules/companies/controllers/company.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectsModule } from 'src/modules/projects/module/projects.module';
import { InvestmentModule } from 'src/modules/investments/module/investment.module';
import { ProjectProposalModule } from 'src/modules/project_proposal/module/project_proposal.module';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
  imports: [ProjectsModule, InvestmentModule, ProjectProposalModule],
})
export class CompanyModule {}
