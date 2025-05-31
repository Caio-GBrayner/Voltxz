import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from '../services/projects.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';

@Controller('api/projects')
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() dto: CreateProjectDto, @UserId() userId: string) {
    if (!userId) {
      throw new Error('User ID is required to create a land.');
    }
    return this.projectService.create(dto, userId);
  }

  @Get()
  findAll(): any {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.projectService.remove(id);
  }
}
