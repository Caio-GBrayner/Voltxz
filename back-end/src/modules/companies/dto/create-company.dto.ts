import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  document_id!: string;

  @IsString()
  @IsNotEmpty()
  company_name!: string;
}
