import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from 'src/modules/users/services/users.service';
import { User as UserModel } from 'generated/prisma';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto'; // Criar este DTO também

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    const userData = {
      ...createUserDto,
      name: createUserDto.name ?? '',
      phone: createUserDto.phone ?? null,
      created_at: createUserDto.created_at ?? new Date(),
    };

    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({ id });
  }

  @Get()
  async getUsers(
    @Query('skip', new ParseIntPipe({ optional: true })) skip?: number,
    @Query('take', new ParseIntPipe({ optional: true })) take?: number,
  ): Promise<UserModel[]> {
    return this.userService.users({
      skip,
      take,
    });
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: id.toString() },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    return this.userService.deleteUser({ id.toString() });
  }
}
