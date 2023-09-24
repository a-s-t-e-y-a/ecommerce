import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();
export const brandUpdate = async (req: Request, res: Response) => {
    try {
      const brandId = parseInt(req.params.id);
      const {
        brand_name,
        products_categories_id,
        created_on,
        updated_on,
        url,
        products,
        lenses,
      } = req.body;
      const updatedBrand = await prisma.product_brands.update({
        where: { products_brand_id: brandId },
        data: {
          brand_name,
          categories_id: {
            connect: { products_categories_id: products_categories_id },
          },
          created_on,
          updated_on,
          url,
          products,
          lenses,
        },
      });
      responseSuccess(
        res,
        new CustomSuccess('Brand updated successfully', updatedBrand, 200)
      );
    } catch (err) {
      responseError(res, err);
    }
  };
  