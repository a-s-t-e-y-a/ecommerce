import { Response, Request } from 'express';
import { Session } from 'express-session';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Product } from 'apps/akku/src/interfaces/cartProductInterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
interface CustomRequest extends Request {
  session: Session;
}

export async function getCartSession(req:CustomRequest, res:Response){
   try {
    const cartItems: Product[] = req.session.cart || [];

    // Extract product IDs from cart items
    const productIds = cartItems.map(item => Number(item.productId));
    const powertypeIds = cartItems.map(item => Number(item.powerType));
    const lensFeatureIds = cartItems.map(item => Number(item.lensFeature));
    const lensIds = cartItems.map(item => Number(item.lens));

    // Fetch products from the database based on the product IDs
    const products = await prisma.products.findMany({
      where: {
        p_id: {
          in: productIds,
        },
      },
    });
     const powertype = await prisma.powerType.findMany({
      where: {
        id: {
          in: powertypeIds,
        },
      },
    });
      const lense_feature = await prisma.lensFeature.findMany({
      where: {
        id: {
          in: lensFeatureIds,
        },
      },
    });
       const lenses_ = await prisma.lenses.findMany({
      where: {
        id: {
          in: lensIds,
        },
      },
    });

    responseSuccess(res, new CustomSuccess('Cart items retrieved successfully', {products,powertype,lense_feature,lenses_}, 200));  }
  catch (error) {
    responseError(res, error);
  }
}
