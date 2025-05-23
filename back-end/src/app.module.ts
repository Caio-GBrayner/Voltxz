import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/users/module/user.module';
import { LandsModule } from 'src/modules/lands/module/lands.module';
import {AuthModule } from './auth/module/auth.module'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, UserModule, LandsModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
