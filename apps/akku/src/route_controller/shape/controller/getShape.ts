import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export async function getAllshape(req: Request, res: Response) {
  try {
    const data = await prisma.shape.findMany({})
    responseSuccess(res, new CustomSuccess('Data serves succesfully', data, 200));
  } catch (error) {
    responseError(res, error)
  }
}
