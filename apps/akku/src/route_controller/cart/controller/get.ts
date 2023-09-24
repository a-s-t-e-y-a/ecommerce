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
    if (req.sessionId == null) {
      throw new CustomError('Session is not created', 'Cart is empty ', 404);
    }
    const getSessionId = await prisma.session.findFirst({
      where: {
        userId: req.userId,
        session_Id: req.sessionId,
      },
      include: {
        cart: {
          include: {
            productId: true,
            lId: true,
          },
        },
      },
    });
    console.log(getSessionId);
    if (getSessionId.cart.length == 0) {
      throw new CustomError(
        'Dont have any item in cart',
        'Cant fetch data',
        404
      );
    }

    let frame_total = 0,
      lense_total = 0;
    getSessionId.cart.map((info) => {
      frame_total =
        info.productId != null
          ? frame_total + info.productId.discounted_price * info.qty_frame
          : frame_total;
      lense_total =
        info.lId != null
          ? lense_total + Number(info.lId.price) * info.qty_lenses
          : lense_total;
    });
    getSessionId['frame_total'] = frame_total;
    getSessionId['lenses_total'] = lense_total;
    getSessionId['grand_total'] = frame_total + lense_total;
    responseSuccess(
      res,
      new CustomSuccess('Data fetch successfully', getSessionId, 200)
    );
  } catch (err) {
    console.log(err);
    responseError(res, err);
  }
};
