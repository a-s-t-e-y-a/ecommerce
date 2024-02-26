/*
  Warnings:

  - You are about to drop the column `power_type` on the `lenses` table. All the data in the column will be lost.
  - You are about to alter the column `material` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `lens_feature` to the `lenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `lenses` DROP FOREIGN KEY `lenses_power_type_fkey`;

-- AlterTable
ALTER TABLE `lenses` DROP COLUMN `power_type`,
    ADD COLUMN `lens_feature` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `material` INTEGER NULL;

-- CreateTable
CREATE TABLE `material` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lensFeature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `power_type` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_material_fkey` FOREIGN KEY (`material`) REFERENCES `material`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lenses` ADD CONSTRAINT `lenses_lens_feature_fkey` FOREIGN KEY (`lens_feature`) REFERENCES `lensFeature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lensFeature` ADD CONSTRAINT `lensFeature_power_type_fkey` FOREIGN KEY (`power_type`) REFERENCES `powerType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
