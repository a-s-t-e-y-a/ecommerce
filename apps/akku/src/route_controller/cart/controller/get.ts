import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';

const prisma = new PrismaClient();

export const getAllCartItem = async (req: Authenticate, res: Response) => {
  try {
    const cart = await prisma.cartItem.findMany({
      where: {
        user_id: req.userId,
      },
      include: {
        productId: true,
      },
    });
    responseSuccess(
      res,
      new CustomSuccess('Data fetch successfully', cart, 200)
    );
  } catch (err) {
    responseError(res, err);
  }
};
