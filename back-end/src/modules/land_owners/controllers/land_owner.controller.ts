import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { LandOwnerService } from '../services/land_owner.service';
import { CreateLandOwnerDto } from '../dto/create-land_owner';
import { UpdateLandOwnerDto } from '../dto/update-land_owner';

@Controller('api/land-owners')
export class LandOwnerController {
  constructor(private landOwnerService: LandOwnerService) {}

  @Post()
  create(@Body() createLandOwnerDto: CreateLandOwnerDto) {
    return this.landOwnerService.create(createLandOwnerDto);
  }

  @Get()
  findAll() {
    return this.landOwnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landOwnerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLandOwnerDto: UpdateLandOwnerDto,
  ) {
    return this.landOwnerService.update(id, updateLandOwnerDto);
  }
}
