import { Module } from "@nestjs/common";
import { InvestorController } from "src/modules/investors/controllers/investor.controller";
import { InvestorService } from "src/modules/investors/services/investor.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [InvestorController],
  providers: [InvestorService, PrismaService],
})
export class InvestorModule {}