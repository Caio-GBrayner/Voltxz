import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { InvestmentService } from '../services/investment.service';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';

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
      throw new Error('User ID is required to create an investment.');
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
}
