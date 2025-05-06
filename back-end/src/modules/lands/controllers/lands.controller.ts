import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { LandsService } from './lands.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';

@Controller('lands')
export class LandsController {
  constructor(private landsService: LandsService) {}

  @Post()
  create(@Body() createLandDto: CreateLandDto) {
    return this.landsService.create(createLandDto);
  }

  @Get('available')
  findAllAvailable() {
    return this.landsService.findAllAvailable();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandDto: UpdateLandDto) {
    return this.landsService.update(id, updateLandDto);
  }
}
