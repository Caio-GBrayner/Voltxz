import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Param,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { InvestmentService } from '../services/investment.service';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';
import { UserType } from 'src/decorators/user-type.decorator';

@Controller('api/investments')
@UseGuards(JwtAuthGuard)
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post()
  async create(
    @Body() createInvestmentDto: CreateInvestmentDto,
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new BadRequestException(
        'User ID is required to create an investment.',
      );
    }
    return this.investmentService.create(createInvestmentDto, userId);
  }

  @Get()
  async findAll() {
    return this.investmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.investmentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ) {
    return this.investmentService.update(id, updateInvestmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.investmentService.remove(id);
  }

  @Patch(':id/owner-response')
  async ownerRespond(
    @Param('id') investmentId: string,
    @Body('response') response: 'accept' | 'reject',
    @UserId() userId: string,
    @UserType() userType: string,
  ) {
    if (!userId || !userType) {
      throw new BadRequestException(
        'User ID and Type are required for this action.',
      );
    }
    if (!['accept', 'reject'].includes(response)) {
      throw new BadRequestException(
        'Invalid response. Must be "accept" or "reject".',
      );
    }
    if (userType !== 'LandOwner') {
      throw new BadRequestException(
        'Only Land Owners can respond to this offer via this endpoint.',
      );
    }
    return this.investmentService.respondToInvestment(
      investmentId,
      userId,
      'LandOwner',
      response,
    );
  }

  @Patch(':id/company-response')
  async companyRespond(
    @Param('id') investmentId: string,
    @Body('response') response: 'accept' | 'reject',
    @UserId() userId: string,
    @UserType() userType: string,
  ) {
    if (!userId || !userType) {
      throw new BadRequestException(
        'User ID and Type are required for this action.',
      );
    }
    if (!['accept', 'reject'].includes(response)) {
      throw new BadRequestException(
        'Invalid response. Must be "accept" or "reject".',
      );
    }
    if (userType !== 'Company') {
      throw new BadRequestException(
        'Only Companies can respond to this offer via this endpoint.',
      );
    }
    return this.investmentService.respondToInvestment(
      investmentId,
      userId,
      'Company',
      response,
    );
  }
}
