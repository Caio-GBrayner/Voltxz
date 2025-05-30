import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectProposalService } from '../service/project_proposal.service';
import { CreateProjectProposalDto } from '../dto/create-project_proposal.dto';
import { UpdateProjectProposalDto } from '../dto/update-project_proposal.dto';

@Controller('api/project-proposals')
export class ProjectProposalController {
  constructor(private readonly service: ProjectProposalService) {}

  @Post()
  create(@Body() dto: CreateProjectProposalDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProjectProposalDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
