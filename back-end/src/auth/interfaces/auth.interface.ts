export interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
    user_type: string;
    phone?: string;
  };
}
