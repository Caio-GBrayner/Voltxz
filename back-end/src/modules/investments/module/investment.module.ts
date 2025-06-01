import { Module } from '@nestjs/common';
import { InvestmentService } from 'src/modules/investments/services/investment.service';
import { InvestmentController } from 'src/modules/investments/controllers/investment.controllers';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InvestmentController],
  providers: [InvestmentService, PrismaService],
  exports: [InvestmentService],
})
export class InvestmentModule {}
