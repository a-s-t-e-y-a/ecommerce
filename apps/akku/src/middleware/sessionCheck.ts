import { CustomError } from '../utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { Response, Request, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

interface Authenticate extends Request {
  userId: number;
}

const prisma = new PrismaClient();

export async function sessionCheck(
  req: Authenticate,
  res: Response,
  next: NextFunction
) {
  // Start a Prisma transaction

  try {
    await prisma.$transaction(async (tx) => {
      const sessionFind = await prisma.session.findFirst({
        where: {
          userId: req.userId,
        },
      });
      if (sessionFind) {
        if (
          req.method == 'UPDATE' ||
          req.method == 'DELETE' 
        ) {
          throw new CustomError('either Session is not created or cart is empty', 'Bad request', 400);
        } else {
          next();
        }
      } else {
        await prisma.session.create({
          data: {
            session_Id: uuidv4(),
            user: { connect: { id: req.userId } },
          },
        });
        next();
      }
    });
  } catch (error) {
    return responseError(res, error);
  } finally {
    await prisma.$disconnect();
  }
}
