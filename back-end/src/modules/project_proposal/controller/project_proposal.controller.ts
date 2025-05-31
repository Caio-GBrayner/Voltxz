import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { ProjectProposalService } from '../service/project_proposal.service';
import { UpdateProjectProposalDto } from '../dto/update-project_proposal.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';

@Controller('api/project-proposals')
@UseGuards(JwtAuthGuard)
export class ProjectProposalController {
  constructor(private readonly service: ProjectProposalService) {}

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

  @Patch(':id/owner-response')
  async ownerRespond(
    @Param('id') proposalId: string,
    @Body('response') response: 'accept' | 'reject',
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new BadRequestException('User ID is required for this action.');
    }
    if (!['accept', 'reject'].includes(response)) {
      throw new BadRequestException(
        'Invalid response. Must be "accept" or "reject".',
      );
    }
    return this.service.ownerRespondToProposal(proposalId, userId, response);
  }
}
