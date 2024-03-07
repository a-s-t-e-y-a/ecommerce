import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export const categoryUpdate = async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.id);
      const {
        name,
        image,
        position,
        created_on,
        updated_on,
        status,
        url,
      } = req.body;
      const updatedCategory = await prisma.product_categories.update({
        where: { products_categories_id: categoryId },
        data: {
          name,
          image,
          created_on,
          updated_on,
          status,
          url,
        },
      });
      responseSuccess(
        res,
        new CustomSuccess('Category updated successfully', updatedCategory, 200)
      );
    } catch (err) {
      responseError(res, err);
    }
  };
