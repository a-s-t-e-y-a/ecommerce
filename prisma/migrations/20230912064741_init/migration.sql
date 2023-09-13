/*
  Warnings:

  - Added the required column `productBrandId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productCategoriesId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `productBrandId` INTEGER NOT NULL,
    ADD COLUMN `productCategoriesId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Product` (
    `products_brand_id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NULL,
    `products_categories_id` VARCHAR(191) NULL,
    `created_on` VARCHAR(191) NULL,
    `updated_on` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`products_brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductCategory` (
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

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productBrandId_fkey` FOREIGN KEY (`productBrandId`) REFERENCES `Product`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productCategoriesId_fkey` FOREIGN KEY (`productCategoriesId`) REFERENCES `ProductCategory`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
