import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/users/module/user.module';
import { LandsModule } from 'src/modules/lands/module/lands.module';
import {AuthModule } from './auth/module/auth.module'
import { ConfigModule } from '@nestjs/config';
import { LandOwnerModule } from './modules/land_owners/module/land_owner.module';
import { CompanyModule } from './modules/companies/module/company.module';
import { InvestmentModule } from './modules/investments/module/investment.module';
@Module({
  imports: [PrismaModule, UserModule, LandOwnerModule, LandsModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
  }), CompanyModule, InvestmentModule],
})
export class AppModule {}
