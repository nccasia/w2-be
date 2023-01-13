/*
  Warnings:

  - The `value` column on the `Settings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `stageConfig` on the `TaskDefinition` table. All the data in the column will be lost.
  - You are about to drop the column `config` on the `Trigger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Settings" DROP COLUMN "value",
ADD COLUMN     "value" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "config" JSONB,
ADD COLUMN     "cta" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ctaConfig" JSONB,
ADD COLUMN     "ctaTemplate" TEXT,
ADD COLUMN     "descriptionTemplate" TEXT,
ADD COLUMN     "isAccepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notificationConfig" JSONB,
ADD COLUMN     "notificationTemplate" TEXT,
ADD COLUMN     "processConfig" JSONB,
ADD COLUMN     "properties" JSONB,
ADD COLUMN     "state" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stateConfig" JSONB,
ADD COLUMN     "stateTemplate" TEXT,
ADD COLUMN     "stateValues" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "statusConfig" JSONB,
ADD COLUMN     "statusTemplate" TEXT,
ADD COLUMN     "titleTemplate" TEXT,
ADD COLUMN     "triggerConfig" JSONB,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "typeName" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "dueDate" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "TaskDefinition" DROP COLUMN "stageConfig",
ADD COLUMN     "stateConfig" JSONB;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "config";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarId" INTEGER;

-- DropEnum
DROP TYPE "TaskStatus";

-- CreateIndex
CREATE INDEX "Task_assigneeId_status_idx" ON "Task"("assigneeId", "status");

-- CreateIndex
CREATE INDEX "Task_creatorId_status_idx" ON "Task"("creatorId", "status");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
