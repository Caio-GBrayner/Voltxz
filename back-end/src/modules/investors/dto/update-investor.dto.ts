import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateInvestorDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  document_id!: string;
}