import { UserType } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  phone?: string | null;

  @IsOptional()
  @IsEnum(UserType)
  user_type?: UserType; 
}