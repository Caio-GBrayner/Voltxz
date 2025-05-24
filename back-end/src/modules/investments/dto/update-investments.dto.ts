import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { Agreement, InvestmentStatus } from 'generated/prisma';

export class UpdateInvestmentDto {
  @IsNotEmpty()
  @IsDecimal()
  value_invested!: number;

  @IsEnum(Agreement)
  @IsNotEmpty()
  @IsOptional()
  owner_agree?: Agreement;

  @IsEnum(Agreement)
  @IsNotEmpty()
  @IsOptional()
  company_agree?: Agreement;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsEnum(InvestmentStatus)
  @IsNotEmpty()
  status?: InvestmentStatus;
}
