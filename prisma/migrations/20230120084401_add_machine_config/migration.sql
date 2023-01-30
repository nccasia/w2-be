-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "machineConfig" JSONB;

-- AlterTable
ALTER TABLE "TaskDefinition" ADD COLUMN     "machineConfig" JSONB;
