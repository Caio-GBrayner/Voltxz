import {
  IsDecimal,
  IsBoolean,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateLandDto {
  @IsDecimal({ decimal_digits: '2' })
  @IsOptional()
  price?: string;

  @IsBoolean()
  @IsOptional()
  availability?: boolean;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  street?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  number?: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  city?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  state?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  postal_code?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  country?: string;
}
