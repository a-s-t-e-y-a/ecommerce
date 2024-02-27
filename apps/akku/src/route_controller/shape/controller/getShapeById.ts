import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();

export async function getShapeById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const shape = await prisma.shape.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!shape) {
      throw new CustomError('Shape does not exxit', 'Not Found', 404)
    }
    responseSuccess(res, new CustomSuccess('Product found', shape, 200));
  } catch (error) {
    responseError(res, error);
  }
}

