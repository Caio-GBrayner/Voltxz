import {
  IsDecimal,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateProjectDto {
  @IsUUID()
  land_id!: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  power_kw!: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  cost!: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  estimated_return!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  area!: string;
}
