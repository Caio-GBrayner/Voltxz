import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';

@Controller('api/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Patch(':id')
  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Get(':id')
  findOne(id: string) {
    return this.companyService.findOne(id);
  }

  @Delete(':id')
  remove(id: string) {
    return this.companyService.remove(id);
  }
}
