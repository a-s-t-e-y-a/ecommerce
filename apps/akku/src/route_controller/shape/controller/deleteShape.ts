import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient();

export async function deleteShape(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await prisma.shape.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).send();
  } catch (error) {
    responseError(res, error);
  }
}

