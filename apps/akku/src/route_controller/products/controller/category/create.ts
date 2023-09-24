import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';

import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();

export const categoryCreate = async (req: Request, res: Response) => {
  try {
    const {
      name,
      image,
      position,
      created_on,
      updated_on,
      status,
      url,
    } = req.body;
    const category = await prisma.product_categories.create({
      data: {
        name,
        image,
        position,
        created_on,
        updated_on,
        status,
        url,
      },
    });
    responseSuccess(
      res,
      new CustomSuccess('New category is created successfully', category, 200)
    );
  } catch (err) {
    responseError(res, err);
  }
};