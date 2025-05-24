import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { InvestorService } from "../services/investor.service";
import { CreateInvestorDto } from "../dto/create-investor.dto";
import { UpdateInvestorDto } from "../dto/update-investor.dto";


@Controller("/api/investors")
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @Get()
    async findAll() {
        return this.investorService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.investorService.findOne(id);
    }

    @Post()
    async create(@Body() createInvestorDto: CreateInvestorDto) {
        return this.investorService.create(createInvestorDto);
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateInvestorDto: UpdateInvestorDto) {
        return this.investorService.update(id, updateInvestorDto);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.investorService.remove(id);
    }
    
}