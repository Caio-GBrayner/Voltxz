import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { AgreementStatus, OwnerAgreementStatus } from 'generated/prisma';

export class UpdateProjectProposalDto {
  @IsOptional()
  @IsUUID()
  project_id?: string;

  @IsOptional()
  @IsUUID()
  land_id?: string;

  @IsOptional()
  @IsEnum(AgreementStatus)
  status?: AgreementStatus;

  @IsOptional()
  @IsEnum(OwnerAgreementStatus)
  owner_agreed?: OwnerAgreementStatus;
}
