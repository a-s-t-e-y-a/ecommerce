import { Request } from 'express';
export interface Authenticate extends Request {
    userId: number;
    sessionId: string;
    file:any;
    fileUrl:string;
    data:any
  }
