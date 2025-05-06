import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
@Injectable()
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return !user; 
  }

  defaultMessage() {
    return 'E-mail já cadastrado';
  }
}