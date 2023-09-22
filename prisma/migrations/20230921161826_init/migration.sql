/*
  Warnings:

  - Added the required column `total_price` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `total_price` INTEGER NOT NULL,
    MODIFY `qty` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Coupon_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coupon_code` VARCHAR(191) NOT NULL,
    `discount` VARCHAR(191) NOT NULL,
    `condition` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
