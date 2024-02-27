/*
  Warnings:

  - You are about to alter the column `created_on` on the `product_categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `updated_on` on the `product_categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `product_brands` MODIFY `created_on` DATETIME(3) NULL,
    MODIFY `updated_on` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `product_categories` MODIFY `created_on` DATETIME(3) NULL,
    MODIFY `updated_on` DATETIME(3) NULL;
