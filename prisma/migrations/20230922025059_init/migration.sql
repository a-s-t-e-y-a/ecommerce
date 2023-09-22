/*
  Warnings:

  - You are about to alter the column `created_at` on the `session` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Added the required column `session_Id` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `session` ADD COLUMN `session_Id` VARCHAR(191) NOT NULL,
    MODIFY `total` INTEGER NOT NULL DEFAULT 0,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
