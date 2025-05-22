import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string = '';

  @IsString()
  @IsNotEmpty()
  name: string = '';

  @IsString()
  @IsOptional()
  password?: string = '';
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string = '';

  @IsString()
  @IsOptional()
  name?: string = '';

  @IsString()
  @IsOptional()
  password?: string = '';
}
