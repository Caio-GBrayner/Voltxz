import {
  IsUUID,
  IsEnum,
  IsString,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { SolarProjectStatus } from 'generated/prisma';

export class CreateProjectDto {
  @IsUUID()
  @IsNotEmpty()
  land_id!: string;

  @IsUUID()
  @IsOptional()
  company_id?: string;

  @IsDecimal()
  @IsNotEmpty()
  power_kw!: number;

  @IsDecimal()
  @IsNotEmpty()
  cost!: number;

  @IsDecimal()
  @IsNotEmpty()
  estimated_return!: number;

  @IsEnum(SolarProjectStatus)
  @IsNotEmpty()
  status!: SolarProjectStatus;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDecimal()
  @IsNotEmpty()
  area!: number;
}
