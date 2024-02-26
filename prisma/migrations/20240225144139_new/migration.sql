-- CreateTable
CREATE TABLE `coupon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `validity` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `percentage` INTEGER NOT NULL,
    `products_categories_id` INTEGER NOT NULL,
    `products_brand_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coupon` ADD CONSTRAINT `coupon_products_categories_id_fkey` FOREIGN KEY (`products_categories_id`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coupon` ADD CONSTRAINT `coupon_products_brand_id_fkey` FOREIGN KEY (`products_brand_id`) REFERENCES `product_brands`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
