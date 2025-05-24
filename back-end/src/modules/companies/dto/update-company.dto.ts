import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  document_id?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  company_name?: string;
}
