import { Module } from "@nestjs/common";
import { InvestorService} from "src/modules/investors/services/investor.service";
import {InvestorController } from "src/modules/investors/controllers/investor.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [InvestorController],
  providers: [InvestorService, PrismaService],
})
export class InvestorModule {}