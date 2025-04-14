export class UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  phone?: string | null;
  created_at?: Date;
  user_type?: string;
}
