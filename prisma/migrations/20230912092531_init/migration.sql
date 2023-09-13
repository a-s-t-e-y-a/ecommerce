/*
  Warnings:

  - You are about to drop the column `products_brand_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `products_categories_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_productBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_productCategoriesId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `products_brand_id`,
    DROP COLUMN `products_categories_id`;

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `ProductCategory`;

-- CreateTable
CREATE TABLE `product_brands` (
    `products_brand_id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NULL,
    `products_categories_id` VARCHAR(191) NULL,
    `created_on` VARCHAR(191) NULL,
    `updated_on` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`products_brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_categories` (
    `products_categories_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `position` INTEGER NULL,
    `created_on` VARCHAR(191) NULL,
    `updated_on` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`products_categories_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NULL,
    `price` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `coupon_code` VARCHAR(191) NULL,
    `user_ip` VARCHAR(191) NOT NULL,
    `l_id` INTEGER NULL,
    `l_price` INTEGER NULL,
    `user_id` INTEGER NULL,

    UNIQUE INDEX `cart_p_id_key`(`p_id`),
    UNIQUE INDEX `cart_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productBrandId_fkey` FOREIGN KEY (`productBrandId`) REFERENCES `product_brands`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productCategoriesId_fkey` FOREIGN KEY (`productCategoriesId`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `products`(`products_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
