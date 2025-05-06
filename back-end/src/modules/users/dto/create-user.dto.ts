import {
  IsString,
  IsOptional,
  IsEmail,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { UserType } from 'generated/prisma';
export class CreateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsString()
  phone?: string | null;

  @IsOptional()
  @IsDateString()
  created_at?: Date;

  @IsEnum(UserType)
  user_type!: UserType;
}
