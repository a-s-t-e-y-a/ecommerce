import { Request } from 'express';
import { UploadedFile } from './uploadInterfaceMulter';
export interface Authenticate extends Request {
    userId: number;
    sessionId: string;
    files:string[];
    fileUrl:string;
    data:any
  }
