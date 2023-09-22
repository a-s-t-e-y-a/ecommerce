/*
  Warnings:

  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_l_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_p_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_user_id_fkey`;

-- DropTable
DROP TABLE `cart`;

-- CreateTable
CREATE TABLE `cartItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NULL,
    `price` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL DEFAULT 1,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_ip` VARCHAR(191) NOT NULL,
    `l_id` INTEGER NULL,
    `user_id` INTEGER NULL,

    UNIQUE INDEX `cartItem_p_id_key`(`p_id`),
    UNIQUE INDEX `cartItem_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `products`(`products_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_l_id_fkey` FOREIGN KEY (`l_id`) REFERENCES `lenses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
