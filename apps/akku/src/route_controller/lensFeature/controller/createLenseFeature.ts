import { PrismaClient } from "@prisma/client";
import { deleteObject } from "apps/akku/src/interfaces/AWSInterface";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import deleteS3Object from "apps/akku/src/utils/deleteFromAwsSdk";
import { CustomError } from "apps/akku/src/utils/errorThrow";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export default async function createLenseFeature(req:Authenticate, res:Response){
  try{
    const file = req.fileUrl
    const data = JSON.parse(req.body.data)
    if(!file){
      throw new CustomError('File not found', 'File not found', 400)
    }
    const info = await prisma.lensFeature.create({
      data:{
        title:data.title,
        description:data.title,
        power_type_:{connect:{id:parseInt(data.productId)}},
        image:process.env.BASE_URL_AWS_S3+file
      }
    })
    responseSuccess(res, new CustomSuccess('data created succesfully', info , 200))
  }catch(error){
    const params : deleteObject= {
      Bucket:process.env.BUCKET_NAME,
      Key:req.fileUrl
    }
    await deleteS3Object(params)
    responseError(res, error)
  }
}
