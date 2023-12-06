/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` VARCHAR(191) NOT NULL,
    MODIFY `mobile` VARCHAR(191) NULL,
    MODIFY `status` INTEGER NULL;

-- DropTable
DROP TABLE `admin`;
