import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';
import { UserType as UserTypeDecorator } from 'src/decorators/user-type.decorator';
import {
  AgreementStatus,
  InvestmentStatus,
  SolarProjectStatus,
  UserType,
} from 'generated/prisma';
import { ProjectService } from 'src/modules/projects/services/projects.service';
import { ProjectProposalService } from 'src/modules/project_proposal/service/project_proposal.service';
import { InvestmentService } from 'src/modules/investments/services/investment.service';

@Controller('api/companies')
@UseGuards(JwtAuthGuard)
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly projectService: ProjectService,
    private readonly projectProposalService: ProjectProposalService,
    private readonly investmentService: InvestmentService,
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
    @Query('status') statusString?: string,
  ) {
    if (userType !== UserType.company) {
      throw new BadRequestException('Only companies can access this endpoint.');
    }
    let status: SolarProjectStatus | undefined;
    if (statusString) {
      if (
        !Object.values(SolarProjectStatus).includes(
          statusString as SolarProjectStatus,
        )
      ) {
        throw new BadRequestException('Invalid status provided.');
      }
      status = statusString as SolarProjectStatus;
    }
    return this.projectService.findProjectsByCompanyUserId(userId, status);
  }

  @Get('my-project-proposals')
  async getMyProjectProposals(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
    @Query('status') statusString?: string,
  ) {
    if (userType !== UserType.company) {
      throw new BadRequestException('Only companies can access this endpoint.');
    }

    let status: AgreementStatus | undefined;
    if (statusString) {
      if (
        !Object.values(AgreementStatus).includes(
          statusString as AgreementStatus,
        )
      ) {
        throw new BadRequestException('Invalid status provided.');
      }
      status = statusString as AgreementStatus;
    }

    return this.projectProposalService.findProposalsByCompanyUserId(
      userId,
      status,
    );
  }

  @Get('my-investments')
  async getMyInvestments(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
    @Query('status') statusString?: string,
  ) {
    if (userType !== UserType.company) {
      throw new BadRequestException('Only companies can access this endpoint.');
    }
    let status: InvestmentStatus | undefined;
    if (statusString) {
      if (
        !Object.values(InvestmentStatus).includes(
          statusString as InvestmentStatus,
        )
      ) {
        throw new BadRequestException('Invalid status provided.');
      }
      status = statusString as InvestmentStatus;
    }
    return this.investmentService.findInvestmentsByCompanyUserId(
      userId,
      status,
    );
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
