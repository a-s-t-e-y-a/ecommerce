-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_coupon_code_id_fkey`;

-- AlterTable
ALTER TABLE `cart` MODIFY `qty` INTEGER NOT NULL DEFAULT 1,
    MODIFY `total_price` INTEGER NULL,
    MODIFY `price_after_coupon` INTEGER NULL,
    MODIFY `coupon_code_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_coupon_code_id_fkey` FOREIGN KEY (`coupon_code_id`) REFERENCES `Coupon_code`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
