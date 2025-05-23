import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginResponse } from 'src/auth/interfaces/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<{ access_token: string }> {
    return await this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return await this.authService.login(loginDto.email, loginDto.password);
  }
}
