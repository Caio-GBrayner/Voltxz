import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInvestorDto {
  @IsNotEmpty()
  @IsString()
  document_id!: string;
}
