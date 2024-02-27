/*
  Warnings:

  - Added the required column `image` to the `lensFeature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lensFeature` ADD COLUMN `image` VARCHAR(191) NOT NULL;
