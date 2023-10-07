-- DropForeignKey
ALTER TABLE `cartItem` DROP FOREIGN KEY `cartItem_user_id_fkey`;

-- AlterTable
ALTER TABLE `cartItem` MODIFY `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
