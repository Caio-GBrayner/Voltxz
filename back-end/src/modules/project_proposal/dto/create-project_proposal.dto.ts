import { IsDateString, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { OwnerAgreementStatus } from 'generated/prisma';
import { AgreementStatus } from 'generated/prisma';

export class CreateProjectProposalDto {
  @IsUUID()
  project_id!: string;

  @IsUUID()
  land_id!: string;

  @IsEnum(AgreementStatus)
  @IsNotEmpty()
  status!: AgreementStatus;

  @IsDateString()
  @IsNotEmpty()
  created_at!: Date;

  @IsEnum(OwnerAgreementStatus)
  @IsNotEmpty()
  owner_agreed!: OwnerAgreementStatus;
}
