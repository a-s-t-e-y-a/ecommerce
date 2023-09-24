import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();
export const brandDelete = async (req: Request, res: Response) => {
    try {
      const brandId = parseInt(req.params.id);
      const deletedBrand = await prisma.product_brands.delete({
        where: { products_brand_id: brandId },
      });
      responseSuccess(
        res,
        new CustomSuccess('Brand deleted successfully', deletedBrand, 200)
      );
    } catch (err) {
      responseError(res, err);
    }
  };
  