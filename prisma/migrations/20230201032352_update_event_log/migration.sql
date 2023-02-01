/*
  Warnings:

  - You are about to drop the column `actionId` on the `EventLog` table. All the data in the column will be lost.
  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventLog" DROP CONSTRAINT "EventLog_actionId_fkey";

-- DropIndex
DROP INDEX "EventLog_actionId_idx";

-- AlterTable
ALTER TABLE "EventLog" DROP COLUMN "actionId",
ADD COLUMN     "action" TEXT,
ADD COLUMN     "domain" TEXT,
ADD COLUMN     "intent" TEXT;

-- DropTable
DROP TABLE "Action";

-- DropEnum
DROP TYPE "ActionType";
