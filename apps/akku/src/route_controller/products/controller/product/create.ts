import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';
import getFileKeys from 'apps/akku/src/utils/getSpecifiedKeyName'; // Assuming getFileKeys imports this
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { deleteObject } from 'apps/akku/src/interfaces/AWSInterface';
import deleteS3Object from 'apps/akku/src/utils/deleteFromAwsSdk';
import { UploadedFile } from 'apps/akku/src/interfaces/uploadInterfaceMulter';

// Connect to the Prisma database
const prisma = new PrismaClient();

export async function createProduct(req: Authenticate, res: Response) {
  try {
    // Check if files were uploaded
    if (req.files.length === 0||req.fileUrl==undefined) {
      throw new CustomError('Upload the specific file', 'Not found', 400);
    }
    console.log(req.fileUrl)
    // Extract the file key from uploaded files
    // const fileKey = getFileKeys(req.files);

    // Parse the product data from the request body
    const data = JSON.parse(req.body.data);

    // Create a new product in the database
    const product = await prisma.products.create({
      data: {
        product_model_name: data.product_model_name,
        product_model_number: data.product_model_number,
        product_color_: { connect: { id: parseInt(data.product_color) } },
        capacity: data.capacity,
        use_for: data.use_for,
        material_: { connect: { id: parseInt(data.material) } },
        shape_: { connect: { id: parseInt(data.shape) } },
        style_: { connect: { id: parseInt(data.style) } },
        dimensions: data.dimensions,
        country_of_origin: data.country_of_origin,
        row_metrial_source_from: data.row_metrial_source_from,
        show_lens_list: data.show_lens_list,
        warranty: data.warranty,
        product_description: data.product_description,
        product_price: data.product_price,
        discounted_price: data.discounted_price,
        product_images: req.fileUrl, // Assuming no initial value for product_images
        // image: fileKey.join(','),
        offer: data.offer,
        size_: { connect: { id: parseInt(data.size) } },
        bought: data.bought,
        frame_width: data.frame_width,
        temple_length: data.temple_length,
        lens_height: data.lens_height,
        coupon_code: data.coupon_code,
        coupon_amount: data.coupon_amount,
        stokke: data.stokke,
        product_url: data.product_model_name,
        seo_title: data.seo_title,
        keyword: data.keyword,
        created_on: new Date(),
        updated_on: new Date(),
        status: 1,
        productBrand: { connect: { products_brand_id: parseInt(data.productBrandId) } },
        productCategories: {
          connect: {
            products_categories_id: parseInt(data.productCategoriesId)
          }
        }
      }
    });

    // Return the created product with status 201 (Created)
    responseSuccess(res, new CustomSuccess('Data uploaded successfully',product,200))
  } catch (error) {
    // console.error(error); // Log the actual error for debugging
    // const params1 : deleteObject = {
    //   Bucket:process.env.BUCKET_NAME,
    //   Key:req.fileUrl
    // }
    // await deleteS3Object(params1)
    // req.files.map(async (info:UploadedFile)=>{
    //     const params2: deleteObject ={
    //     Bucket:process.env.BUCKET_NAME,
    //     Key:info.key
    //   }
    //   await deleteS3Object(params2)
    // })
    return res.status(500).json({ error: 'Error creating product' });
  }
}

