import {
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateLandOwnerDto {
 
    @IsUUID()
    user_id!: string;

    @IsString()
    document_id!: string;
}