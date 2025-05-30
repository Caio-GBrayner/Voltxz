import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLandDto } from 'src/modules/lands/dto/create-land.dto';
import { UpdateLandDto } from 'src/modules/lands/dto/update-land.dto';

@Injectable()
export class LandsService {
  constructor(private prisma: PrismaService) {}

  async create(createLandDto: CreateLandDto, userId: string) {
    const landOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!landOwner) {
      throw new BadRequestException('User is not registered as a land owner.');
    }

    return this.prisma.lands.create({
      data: {
        ...createLandDto,
        owner_id: landOwner.id,
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

  async remove(id: string) {
    return this.prisma.lands.delete({
      where: { id },
    });
  }

  async findOne(id: string) {
    return this.prisma.lands.findUnique({
      where: { id },
    });
  }

  findAll() {
    return this.prisma.lands.findMany();
  }
}
