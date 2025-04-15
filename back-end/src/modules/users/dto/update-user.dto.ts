// src/modules/users/dto/update-user.dto.ts
import { IsOptional, IsString, IsEnum, IsEmail, IsDateString } from 'class-validator';
import { UserType } from 'generated/prisma';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  phone?: string | null;

  @IsOptional()
  @IsDateString()
  created_at?: Date;

  @IsOptional()
  @IsEnum(UserType)
  user_type?: UserType; 
}
