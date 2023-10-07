import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';

const prisma = new PrismaClient();

export const deleteCartItem = async (req: Authenticate, res: Response) => {
  try {
    const id: string = req.params.id;
    const cartDelete = await prisma.cartItem.delete({
      where: {
        id: Number(id),
      },
    });
    responseSuccess(
      res,
      new CustomSuccess('Data fetch successfully', cartDelete, 200)
    );
  } catch (err) {
    responseError(res, err);
  }
};
