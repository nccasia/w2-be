-- AlterTable
ALTER TABLE "TaskDefinition" ADD COLUMN     "keyTemplate" TEXT NOT NULL DEFAULT 'task-{{id}}';
