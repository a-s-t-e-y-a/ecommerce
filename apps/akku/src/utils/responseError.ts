import { Response } from 'express';
interface MyInterface {
  message: string;
  status: number;
  TypeError: string;
}

export function responseError(res: Response, err: MyInterface) {
  return res.status(err.status).json({
    message: err.message,
    errorType: err.TypeError,
  });
}
