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
    const productId: Number = req.body.productId;
    const powertype: Number = req.body.powertype;
    const lensFeatureId: Number = req.body.lensFeature;
    const lensId: Number = req.body.lens;

    const data = await prisma.products.findUnique({
      where:{
        p_id: Number(productId)
      }
    })
    const data2 = await prisma.powerType.findUnique({
      where:{
        id: Number(powertype)
      }
    })
    const data3 = await prisma.lensFeature.findUnique({
      where:{
        id: Number(lensFeatureId)
      }
    })
    const data4 = await prisma.lenses.findUnique({
      where:{
        id: Number(lensId)
      }
    })

    if(!data){
      throw new CustomError('Product does not exist', 'Product does not exist in the database', 404)
    }
    if(!data2){
      throw new CustomError('Power type does not exist', 'Power type does not exist in the database', 404)
    }
    if(!data3){
      throw new CustomError('Lens feature does not exist', 'Lens feature does not exist in the database', 404)
    }
    if(!data4){
      throw new CustomError('Lenses does not exist', 'Lenses does not exist in the database', 404)
    }
    const product: Product = {
      productId: productId,
      // quantity: 1,
      powerType: powertype,
      lensFeature: lensFeatureId,
      lens: lensId,
    };

    if (!req.session.cart) {
      req.session.cart = [product];
      responseSuccess(res, new CustomSuccess('Data updated in session ', req.session.cart, 200));
    } else {
      req.session.cart.push(product);
      responseSuccess(res, new CustomSuccess('Data updated in session', req.session.cart, 200));
    }
  } catch (error) {
    responseError(res, error);
  }
}


