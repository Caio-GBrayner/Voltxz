import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { UserType } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (userExists) {
      throw new ConflictException('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...registerDto,
        name: registerDto.name ?? 'Default Name',
        password: hashedPassword,
      },
    });

    if (registerDto.user_type === UserType.land_owner) {
      await this.prisma.landOwners.create({
        data: {
          user_id: user.id,
          document_id: 'DOC-123',
        },
      });
    }

    return {
      access_token: this.jwtService.sign({ sub: user.id, email: user.email }),
    };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    return {
      access_token: this.jwtService.sign({ sub: user.id, email: user.email }),
      user_type: user.user_type,
    };
  }
}
