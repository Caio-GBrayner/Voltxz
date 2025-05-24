import { IsUUID, IsEnum, IsString, IsNumber } from 'class-validator';

export class CreateProjectDto {
  @IsUUID()
  land!: string;

  @IsUUID()
  company_Id!: string;

  @IsNumber()
  power_kw!: number;

  @IsNumber()
  cost!: number;

  @IsNumber()
  estimated_return!: number;

  @IsEnum(['pending_approval', 'active', 'completed'])
  status!: 'pending_approval' | 'active' | 'completed';

  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsNumber()
  area!: number;
}
