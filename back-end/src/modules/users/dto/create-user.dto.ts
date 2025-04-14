import { UserType } from 'generated/prisma';

export class CreateUserDto {
  name?: string;
  email!: string;
  password!: string;
  phone?: string | null;
  created_at?: Date;
  user_type!: UserType;
}
