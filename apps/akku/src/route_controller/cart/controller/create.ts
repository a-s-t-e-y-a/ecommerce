import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';

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

export const createCartItem = async (req: Authenticate, res: Response) => {
  try {
    const { p_id }: CreateCartItemRequest = req.body;
    const product = await prisma.products.findUnique({
      where: {
        products_id: p_id,
      },
    });
    if (!product) {
      throw new CustomError('Item does not exist', 'Bad Request', 404);
    }
    const findProduct = await prisma.cartItem.findUnique({
      where: {
        p_id: p_id,
      },
    });
    if (findProduct) {
      const updateCart = await prisma.cartItem.update({
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
    } else {
      const createNew = await prisma.cartItem.create({
        data: {
          pId: { connect: { products_id: p_id } },
          price: product.product_price,
          user_ip: req.ip,
          user: { connect: { id: req.userId } },
          sessionId : {connect:{session_Id:req.sessionId}}
        },
      });
      console.log(createCartItem)
      responseSuccess(
        res,
        new CustomSuccess('Item added to cart', createNew, 200)
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
