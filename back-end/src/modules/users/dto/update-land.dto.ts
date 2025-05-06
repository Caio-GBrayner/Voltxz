import { IsDecimal, IsOptional, IsBoolean } from 'class-validator';  
import { PartialType } from '@nestjs/swagger';
import { CreateLandDto } from './create-land.dto';

export class UpdateLandDto extends PartialType(CreateLandDto) {
  @IsDecimal({ decimal_digits: '2' })
  @IsOptional()
  price?: number;

  @IsBoolean()
  @IsOptional()
  availability?: boolean;
}
