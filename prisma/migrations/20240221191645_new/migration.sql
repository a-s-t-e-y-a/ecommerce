/*
  Warnings:

  - You are about to drop the column `glasses_size` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `glasses_size`,
    ADD COLUMN `size` INTEGER NULL;
