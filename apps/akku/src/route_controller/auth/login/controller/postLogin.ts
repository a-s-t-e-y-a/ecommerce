import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from '../../../../utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();

export async function loginPost(req: Request, res: Response) {
  try {
    const { email, password } = req.body as User; 
    const find = await prisma.user.findFirst({
        where: {
            email: email 
        }
    });

    if (!find) {
      throw new CustomError('User Does not exist', 'Not acceptable', 406);
    }
    if(find.password != password){
        throw new CustomError('Invalid Login' , 'Bad request', 400)
    }
    const signedInfo = jwt.sign({ find }, 'BEARER');
    res.cookie('jwt', signedInfo, {
      httpOnly: true,
    });
    responseSuccess(res, new CustomSuccess('Logged successfully',find, 200))
  } catch (err) {
    responseError(res, err);
  }
}

interface User {
  email: string;
  password: string;
}

