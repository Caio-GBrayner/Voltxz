import { IsString } from 'class-validator';

export class CreateLandOwnerDto {
  @IsString()
  document_id!: string;
}
