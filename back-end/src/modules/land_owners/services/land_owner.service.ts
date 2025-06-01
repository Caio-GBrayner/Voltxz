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

  async getLandOwnerProfileByUserId(userId: string) {
    const landOwner = await this.prisma.landOwners.findUnique({
      where: { user_id: userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            user_type: true,
          },
        },
      },
    });
    if (!landOwner) {
      throw new NotFoundException(
        'Land Owner profile not found for this user.',
      );
    }
    return landOwner;
  }

  // async updateLandOwnerProfileByUserId(
  //   userId: string,
  //   updateLandOwnerDto: UpdateLandOwnerDto,
  // ) {
  //   const landOwner = await this.prisma.landOwners.findUnique({
  //     where: { user_id: userId },
  //   });

  //   if (!landOwner) {
  //     throw new NotFoundException('Land Owner profile not found.');
  //   }

  //   const userDataToUpdate: { name?: string; email?: string; phone?: string } =
  //     {};
  //   if (updateLandOwnerDto.user_name !== undefined) {
  //     userDataToUpdate.name = updateLandOwnerDto.user_name;
  //   }
  //   if (updateLandOwnerDto.user_email !== undefined) {
  //     userDataToUpdate.email = updateLandOwnerDto.user_email;
  //   }
  //   if (updateLandOwnerDto.user_phone !== undefined) {
  //     userDataToUpdate.phone = updateLandOwnerDto.user_phone;
  //   }

  //   return this.prisma.landOwners.update({
  //     where: { id: landOwner.id },
  //     data: {
  //       document_id: updateLandOwnerDto.document_id,
  //       user: {
  //         update: userDataToUpdate,
  //       },
  //     },
  //   });
  // }

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
