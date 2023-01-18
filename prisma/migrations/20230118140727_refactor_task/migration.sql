/*
  Warnings:

  - You are about to drop the column `formId` on the `TaskDefinition` table. All the data in the column will be lost.
  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `key` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TaskDefinition" DROP CONSTRAINT "TaskDefinition_formId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "formConfig" JSONB,
ADD COLUMN     "key" TEXT NOT NULL,
ALTER COLUMN "teamId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TaskDefinition" DROP COLUMN "formId",
ADD COLUMN     "formId" INTEGER;

-- DropTable
DROP TABLE "Form";

-- CreateTable
CREATE TABLE "FormDefinetion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "schema" JSONB NOT NULL,
    "config" JSONB NOT NULL,
    "validationConfig" JSONB NOT NULL,
    "triggerConfig" JSONB NOT NULL,
    "serializerConfig" JSONB NOT NULL,
    "displayTemplate" TEXT NOT NULL,
    "displayConfig" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormDefinetion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskDefinition" ADD CONSTRAINT "TaskDefinition_formId_fkey" FOREIGN KEY ("formId") REFERENCES "FormDefinetion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
