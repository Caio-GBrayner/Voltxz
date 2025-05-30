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
import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvestmentService } from '../services/investment.service';
import { CreateInvestmentDto } from '../dto/create-investments.dto';
import { UpdateInvestmentDto } from '../dto/update-investments.dto';
import { UserId } from '../../../decorators/current-user.decorator';
 

@Controller('api/investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createInvestmentDto: CreateInvestmentDto,
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new UnauthorizedException('User not found');
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
