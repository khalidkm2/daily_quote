/*
  Warnings:

  - Added the required column `preferredHour` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferredMinute` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "preferredHour" INTEGER NOT NULL,
ADD COLUMN     "preferredMinute" INTEGER NOT NULL,
ADD COLUMN     "timezone" TEXT NOT NULL;
