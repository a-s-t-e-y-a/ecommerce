/*
  Warnings:

  - Made the column `created_on` on table `product_brands` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_on` on table `product_brands` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product_brands` MODIFY `created_on` DATETIME(3) NOT NULL,
    MODIFY `updated_on` DATETIME(3) NOT NULL;
