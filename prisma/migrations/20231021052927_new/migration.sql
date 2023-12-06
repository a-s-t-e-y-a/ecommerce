/*
  Warnings:

  - You are about to drop the column `updated_on` on the `admin` table. All the data in the column will be lost.
  - Added the required column `gender` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `admin` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `admin_email_key` ON `admin`;

-- AlterTable
ALTER TABLE `admin` DROP COLUMN `updated_on`,
    ADD COLUMN `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;
