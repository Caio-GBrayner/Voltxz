import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateInvestorDto {
  @IsUUID()
  @IsNotEmpty()
  user_id!: string;

  @IsNotEmpty()
  @IsString()
  document_id!: string;
}
