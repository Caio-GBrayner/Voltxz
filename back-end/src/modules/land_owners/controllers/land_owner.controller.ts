import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  BadRequestException,
  Req,
  Query,
} from '@nestjs/common';
import { LandOwnerService } from '../services/land_owner.service';
import { CreateLandOwnerDto } from '../dto/create-land_owner';
import { UpdateLandOwnerDto } from '../dto/update-land_owner';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserId } from 'src/decorators/current-user.decorator';
import { AgreementStatus, InvestmentStatus, UserType } from 'generated/prisma';
import { ProjectProposalService } from 'src/modules/project_proposal/service/project_proposal.service';
import { UserType as UserTypeDecorator } from 'src/decorators/user-type.decorator';
import { InvestmentService } from 'src/modules/investments/services/investment.service';
@Controller('api/land-owners')
@UseGuards(JwtAuthGuard)
export class LandOwnerController {
  constructor(
    private landOwnerService: LandOwnerService,
    private projectProposalService: ProjectProposalService,
    private investmentService: InvestmentService,
  ) {}

  @Post()
  async create(
    @Body() createLandOwnerDto: CreateLandOwnerDto,
    @UserId() userId: string,
  ) {
    if (!userId) {
      throw new BadRequestException(
        'User ID is required to create a land owner',
      );
    }
    return this.landOwnerService.create(createLandOwnerDto, userId);
  }

  @Get('me')
  async getMyProfile(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
  ) {
    if (userType !== UserType.land_owner) {
      throw new BadRequestException(
        'Only land owners can access this endpoint.',
      );
    }
    return this.landOwnerService.getLandOwnerProfileByUserId(userId);
  }

  // @Patch('me')
  // async updateMyProfile(
  //   @Body() updateLandOwnerDto: UpdateLandOwnerDto,
  //   @UserId() userId: string,
  //   @UserTypeDecorator() userType: string,
  // ) {
  //   if (userType !== UserType.land_owner) {
  //     throw new BadRequestException(
  //       'Only land owners can update their profile.',
  //     );
  //   }
  //   return this.landOwnerService.updateLandOwnerProfileByUserId(
  //     userId,
  //     updateLandOwnerDto,
  //   );
  // }

  @Get('my-lands')
  async getMyLands(@UserId() userId: string, @Req() request: Request) {
    const userFromRequest = request['user'] as { type?: string } | undefined;
    const userType: string | undefined = userFromRequest?.type;

    if (userType !== UserType.land_owner) {
      throw new BadRequestException(
        'Only land owners can access this endpoint.',
      );
    }
    return this.landOwnerService.findLandsByOwnerId(userId);
  }

  @Get('my-project-proposals')
  async getMyProjectProposals(
    @UserId() userId: string,
    @UserTypeDecorator() userType: string,
    @Query('status') statusString?: string,
  ) {
    if (userType !== UserType.land_owner) {
      throw new BadRequestException(
        'Only land owners can access this endpoint.',
      );
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

    return this.projectProposalService.findProposalsByLandOwnerUserId(
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
    if (userType !== UserType.land_owner) {
      throw new BadRequestException(
        'Only land owners can access this endpoint.',
      );
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
    return this.investmentService.findInvestmentsByLandOwnerUserId(
      userId,
      status,
    );
  }

  @Get()
  findAll() {
    return this.landOwnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landOwnerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLandOwnerDto: UpdateLandOwnerDto,
  ) {
    return this.landOwnerService.update(id, updateLandOwnerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.landOwnerService.remove(id);
  }
}
