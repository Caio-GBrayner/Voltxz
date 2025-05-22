import { IsEmail, IsEnum, IsString, MinLength, IsOptional } from 'class-validator';
import { UserType } from '@prisma/client';

export class RegisterDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsEnum(UserType)
  user_type!: UserType;

  @IsString()
  @IsOptional()
  phone?: string;
}
