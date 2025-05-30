import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { InvestmentService } from '../services/investment.service';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';

@Controller('api/investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post()
  async create(@Body() createInvestmentDto: CreateInvestmentDto) {
    return this.investmentService.create(createInvestmentDto);
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
