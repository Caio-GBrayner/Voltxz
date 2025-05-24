import { Module } from '@nestjs/common';
import { ProjectsController } from 'src/modules/projects/controllers/projects.controller';
import { ProjectService } from 'src/modules/projects/services/projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectsModule {}
