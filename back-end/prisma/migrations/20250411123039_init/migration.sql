-- CreateEnum
CREATE TYPE "AgreementStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "OwnerAgreementStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "SolarProjectStatus" AS ENUM ('pending_approval', 'active', 'completed');

-- CreateEnum
CREATE TYPE "Agreement" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "InvestmentStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('land_owner', 'investor', 'company');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL,
    "phone" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "land_owners" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "document_id" TEXT NOT NULL,

    CONSTRAINT "land_owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "document_id" VARCHAR(20) NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investors" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "document_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "investors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lands" (
    "id" UUID NOT NULL,
    "owner_id" UUID NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "availability" BOOLEAN NOT NULL DEFAULT true,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "complement" VARCHAR(255),
    "district" VARCHAR(255),
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "postal_code" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investments" (
    "id" UUID NOT NULL,
    "project_id" UUID NOT NULL,
    "investor_id" UUID,
    "value_invested" DECIMAL(15,2) NOT NULL,
    "invested_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner_agree" "Agreement" NOT NULL DEFAULT 'pending',
    "company_agree" "Agreement" NOT NULL DEFAULT 'pending',
    "title" VARCHAR(255),
    "description" TEXT,
    "status" "InvestmentStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "investments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" UUID NOT NULL,
    "land_id" UUID NOT NULL,
    "company_id" UUID,
    "power_kw" DECIMAL(10,2) NOT NULL,
    "cost" DECIMAL(15,2) NOT NULL,
    "estimated_return" DECIMAL(15,2) NOT NULL,
    "status" "SolarProjectStatus" NOT NULL DEFAULT 'pending_approval',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "area" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_proposal" (
    "id" UUID NOT NULL,
    "project_id" UUID NOT NULL,
    "land_id" UUID NOT NULL,
    "status" "AgreementStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "owner_agreed" "OwnerAgreementStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "project_proposal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "land_owners_user_id_key" ON "land_owners"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "companies_user_id_key" ON "companies"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "companies_document_id_key" ON "companies"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "investors_user_id_key" ON "investors"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "investors_document_id_key" ON "investors"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "lands_owner_id_key" ON "lands"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "investments_project_id_key" ON "investments"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_land_id_key" ON "projects"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_proposal_project_id_key" ON "project_proposal"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_proposal_land_id_key" ON "project_proposal"("land_id");

-- AddForeignKey
ALTER TABLE "land_owners" ADD CONSTRAINT "land_owners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investors" ADD CONSTRAINT "investors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lands" ADD CONSTRAINT "lands_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "land_owners"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investments" ADD CONSTRAINT "investments_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "lands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_proposal" ADD CONSTRAINT "project_proposal_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_proposal" ADD CONSTRAINT "project_proposal_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "lands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
