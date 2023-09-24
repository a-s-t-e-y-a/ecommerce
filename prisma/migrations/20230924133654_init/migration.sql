-- CreateTable
CREATE TABLE `about` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `heading` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `videos_link` VARCHAR(191) NULL,
    `image` VARCHAR(191) NOT NULL,
    `created_on` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `updated_on` DATETIME(3) NOT NULL,

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `alter_mobile` VARCHAR(191) NULL,
    `created_on` DATETIME(3) NOT NULL,
    `updated_on` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `products_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_model_name` VARCHAR(191) NULL,
    `product_model_number` VARCHAR(191) NULL,
    `product_color` VARCHAR(191) NULL,
    `capacity` VARCHAR(191) NULL,
    `use_for` VARCHAR(191) NULL,
    `lens_matrial` VARCHAR(191) NULL,
    `shape` VARCHAR(191) NULL,
    `style` VARCHAR(191) NULL,
    `dimensions` VARCHAR(191) NULL,
    `country_of_origin` VARCHAR(191) NULL,
    `row_metrial_source_from` VARCHAR(191) NULL,
    `material` VARCHAR(191) NULL,
    `show_lens_list` INTEGER NULL,
    `warranty` VARCHAR(191) NULL,
    `product_description` VARCHAR(191) NULL,
    `product_price` VARCHAR(191) NULL,
    `discounted_price` INTEGER NULL,
    `product_images` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `offer` VARCHAR(191) NULL,
    `glasses_size` VARCHAR(191) NULL,
    `bought` VARCHAR(191) NULL,
    `rating` INTEGER NULL,
    `frame_width` VARCHAR(191) NULL,
    `temple_length` VARCHAR(191) NULL,
    `lens_height` VARCHAR(191) NULL,
    `coupon_code` VARCHAR(191) NULL,
    `coupon_amount` INTEGER NULL,
    `stokke` INTEGER NULL,
    `product_url` VARCHAR(191) NULL,
    `seo_title` VARCHAR(191) NULL,
    `keyword` VARCHAR(191) NULL,
    `created_on` DATETIME(3) NULL,
    `updated_on` DATETIME(3) NULL,
    `status` INTEGER NULL,
    `productBrandId` INTEGER NOT NULL,
    `productCategoriesId` INTEGER NOT NULL,

    PRIMARY KEY (`products_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_brands` (
    `products_brand_id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NULL,
    `products_categories_id` INTEGER NOT NULL,
    `created_on` VARCHAR(191) NULL,
    `updated_on` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`products_brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_categories` (
    `products_categories_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `position` INTEGER NULL,
    `created_on` VARCHAR(191) NULL,
    `updated_on` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `url` VARCHAR(191) NULL,

    PRIMARY KEY (`products_categories_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `cartItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NULL,
    `price` VARCHAR(191) NULL,
    `qty_frame` INTEGER NOT NULL DEFAULT 0,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_ip` VARCHAR(191) NOT NULL,
    `l_id` INTEGER NULL,
    `lensePrice` INTEGER NULL,
    `qty_lenses` INTEGER NOT NULL DEFAULT 0,
    `user_id` INTEGER NULL,
    `session_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cartItem_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coupon_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coupon_code` VARCHAR(191) NOT NULL,
    `discount` VARCHAR(191) NOT NULL,
    `minimuim_condition` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `total` INTEGER NOT NULL DEFAULT 0,
    `session_Id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `couponCodeId` INTEGER NULL,

    UNIQUE INDEX `session_userId_key`(`userId`),
    PRIMARY KEY (`session_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_ip` VARCHAR(191) NOT NULL,
    `l_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `sessionId` INTEGER NOT NULL,

    UNIQUE INDEX `orderItem_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `total` INTEGER NOT NULL,
    `paymentId` INTEGER NOT NULL,

    UNIQUE INDEX `orderDetails_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentDeatils` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productBrandId_fkey` FOREIGN KEY (`productBrandId`) REFERENCES `product_brands`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productCategoriesId_fkey` FOREIGN KEY (`productCategoriesId`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_brands` ADD CONSTRAINT `product_brands_products_categories_id_fkey` FOREIGN KEY (`products_categories_id`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lenses` ADD CONSTRAINT `lenses_products_categories_id_fkey` FOREIGN KEY (`products_categories_id`) REFERENCES `product_categories`(`products_categories_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lenses` ADD CONSTRAINT `lenses_products_brand_id_fkey` FOREIGN KEY (`products_brand_id`) REFERENCES `product_brands`(`products_brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `products`(`products_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_l_id_fkey` FOREIGN KEY (`l_id`) REFERENCES `lenses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartItem` ADD CONSTRAINT `cartItem_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `session`(`session_Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `session_couponCodeId_fkey` FOREIGN KEY (`couponCodeId`) REFERENCES `Coupon_code`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `products`(`products_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_l_id_fkey` FOREIGN KEY (`l_id`) REFERENCES `lenses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItem` ADD CONSTRAINT `orderItem_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderDetails` ADD CONSTRAINT `orderDetails_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderDetails` ADD CONSTRAINT `orderDetails_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `paymentDeatils`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
