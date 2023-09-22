/*
  Warnings:

  - You are about to drop the column `sessionId` on the `cartItem` table. All the data in the column will be lost.
  - The primary key for the `session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `session` table. All the data in the column will be lost.
  - Added the required column `session_id` to the `cartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cartItem` DROP COLUMN `sessionId`,
    ADD COLUMN `session_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `session` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`session_Id`);

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `session`(`session_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
