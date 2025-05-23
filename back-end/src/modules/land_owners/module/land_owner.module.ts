import { Module } from "@nestjs/common";
import { LandOwnerService } from "../services/land_owner.service";
import { LandOwnerController } from "../controllers/land_owner.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [LandOwnerController],
  providers: [LandOwnerService, PrismaService],
})
export class LandOwnerModule {}
