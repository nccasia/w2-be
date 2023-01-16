/*
  Warnings:

  - You are about to drop the column `isAccepted` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "isAccepted",
ADD COLUMN     "isActve" BOOLEAN NOT NULL DEFAULT false;
