-- CreateEnum
CREATE TYPE "ProviderEnum" AS ENUM ('local', 'google');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "googleToken" TEXT,
ADD COLUMN     "provider" "ProviderEnum" NOT NULL DEFAULT 'local',
ALTER COLUMN "password" DROP NOT NULL;
