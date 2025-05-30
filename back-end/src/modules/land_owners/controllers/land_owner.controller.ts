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
import { LandOwnerService } from '../services/land_owner.service';
import { CreateLandOwnerDto } from '../dto/create-land_owner';
import { UpdateLandOwnerDto } from '../dto/update-land_owner';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator'; // Importa o decorator para obter o user_id

@Controller('api/land-owners')
export class LandOwnerController {
  constructor(private landOwnerService: LandOwnerService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createLandOwnerDto: CreateLandOwnerDto,
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new Error('User ID is required to create a land owner');
    }
    return this.landOwnerService.create(createLandOwnerDto, userId);
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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.landOwnerService.remove(id);
  }
}
