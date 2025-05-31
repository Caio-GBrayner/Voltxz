import { IsDecimal, IsEnum, IsOptional, IsString } from 'class-validator';

import { Agreement, InvestmentStatus } from 'generated/prisma';

export class UpdateInvestmentDto {
  @IsDecimal()
  @IsOptional()
  value_invested?: number;

  @IsEnum(Agreement)
  @IsOptional()
  owner_agree?: Agreement;

  @IsEnum(Agreement)
  @IsOptional()
  company_agree?: Agreement;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(InvestmentStatus)
  @IsOptional()
  status?: InvestmentStatus;
}
