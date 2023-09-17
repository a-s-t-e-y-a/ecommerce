/*
  Warnings:

  - Made the column `products_categories_id` on table `product_brands` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product_brands` MODIFY `products_categories_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `lenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `heading` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `warranty_period` INTEGER NOT NULL,
    `thickness` VARCHAR(191) NOT NULL,
    `power_range` VARCHAR(191) NOT NULL,
    `blue_light_blocker` INTEGER NULL,
    `anti_scratch_coating` INTEGER NULL,
    `both_side_anti_glare_coating` INTEGER NULL,
    `both_side_anti_reflective_coating` INTEGER NULL,
    `uv_protection` INTEGER NULL,
    `water_and_dust_repellent` INTEGER NULL,
    `breakage_and_crack_resistant` INTEGER NULL,
    `offer` VARCHAR(191) NOT NULL,
    `products_categories_id` INTEGER NOT NULL,
    `products_brand_id` INTEGER NOT NULL,
    `power_type` INTEGER NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `updated_at` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_brands` ADD CONSTRAINT `product_brands_products_categories_id_fkey` FOREIGN KEY (`products_categories_id`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lenses` ADD CONSTRAINT `lenses_products_categories_id_fkey` FOREIGN KEY (`products_categories_id`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lenses` ADD CONSTRAINT `lenses_products_brand_id_fkey` FOREIGN KEY (`products_brand_id`) REFERENCES `product_brands`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
