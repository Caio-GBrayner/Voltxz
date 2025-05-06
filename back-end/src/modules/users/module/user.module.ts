import { Module } from "@nestjs/common";
import { UserController } from "../controllers/users.controller";
import { UserService } from "../services/users.service";
import {PrismaModule} from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
  })
  export class UserModule {}