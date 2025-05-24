import { IsDateString, IsDecimal, IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";

import { Agreement, InvestmentStatus } from "generated/prisma";


export class CreateInvestmentDto {

    @IsUUID()
    project_id!: string;
    
    @IsUUID()
    investor_id!: string;

    @IsNotEmpty()
    @IsDecimal()
    value_invested!: number;

    @IsNotEmpty()
    @IsDateString()
    invested_date!: Date;

    @IsEnum(Agreement)
    @IsNotEmpty()
    owner_agree!: Agreement;

    @IsEnum(Agreement)
    @IsNotEmpty()
    company_agree!: Agreement;

    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsEnum(InvestmentStatus)
    @IsNotEmpty()
    status!: InvestmentStatus;
}