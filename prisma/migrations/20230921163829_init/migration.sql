/*
  Warnings:

  - Added the required column `price_after_coupon` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `price_after_coupon` INTEGER NOT NULL;
