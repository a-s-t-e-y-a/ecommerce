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
    `warranty` VARCHAR(191) NOT NULL,
    `product_description` VARCHAR(191) NOT NULL,
    `product_price` VARCHAR(191) NOT NULL,
    `discounted_price` INTEGER NOT NULL,
    `product_images` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `offer` VARCHAR(191) NOT NULL,
    `glasses_size` VARCHAR(191) NULL,
    `bought` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `frame_width` VARCHAR(191) NOT NULL,
    `temple_length` VARCHAR(191) NOT NULL,
    `lens_height` VARCHAR(191) NOT NULL,
    `coupon_code` VARCHAR(191) NOT NULL,
    `coupon_amount` BIGINT NOT NULL,
    `stokke` INTEGER NOT NULL,
    `product_url` VARCHAR(191) NOT NULL,
    `seo_title` VARCHAR(191) NOT NULL,
    `keyword` VARCHAR(191) NOT NULL,
    `created_on` DATETIME(3) NOT NULL,
    `updated_on` DATETIME(3) NOT NULL,
    `products_categories_id` VARCHAR(191) NOT NULL,
    `products_brand_id` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`products_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
