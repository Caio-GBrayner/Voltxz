import { Module } from '@nestjs/common';
import { ProjectProposalController } from '../controller/project_proposal.controller';
import { ProjectProposalService } from '../service/project_proposal.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProjectProposalController],
  providers: [ProjectProposalService],
  exports: [ProjectProposalService],
})
export class ProjectProposalModule {}
