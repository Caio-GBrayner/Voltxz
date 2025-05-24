import { IsEnum, IsString, IsDecimal, IsOptional } from 'class-validator';
import { SolarProjectStatus } from 'generated/prisma';

export class UpdateProjectDto {
  @IsDecimal()
  @IsOptional()
  power_kw?: number;

  @IsDecimal()
  @IsOptional()
  cost?: number;

  @IsDecimal()
  @IsOptional()
  estimated_return?: number;

  @IsEnum(SolarProjectStatus)
  @IsOptional()
  status?: SolarProjectStatus;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDecimal()
  @IsOptional()
  area?: number;
}
