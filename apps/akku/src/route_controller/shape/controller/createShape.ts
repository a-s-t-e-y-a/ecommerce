import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();

export async function createShape(req: Authenticate, res: Response) {
  try {
    const data =req.body.data
    const file = req.fileUrl
    console.log(data)
    // if(!file){
    //   throw new CustomError('File url is not uploaded', 'Error occurred', 200)
    // }
    // const info = await prisma.shape.create({
    //   data:{
    //     name:data.name,
    //     image:file,
    //   }
    // })
    // responseSuccess(res, new CustomSuccess('Data created succesfully',info,200));
  } catch (error) {
    responseError(res, error);
  }
}

