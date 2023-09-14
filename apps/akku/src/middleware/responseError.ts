import { Response } from 'express';
interface MyInterface {
  message: String;
  status: number;
  TypeError: String;
}

export function responseError(res: Response, err: MyInterface) {
  return res.status(err.status).json({
    message: err.message,
    errorType: err.TypeError,
  });
}
