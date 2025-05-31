import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLandOwnerDto } from '../dto/create-land_owner';
import { UpdateLandOwnerDto } from '../dto/update-land_owner';

@Injectable()
export class LandOwnerService {
  constructor(private prisma: PrismaService) {}

  async create(createLandOwnerDto: CreateLandOwnerDto, userId: string) {
    const existingLandOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: userId },
    });

    if (existingLandOwner) {
      throw new Error('User is already a land owner');
    }
    return this.prisma.landOwners.create({
      data: {
        ...createLandOwnerDto,
        user_id: userId,
      },
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

  async findLandsByOwnerId(userId: string) {
    const landOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!landOwner) {
      throw new NotFoundException(
        'Land Owner profile not found for this user.',
      );
    }

    return this.prisma.lands.findMany({
      where: {
        owner_id: landOwner.id,
      },
      include: {},
    });
  }
}
