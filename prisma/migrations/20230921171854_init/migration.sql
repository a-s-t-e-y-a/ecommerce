/*
  Warnings:

  - You are about to drop the column `condition` on the `Coupon_code` table. All the data in the column will be lost.
  - Added the required column `minimuim_condition` to the `Coupon_code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Coupon_code` DROP COLUMN `condition`,
    ADD COLUMN `minimuim_condition` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_l_id_fkey` FOREIGN KEY (`l_id`) REFERENCES `lenses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
