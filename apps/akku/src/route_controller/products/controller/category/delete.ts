import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export const categoryDelete = async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.id);
      const deletedCategory = await prisma.product_categories.delete({
        where: { products_categories_id: Number(categoryId) },
      });
      responseSuccess(
        res,
        new CustomSuccess('Category deleted successfully', deletedCategory, 200)
      );
    } catch (err) {
      console.log(err)
      responseError(res, err);
    }
  };