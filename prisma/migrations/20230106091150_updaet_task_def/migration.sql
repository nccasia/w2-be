-- DropForeignKey
ALTER TABLE "TaskDefinition" DROP CONSTRAINT "TaskDefinition_actvityId_fkey";

-- DropForeignKey
ALTER TABLE "TaskDefinition" DROP CONSTRAINT "TaskDefinition_workflowId_fkey";

-- AlterTable
ALTER TABLE "TaskDefinition" ALTER COLUMN "workflowId" DROP NOT NULL,
ALTER COLUMN "actvityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TaskDefinition" ADD CONSTRAINT "TaskDefinition_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskDefinition" ADD CONSTRAINT "TaskDefinition_actvityId_fkey" FOREIGN KEY ("actvityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
