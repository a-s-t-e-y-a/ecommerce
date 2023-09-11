/*
  Warnings:

  - You are about to alter the column `coupon_amount` on the `products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `coupon_amount` INTEGER NULL;
