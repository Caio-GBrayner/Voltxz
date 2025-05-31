import { Module } from '@nestjs/common';
import { ProjectsController } from 'src/modules/projects/controllers/projects.controller';
import { ProjectService } from 'src/modules/projects/services/projects.service';
import { ProjectProposalModule } from 'src/modules/project_proposal/module/project_proposal.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectService, PrismaService],
  imports: [ProjectProposalModule],
})
export class ProjectsModule {}
