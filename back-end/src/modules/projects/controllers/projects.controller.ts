import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
  BadRequestException,
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
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
  ) {
    if (page < 1) {
      throw new BadRequestException('Page must be a positive integer.');
    }
    if (pageSize < 1 || pageSize > 100) {
      throw new BadRequestException('Page size must be between 1 and 100.');
    }
    return this.projectService.findAll(page, pageSize);
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
