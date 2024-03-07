import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export const brandCreate = async (req: Request, res: Response) => {
  try {
    const { brand_name, products_categories_id, url } = req.body;
    const brand = await prisma.product_brands.create({
      data: {
        brand_name,
        categories_id: {
          connect: { products_categories_id: parseInt(products_categories_id) },
        },
        created_on: new Date(),
        updated_on: new Date(),
        url:brand_name,
      },
    });
    responseSuccess(
      res,
      new CustomSuccess('New brand is created successfully ', brand, 200)
    );
  } catch (err) {
    responseError(res, err);
  }
};
