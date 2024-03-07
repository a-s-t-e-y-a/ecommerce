import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();
// Get all brands
export const brandGetAll = async (req: Request, res: Response) => {
  try {
    const brands = await prisma.product_brands.findMany({
      include:{
        categories_id:true
      }
    });
    responseSuccess(
      res,
      new CustomSuccess('Fetched all brands successfully', brands, 200)
    );
  } catch (err) {
    console.log(err)
    responseError(res, err);
  }
};

// Get a brand by ID
export const brandGetById = async (req: Request, res: Response) => {
  try {
    const brandId = parseInt(req.params.id);
    const brand = await prisma.product_brands.findUnique({
      where: { products_brand_id: brandId },
    });
    if (!brand) {
      throw new CustomError('Brand not found', 'Bad request', 404)
    } else {
      responseSuccess(
        res,
        new CustomSuccess('Fetched brand successfully', brand, 200)
      );
    }
  } catch (err) {
    responseError(res, err);
  }
};
