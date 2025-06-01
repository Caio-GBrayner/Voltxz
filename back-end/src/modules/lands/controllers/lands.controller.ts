import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { LandsService } from 'src/modules/lands/services/lands.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';

@Controller('api/lands')
@UseGuards(JwtAuthGuard)
export class LandsController {
  constructor(private landsService: LandsService) {}

  @Post()
  create(@Body() createLandDto: CreateLandDto, @UserId() userId: string) {
    if (!userId) {
      throw new Error('User ID is required to create a land.');
    }

    return this.landsService.create(createLandDto, userId);
  }

  @Get('available')
  findAllAvailable() {
    return this.landsService.findAllAvailable();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandDto: UpdateLandDto) {
    return this.landsService.update(id, updateLandDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landsService.findOne(id);
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
    return this.landsService.findAll(page, pageSize);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landsService.remove(id);
  }
}
