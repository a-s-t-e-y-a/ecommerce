/*
  Warnings:

  - You are about to drop the `Product_shape` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Size` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `frame_color` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_product_color_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_shape_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_size_fkey`;

-- DropTable
DROP TABLE `Product_shape`;

-- DropTable
DROP TABLE `Size`;

-- DropTable
DROP TABLE `frame_color`;

-- CreateTable
CREATE TABLE `size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shape` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `color` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_color_fkey` FOREIGN KEY (`product_color`) REFERENCES `color`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_shape_fkey` FOREIGN KEY (`shape`) REFERENCES `shape`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_size_fkey` FOREIGN KEY (`size`) REFERENCES `size`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
