import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();

export async function createShape(req: Request, res: Response) {
  try {
    const data = req.body
    const shape = await prisma.shape.create({
      data: {
        ...data
    });
    responseSuccess(res, new CustomSuccess('Data created succesfully',data,200));
  } catch (error) {
    responseError(res, error);
  }
}

