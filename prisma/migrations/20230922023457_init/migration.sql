/*
  Warnings:

  - You are about to drop the column `coupon_code_id` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `price_after_coupon` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_coupon_code_id_fkey`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `coupon_code_id`,
    DROP COLUMN `price_after_coupon`,
    DROP COLUMN `total_price`;

-- CreateTable
CREATE TABLE `session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` INTEGER NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `couponCodeId` INTEGER NULL,

    UNIQUE INDEX `session_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_ip` VARCHAR(191) NOT NULL,
    `l_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `sessionId` INTEGER NOT NULL,

    UNIQUE INDEX `orderItem_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `total` INTEGER NOT NULL,
    `paymentId` INTEGER NOT NULL,

    UNIQUE INDEX `orderDetails_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentDeatils` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_couponCodeId_fkey` FOREIGN KEY (`couponCodeId`) REFERENCES `Coupon_code`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `products`(`products_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_l_id_fkey` FOREIGN KEY (`l_id`) REFERENCES `lenses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderDetails` ADD CONSTRAINT `orderDetails_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderDetails` ADD CONSTRAINT `orderDetails_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `paymentDeatils`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
