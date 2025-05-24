import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @IsUUID()
  user_id!: string;

  @IsString()
  @IsNotEmpty()
  document_id!: string;

  @IsString()
  @IsNotEmpty()
  company_name!: string;
}
