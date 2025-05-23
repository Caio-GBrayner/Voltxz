import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLandOwnerDto } from '../dto/create-land_owner';
import { UpdateLandOwnerDto } from '../dto/update-land_owner';

@Injectable()
export class LandOwnerService {
  constructor(private prisma: PrismaService) {}

  async create(createLandOwnerDto: CreateLandOwnerDto) {
    return this.prisma.landOwners.create({
      data: createLandOwnerDto,
    });
  }

  async findAll() {
    return this.prisma.landOwners.findMany();
  }

  async findOne(id: string) {
    return this.prisma.landOwners.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateLandOwnerDto: UpdateLandOwnerDto) {
    return this.prisma.landOwners.update({
      where: { id },
      data: updateLandOwnerDto,
    });
  }

  async remove(id: string) {
    return this.prisma.landOwners.delete({
      where: { id },
    });
  }
}