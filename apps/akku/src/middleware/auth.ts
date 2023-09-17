import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { Response, Request, NextFunction } from 'express';

interface Authenticate extends Request {
  userId: string;
}

export async function verifyToken(
  req: Authenticate,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.cookies.jwt)
    if (req.cookies.jwt == undefined) {
      throw new CustomError(
        'Please login first',
        'Unauthorized error',
        401
      );
    }
 
    const token = req.cookies.jwt;

    if (!token) {
      throw new CustomError(
        'Token verification failed',
        'Unauthorized error',
        401
      );
    }

    jwt.verify(token, 'BEARER', (err, decoded) => {
      if (err) {
        throw new CustomError(
          'Token verification failed',
          'Unauthorized error',
          401
        );
      }
      console.log(decoded)
      req.userId = decoded.id;
      next();
    });
  } catch (err) {
    return responseError(res, err);
  }
}
