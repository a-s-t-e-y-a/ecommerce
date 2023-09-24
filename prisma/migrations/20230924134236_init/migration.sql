/*
  Warnings:

  - A unique constraint covering the columns `[p_id]` on the table `cartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lensePrice]` on the table `cartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `cartItem_p_id_key` ON `cartItem`(`p_id`);

-- CreateIndex
CREATE UNIQUE INDEX `cartItem_lensePrice_key` ON `cartItem`(`lensePrice`);
