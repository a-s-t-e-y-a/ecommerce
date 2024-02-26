import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();

export async function updateShape(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body
  try {
    const updatedShape = await prisma.shape.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data
      },
    });
    responseSuccess(res, new CustomSuccess('data updated succesfully', updatedShape, 200));
  } catch (error) {
    responseError(res, error);
  }
}

