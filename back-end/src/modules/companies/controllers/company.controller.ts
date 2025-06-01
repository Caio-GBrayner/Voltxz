import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';
import { UserType as UserTypeDecorator } from 'src/decorators/user-type.decorator';
import { UserType } from 'generated/prisma';
import { ProjectService } from 'src/modules/projects/services/projects.service';

@Controller('api/companies')
@UseGuards(JwtAuthGuard)
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly projectService: ProjectService,
  ) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto, @UserId() userId: string) {
    if (!userId) {
      throw new Error('User ID is required to create a company');
    }
    return this.companyService.create(createCompanyDto, userId);
  }

  @Get('me')
  async getMyProfile(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
  ) {
    if (userType !== UserType.company) {
      throw new BadRequestException('Only companies can access this endpoint.');
    }
    return this.companyService.getCompanyProfileByUserId(userId);
  }

  // @Patch('me')
  // async updateMyProfile(
  //   @Body() updateCompanyDto: UpdateCompanyDto,
  //   user: User,
  //   @UserId() userId: string,
  //   @UserTypeDecorator() userType: string,
  // ) {
  //   if (userType !== UserType.company) {
  //     throw new BadRequestException('Only companies can update their profile.');
  //   }
  //   return this.companyService.updateCompanyProfileByUserId(
  //     userId,
  //     updateCompanyDto,
  //     user,
  //   );
  // }

  @Get('my-projects')
  async getMyProjects(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
  ) {
    if (userType !== UserType.company) {
      throw new BadRequestException('Only companies can access this endpoint.');
    }
    return this.projectService.findProjectsByCompanyUserId(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
