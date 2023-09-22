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
    if(req.sessionId ==null){
        throw new CustomError('Session is not created', 'Cart is empty ',404)
    }
    const getSessionId = await prisma.session.findFirst({
      where: {
        userId: req.userId,
        session_Id:req.sessionId
      },
      include: {
        cart: {
          include: {
            pId: true,
          },
        },
      },
     
    });
    if (!getSessionId) {
      throw new CustomError(
        'Session is created but cart is empty',
        'Cant fetch data',
        404
      );
    }
    if(getSessionId.cart.length ==0 ){
        throw new CustomError(
            'Dont have any item in cart',
            'Cant fetch data',
            404
          );
    }
    let total =0 
    getSessionId.cart.map((info)=>{
        total = total + info.pId.discounted_price*info.qty
    })
    getSessionId['total_price'] = total
    responseSuccess(res,new CustomSuccess('Data fetch successfully', getSessionId, 200))
  } catch (err) {
    responseError(res,err)
  }
};
