import {
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { Agreement, InvestmentStatus } from 'generated/prisma';

export class CreateInvestmentDto {
  @IsUUID()
  @IsNotEmpty()
  project_id!: string;

  
  @IsUUID()
  @IsOptional()
  investor_id?: string;

  @IsNotEmpty()
  @IsNumber()
  value_invested!: number;

  @IsOptional()
  @IsEnum(Agreement)
  owner_agree?: Agreement;

  @IsOptional()
  @IsEnum(Agreement)
  company_agree?: Agreement;

  @IsOptional()
  @IsEnum(InvestmentStatus)
  status?: InvestmentStatus;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
