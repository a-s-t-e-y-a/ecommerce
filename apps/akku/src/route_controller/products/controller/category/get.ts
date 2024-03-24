import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();

export const categoryGetAll = async (req: Request, res: Response) => {
    try {
      const categories = await prisma.product_categories.findMany({
      });
      categories.forEach((item) => {
      item['imageArray'] = `https://akkukachasma.s3.amazonaws.com/category/${item.image}`;
    });
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
    const page = req.query.page ? parseInt(req.query.page.toString()) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize.toString()) : 10; // Adjust the default page size as needed

    const category = await prisma.product_categories.findUnique({
      where: { products_categories_id: categoryId },
      include: {
        products: {
          take: pageSize,
          skip: (page - 1) * pageSize,
        },
      },
    });

    if (!category) {
      throw new CustomError('Category not found', 'Bad request', 404);
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
