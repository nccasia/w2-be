/*
  Warnings:

  - The values [WORKFLOW_TRIGGER,APP_TRIGGER] on the enum `TriggerType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `actvityId` on the `TaskDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `workflowId` on the `TaskDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `activityId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workflow` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `key` to the `Trigger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TriggerStatus" AS ENUM ('NEW', 'PROCESSING', 'PROCESSED', 'FAILED');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('HTTP_ACTIVITY', 'GRAPHQL_ACTIVITY', 'SCRIPT_ACTIVITY', 'SYSTEM_ACTIVITY');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ActionType" ADD VALUE 'CREATE_COMMENT';
ALTER TYPE "ActionType" ADD VALUE 'UPDATE_STATUS';
ALTER TYPE "ActionType" ADD VALUE 'ASSIGN_USER';
ALTER TYPE "ActionType" ADD VALUE 'SUMBIT_FORM';

-- AlterEnum
BEGIN;
CREATE TYPE "TriggerType_new" AS ENUM ('FORM_TRIGGER', 'SYSTEM_TRIGGER', 'MANUAL_TRIGGER', 'WEBHOOK_TRIGGER');
ALTER TABLE "Trigger" ALTER COLUMN "type" TYPE "TriggerType_new" USING ("type"::text::"TriggerType_new");
ALTER TYPE "TriggerType" RENAME TO "TriggerType_old";
ALTER TYPE "TriggerType_new" RENAME TO "TriggerType";
DROP TYPE "TriggerType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "TaskDefinition" DROP CONSTRAINT "TaskDefinition_actvityId_fkey";

-- DropForeignKey
ALTER TABLE "TaskDefinition" DROP CONSTRAINT "TaskDefinition_workflowId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Workflow" DROP CONSTRAINT "Workflow_organizationId_fkey";

-- DropIndex
DROP INDEX "TaskDefinition_workflowId_idx";

-- DropIndex
DROP INDEX "Trigger_activityId_idx";

-- AlterTable
ALTER TABLE "TaskDefinition" DROP COLUMN "actvityId",
DROP COLUMN "workflowId";

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "activityId",
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "status" "TriggerStatus" NOT NULL,
ADD COLUMN     "taskId" INTEGER,
ADD COLUMN     "value" JSONB,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "Workflow";

-- CreateTable
CREATE TABLE "TaskDefinitionActivityDefinition" (
    "id" SERIAL NOT NULL,
    "taskDefinitionId" INTEGER NOT NULL,
    "activityDefinitionId" INTEGER NOT NULL,
    "config" JSONB,
    "initialValue" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaskDefinitionActivityDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityDefinition" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "synchronous" BOOLEAN NOT NULL DEFAULT false,
    "type" "ActivityType" NOT NULL,
    "config" JSONB,
    "initialValue" JSONB,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "ActivityDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TaskDefinitionActivityDefinition_taskDefinitionId_idx" ON "TaskDefinitionActivityDefinition"("taskDefinitionId");

-- CreateIndex
CREATE INDEX "TaskDefinitionActivityDefinition_activityDefinitionId_idx" ON "TaskDefinitionActivityDefinition"("activityDefinitionId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityDefinition_key_key" ON "ActivityDefinition"("key");

-- CreateIndex
CREATE INDEX "ActivityDefinition_key_idx" ON "ActivityDefinition"("key");

-- AddForeignKey
ALTER TABLE "TaskDefinitionActivityDefinition" ADD CONSTRAINT "TaskDefinitionActivityDefinition_taskDefinitionId_fkey" FOREIGN KEY ("taskDefinitionId") REFERENCES "TaskDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskDefinitionActivityDefinition" ADD CONSTRAINT "TaskDefinitionActivityDefinition_activityDefinitionId_fkey" FOREIGN KEY ("activityDefinitionId") REFERENCES "ActivityDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
