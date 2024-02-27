import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseError } from 'apps/akku/src/utils/responseError';
import { deleteObject } from 'apps/akku/src/interfaces/AWSInterface';
import deleteS3Object from 'apps/akku/src/utils/deleteFromAwsSdk';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import getSpecifiedUrl from 'apps/akku/src/utils/getSpecificFileName';

const prisma = new PrismaClient();

export async function deleteShape(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await prisma.shape.delete({
      where: {
        id: parseInt(id),
      },
    });
    console.log(getSpecifiedUrl(data.image))
    const params : deleteObject ={
      Bucket:process.env.BUCKET_NAME,
      Key:getSpecifiedUrl(data.image)
    }

    await deleteS3Object(params)
    responseSuccess(res, new CustomSuccess('Deleted Successfully', data, 200))
  } catch (error) {
    responseError(res, error);
  }
}

