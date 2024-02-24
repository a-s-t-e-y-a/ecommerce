import { Response, Request } from 'express';
import { Session } from 'express-session';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes'; // Corrected import
import { Product } from 'apps/akku/src/interfaces/cartProductInterface';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient()
interface CustomRequest extends Request {
  session: Session;
}



export async function addToCartSession(req: CustomRequest, res: Response) {
  try {
    const productId: string = req.body.productId;
    const data = await prisma.products.findUnique({
      where:{
        p_id:Number(productId)
      }
    })
    if(!data){
      throw new CustomError('Product does not exist', 'Product does not exist in the database', 404)
    }

    const product: Product = {
      productId: productId,
      quantity: 1,
    };

    if (!req.session.cart) {
      req.session.cart = [product];
      responseSuccess(res, new CustomSuccess('Data updated in session ', req.session.cart, 200));
    } else {
      const existingProductIndex = req.session.cart.findIndex((item) => item.productId === productId);

      if (existingProductIndex !== -1) {
        req.session.cart[existingProductIndex].quantity++;
        responseSuccess(res, new CustomSuccess('Data updated in session', req.session.cart, 200));
      } else {
        req.session.cart.push(product);
        responseSuccess(res, new CustomSuccess('Data updated in session', req.session.cart, 200));
      }
    }
  } catch (error) {
    responseError(res, error);
  }
}

