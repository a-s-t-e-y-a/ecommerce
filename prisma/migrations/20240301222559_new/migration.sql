/*
  Warnings:

  - You are about to drop the column `offer` on the `lenses` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `lenses` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Made the column `updated_at` on table `lenses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `lenses` DROP COLUMN `offer`,
    MODIFY `created_at` DATETIME(3) NOT NULL,
    MODIFY `updated_at` DATETIME(3) NOT NULL;
