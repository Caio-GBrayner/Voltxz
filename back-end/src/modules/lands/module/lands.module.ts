import { Module } from '@nestjs/common';
import { LandsService } from 'src/modules/lands/services/lands.service';
import { LandsController } from 'src/modules/lands/controllers/lands.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LandsController],
  providers: [LandsService, PrismaService],
})
export class LandsModule {}
