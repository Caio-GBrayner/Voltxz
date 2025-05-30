import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InvestorService } from '../services/investor.service';
import { CreateInvestorDto } from '../dto/create-investor.dto';
import { UpdateInvestorDto } from '../dto/update-investor.dto';
import { UserId } from 'src/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('/api/investors')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @Get()
  async findAll() {
    return this.investorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.investorService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createInvestorDto: CreateInvestorDto,
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new Error('User ID is required to create an investor');
    }
    return this.investorService.create(createInvestorDto, userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvestorDto: UpdateInvestorDto,
  ) {
    return this.investorService.update(id, updateInvestorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.investorService.remove(id);
  }
}
