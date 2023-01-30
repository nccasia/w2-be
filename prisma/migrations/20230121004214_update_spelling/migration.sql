/*
  Warnings:

  - You are about to drop the column `isActve` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "isActve",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TaskDefinition" ALTER COLUMN "keyTemplate" DROP NOT NULL,
ALTER COLUMN "keyTemplate" DROP DEFAULT;
