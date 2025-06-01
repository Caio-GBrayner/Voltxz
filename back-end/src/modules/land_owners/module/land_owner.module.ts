import { Module } from '@nestjs/common';
import { LandOwnerService } from '../services/land_owner.service';
import { LandOwnerController } from '../controllers/land_owner.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectProposalModule } from 'src/modules/project_proposal/module/project_proposal.module';
import { InvestmentModule } from 'src/modules/investments/module/investment.module';

@Module({
  controllers: [LandOwnerController],
  providers: [LandOwnerService, PrismaService],
  imports: [ProjectProposalModule, InvestmentModule],
})
export class LandOwnerModule {}
