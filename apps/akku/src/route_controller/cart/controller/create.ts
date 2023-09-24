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
    const { p_id, l_id }: CreateCartItemRequest = req.body;
    if (!p_id && !l_id) {
      throw new CustomError('Please add any product', 'Bad Request', 404);
    }
    let product;
    if (p_id) {
      product = await prisma.products.findUnique({
        where: {
          products_id: p_id,
        },
      });
      if (!product) {
        throw new CustomError('Item does not exist', 'Bad Request', 404);
      }
    }
    let lenses;
    if (l_id) {
      lenses = await prisma.lenses.findUnique({
        where: {
          id: l_id,
        },
      });
      if (!lenses) {
        throw new CustomError('Lense does not exist', 'Bad Request', 404);
      }
    }

    let findProduct;
    if (p_id) {
      findProduct = await prisma.cartItem.findMany({
        where: {
          p_id: p_id,
          user_id: req.userId,
        },
      });
    }
    if (l_id) {
      findProduct = await prisma.cartItem.findMany({
        where: {
          l_id: l_id,
          user_id: req.userId,
        },
      });
    }
    console.log(findProduct);
    if (findProduct.length != 0) {
      if (p_id) {
        const updateCart = await prisma.cartItem.update({
          where: {
            p_id: p_id,
            user_id: req.userId,
          },
          data: {
            qty_frame: findProduct[0].qty_frame + 1,
          },
        });
        responseSuccess(
          res,
          new CustomSuccess(
            'Product Item qunatity increased in cart',
            updateCart,
            200
          )
        );
      }
      if (l_id) {
        const updateCart = await prisma.cartItem.update({
          where: {
            l_id: l_id,
            user_id: req.userId,
          },
          data: {
            qty_lenses: findProduct[0].qty_lenses + 1,
          },
        });
        responseSuccess(
          res,
          new CustomSuccess(
            'Lenses Item qunatity increased in cart',
            updateCart,
            200
          )
        );
      }
    } else {
      if (p_id) {
        const createNew = await prisma.cartItem.create({
          data: {
            productId: { connect: { products_id: p_id } },
            price: p_id ? product.product_price : null,
            qty_frame: p_id ? 1 : 0,
            user_ip: req.ip,
            user: { connect: { id: req.userId } },
            sessionId: { connect: { session_Id: req.sessionId } },
            // lId: l_id? { connect: { id: l_id } }: ,
            qty_lenses: l_id ? 1 : 0,
            lensePrice: l_id ? lenses.price : null,
          },
        });
        responseSuccess(
          res,
          new CustomSuccess('product added to cart', createNew, 200)
        );
      }
      if (l_id) {
        const createNew = await prisma.cartItem.create({
          data: {
            // productId:{ connect: { products_id: p_id } } ,
            price: p_id ? product.product_price : null,
            qty_frame: p_id ? 1 : 0,
            user_ip: req.ip,
            user: { connect: { id: req.userId } },
            sessionId: { connect: { session_Id: req.sessionId } },
            lId: { connect: { id: l_id } },
            qty_lenses: l_id ? 1 : 0,
            lensePrice: l_id ? lenses.price : null,
          },
        });
        responseSuccess(
          res,
          new CustomSuccess('lenses added to cart', createNew, 200)
        );
      } else {
        const createNew = await prisma.cartItem.create({
          data: {
            productId: { connect: { products_id: p_id } },
            price: p_id ? product.product_price : null,
            qty_frame: p_id ? 1 : 0,
            user_ip: req.ip,
            user: { connect: { id: req.userId } },
            sessionId: { connect: { session_Id: req.sessionId } },
            lId: { connect: { id: l_id } },
            qty_lenses: l_id ? 1 : 0,
            lensePrice: l_id ? lenses.price : null,
          },
        });
        responseSuccess(
          res,
          new CustomSuccess('Item added to cart', createNew, 200)
        );
      }
    }
  } catch (error) {
    console.error(error);
    responseError(res, error);
  }
};

process.on('exit', () => {
  prisma.$disconnect();
});
