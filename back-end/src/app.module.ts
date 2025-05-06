import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/users/module/user.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
