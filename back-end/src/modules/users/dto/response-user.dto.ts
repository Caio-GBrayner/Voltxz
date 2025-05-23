import { Exclude, Expose } from 'class-transformer';
import { UserType } from 'generated/prisma';

@Exclude()
export class ResponseUserDto {
  @Expose()
  id!: string;

  @Expose()
  name?: string;

  @Expose()
  email!: string;

  @Expose()
  user_type!: UserType;

  @Expose()
  phone?: string;

  @Expose()
  created_at?: Date;
}
