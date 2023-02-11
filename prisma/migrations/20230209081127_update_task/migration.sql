-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_definitionId_fkey";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "definitionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "TaskDefinition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
