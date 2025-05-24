import { IsString, IsOptional } from 'class-validator';

export class UpdateLandOwnerDto {
  @IsString()
  @IsOptional()
  document_id?: string;
}
