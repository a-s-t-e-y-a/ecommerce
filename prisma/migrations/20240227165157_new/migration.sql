/*
  Warnings:

  - You are about to drop the column `uses` on the `powerType` table. All the data in the column will be lost.
  - Added the required column `description` to the `powerType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `powerType` DROP COLUMN `uses`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
