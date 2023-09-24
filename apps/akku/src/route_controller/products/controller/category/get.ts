import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();

export const categoryGetAll = async (req: Request, res: Response) => {
    try {
      const categories = await prisma.product_categories.findMany();
      responseSuccess(
        res,
        new CustomSuccess('Fetched all categories successfully', categories, 200)
      );
    } catch (err) {
      responseError(res, err);
    }
  };
  
  export const categoryGetById = async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.id);
      const category = await prisma.product_categories.findUnique({
        where: { products_categories_id: categoryId },
      });
      if (!category) {
        throw new CustomError('Category not found', 'Bad request', 404)
      } else {
        responseSuccess(
          res,
          new CustomSuccess('Fetched category successfully', category, 200)
        );
      }
    } catch (err) {
      responseError(res, err);
    }
  };