import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';

import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';
import { CustomError } from 'apps/akku/src/utils/errorThrow';
import { deleteObject } from 'apps/akku/src/interfaces/AWSInterface';
import deleteS3Object from 'apps/akku/src/utils/deleteFromAwsSdk';

const prisma = new PrismaClient();

export const categoryCreate = async (req: Authenticate, res: Response) => {
  try {
    console.log(req.fileUrl)
   if(!req.fileUrl){
      throw new CustomError('Please provide the file', 'Not found', 400)
    }
    const data = JSON.parse(req.body.data)
    const category = await prisma.product_categories.create({
      data: {
        name:data.name,
        image:process.env.BASE_URL_AWS_S3+req.fileUrl,
        created_on:new Date(),
        updated_on:new Date(),
        status:data.status,
        url:data.name,
      },
    });
    responseSuccess(
      res,
      new CustomSuccess('New category is created successfully', category, 200)
    );
  } catch (err) {
    const params:deleteObject={
      Bucket:process.env.BUCKET_NAME,
      Key:req.fileUrl
    }
    await deleteS3Object(params)
    responseError(res, err);
  }
};
