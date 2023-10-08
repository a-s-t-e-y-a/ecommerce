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
    let token;

    // Check if the token is present in the cookies
    if (req.cookies.jwt) {
      token = req.cookies.jwt;
    } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    
      token = req.headers.authorization.split(' ')[1];
      console.log(token)
    }

    if (!token) {
      throw new CustomError('Please provide a token', 'Unauthorized error', 401);
    }

    jwt.verify(token, 'BEARER', (err, decoded) => {
      if (err) {
        throw new CustomError('Token verification failed', 'Unauthorized error', 401);
      }
      req.userId = decoded.find.id;
      next();
    });
  } catch (err) {
    return responseError(res, err);
  }
}
