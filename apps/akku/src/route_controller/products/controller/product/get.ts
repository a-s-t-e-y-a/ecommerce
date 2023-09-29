import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export async function getProductById(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  try {
    const product = await prisma.products.findUnique({
      where: { products_id: productId },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching product' });
  }
}

export async function getProducts(req: Request, res: Response) {
  try {
    const page = Number(req.query.page) || 1;
    const itemsPerPage: number = Number(req.query.itemsPerPage) || 20;
    const productCategoriesId = Number(req.query.productCategoriesId);
    const productBrand = Number(req.query.productBrand);
    const shape = req.query.shape;
    const style = req.query.style;
    const productColor = req.query.product_color;

    const skip: number = (page - 1) * itemsPerPage;

    const where = {};
   
    if (productCategoriesId) {
      where['productCategoriesId'] = productCategoriesId;
    }

    if (productBrand) {
      where['productBrandId'] = productBrand;
    }

    if (shape) {
      where['shape'] = shape;
    }

    if (style) {
      where['style'] = style;
    }

    if (productColor) {
      where['product_color'] = productColor;
    }

    const products = await prisma.products.findMany({
      where,
      orderBy: {
        created_on: 'desc', // Replace with the actual date field name
      },
      take: itemsPerPage, // Limit the result to one item
      skip: skip,
    });
    

    products.forEach((item) => {
      if (item.image) {
        item['imageArray'] = [
          `https://akku-bucket.s3.ap-south-1.amazonaws.com/product_images/${item.image}`,
        ];
      } else if (item.product_images) {
        const imageArray = item.product_images.split(',').map((image) => {
          const trimmedImage = image.trim();
          return `https://akku-bucket.s3.ap-south-1.amazonaws.com/product_images/${trimmedImage}`;
        });
        item['imageArray'] = imageArray;
        delete item.product_images; 
      }
      delete item.image;
    });

    // Reverse the products array
    const reversedProducts = products.reverse();

    responseSuccess(res, new CustomSuccess('Data fetched successfully', reversedProducts, 200))
  } catch (error) {
    console.log(error)
    responseError(res, error)
  }
}
