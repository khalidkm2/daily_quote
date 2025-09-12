-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "preferredHour" DROP NOT NULL,
ALTER COLUMN "preferredMinute" DROP NOT NULL,
ALTER COLUMN "timezone" DROP NOT NULL;
