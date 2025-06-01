import {
  BadRequestException,
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
import { UserType as UserTypeDecorator } from 'src/decorators/user-type.decorator';
import { UserType } from 'generated/prisma';
import { InvestmentService } from 'src/modules/investments/services/investment.service';

@Controller('/api/investors')
@UseGuards(JwtAuthGuard)
export class InvestorController {
  constructor(
    private readonly investorService: InvestorService,
    private readonly investmentService: InvestmentService,
  ) {}

  @Get()
  async findAll() {
    return this.investorService.findAll();
  }

  @Get('me')
  async getMyProfile(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
  ) {
    if (userType !== UserType.investor) {
      throw new BadRequestException('Only investors can access this endpoint.');
    }
    return this.investorService.getInvestorProfileByUserId(userId);
  }

  // @Patch('me')
  // async updateMyProfile(
  //   @Body() updateInvestorDto: UpdateInvestorDto,
  //   @UserId() userId: string,
  //   @UserTypeDecorator() userType: string,
  // ) {
  //   if (userType !== UserType.investor) {
  //     throw new BadRequestException('Only investors can update their profile.');
  //   }
  //   return this.investorService.updateInvestorProfileByUserId(
  //     userId,
  //     updateInvestorDto,
  //   );
  // }

  @Get('my-investments')
  async getMyInvestments(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
  ) {
    if (userType !== UserType.investor) {
      throw new BadRequestException('Only investors can access this endpoint.');
    }
    return this.investmentService.findInvestmentsByInvestorUserId(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.investorService.findOne(id);
  }

  @Post()
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
