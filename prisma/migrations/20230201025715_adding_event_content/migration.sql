-- AlterTable
ALTER TABLE "EventLog" ADD COLUMN     "content" TEXT,
ADD COLUMN     "context" JSONB;
