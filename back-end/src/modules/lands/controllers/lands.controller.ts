import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LandsService } from 'src/modules/lands/services/lands.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('api/lands')
export class LandsController {
  constructor(private landsService: LandsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createLandDto: CreateLandDto) {
    return this.landsService.create(createLandDto);
  }

  @Get('available')
  findAllAvailable() {
    return this.landsService.findAllAvailable();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateLandDto: UpdateLandDto) {
    return this.landsService.update(id, updateLandDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.landsService.findOne(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.landsService.findAll();
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.landsService.remove(id);
  }
}
