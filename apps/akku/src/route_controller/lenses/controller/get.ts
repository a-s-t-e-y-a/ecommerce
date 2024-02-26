import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export async function getAllLenses(req: Request, res: Response) {
  try {
    const page = Number(req.query.page) || 1;
    const itemsPerPage: number = Number(req.query.itemsPerPage) || 20;
    const skip: number = (page - 1) * itemsPerPage;

    const dataPromise = prisma.lenses.findMany({
      take: itemsPerPage,
      skip: skip,
      include:{
        brand_id:true,
        categories_id:true
      }

    });

    const countPromise = prisma.lenses.count();

    const [data, count] = await Promise.all([dataPromise, countPromise]);

    responseSuccess(res, new CustomSuccess('Lenses fetched successfully', { data, count, page, itemsPerPage }, 200));
  } catch (error) {
    responseError(res, error);
  }
}

