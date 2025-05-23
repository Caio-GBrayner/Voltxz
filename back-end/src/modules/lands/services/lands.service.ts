import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';

@Injectable()
export class LandsService {
  constructor(private prisma: PrismaService) {}

  async create(createLandDto: CreateLandDto) {
    return this.prisma.lands.create({
      data: {
        ...createLandDto,
        availability: true,
      },
    });
  }

  async findAllAvailable() {
    return this.prisma.lands.findMany({
      where: { availability: true },
    });
  }

  async update(id: string, updateLandDto: UpdateLandDto) {
    return this.prisma.lands.update({
      where: { id },
      data: updateLandDto,
    });
  }
}
