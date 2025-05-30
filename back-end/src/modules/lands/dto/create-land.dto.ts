import { IsDecimal, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateLandDto {
  @IsDecimal({ decimal_digits: '2' })
  price!: string;

  @IsString()
  @IsNotEmpty()
  street!: string;

  @IsString()
  @IsNotEmpty()
  number!: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsNotEmpty()
  city!: string;

  @IsString()
  @IsNotEmpty()
  state!: string;

  @IsString()
  @IsNotEmpty()
  postal_code!: string;

  @IsString()
  @IsNotEmpty()
  country!: string;
}
