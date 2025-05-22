import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/users/module/user.module';
import { LandsModule } from 'src/modules/lands/module/lands.module';

@Module({
  imports: [PrismaModule, UserModule, LandsModule],
})
export class AppModule {}
