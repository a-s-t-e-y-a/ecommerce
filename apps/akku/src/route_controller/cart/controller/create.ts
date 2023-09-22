import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();

interface CreateCartItemRequest {
  p_id: number;
  qty: number;
  coupon?: string | null;
  user_ip: string;
  l_id?: number | null;
  l_price?: number | null;
  user_id: number;
}
interface Authenticate extends Request {
  userId: number;
}
export const createCartItem = async (req: Authenticate, res: Response) => {
  try {
    const { p_id, qty, coupon, l_id, l_price }: CreateCartItemRequest =
      req.body;
    const product = await prisma.products.findUnique({
      where: {
        products_id: p_id,
      },
    });
    if (!product) {
      throw new CustomError('Item does not exist', 'Bad Request', 404);
    }
    const findProduct = await prisma.cart.findUnique({
      where: {
        p_id: p_id,
      },
    });
    if (findProduct) {
      const updateCart = await prisma.cart.update({
        where: {
          p_id: p_id,
        },
        data: {
          qty: findProduct.qty + 1,
        },
      });
      responseSuccess(
        res,
        new CustomSuccess('Item qunatity increased in cart', updateCart, 200)
      );
    } 
  } catch (error) {
    console.error('Error creating cart item:', error);
    responseError(res, error);
  }
};

process.on('exit', () => {
  prisma.$disconnect();
});
