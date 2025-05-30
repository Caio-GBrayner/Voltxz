import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LandsService } from 'src/modules/lands/services/lands.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';

@Controller('api/lands')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.landsService.findAll();
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landsService.remove(id);
  }
}
