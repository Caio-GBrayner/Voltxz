import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/module/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UserModule,         
    PrismaModule,       
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
