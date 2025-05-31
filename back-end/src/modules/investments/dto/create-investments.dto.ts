import {
  IsDecimal,
  IsNotEmpty,
  IsString,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class CreateInvestmentDto {
  @IsUUID()
  project_id!: string;

  @IsNotEmpty()
  @IsString()
  @IsDecimal({ decimal_digits: '2' })
  value_invested!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;
}
