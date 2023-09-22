/*
  Warnings:

  - You are about to drop the column `coupon_code` on the `cart` table. All the data in the column will be lost.
  - Added the required column `coupon_code_id` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `coupon_code`,
    ADD COLUMN `coupon_code_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_coupon_code_id_fkey` FOREIGN KEY (`coupon_code_id`) REFERENCES `Coupon_code`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
