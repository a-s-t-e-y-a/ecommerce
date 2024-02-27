import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { responseError } from "apps/akku/src/utils/responseError";
import { CustomError } from "apps/akku/src/utils/errorThrow";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { deleteObject } from "apps/akku/src/interfaces/AWSInterface";
import deleteS3Object from "apps/akku/src/utils/deleteFromAwsSdk";
const prisma = new PrismaClient()
export default async function createPowerType (req:Authenticate, res:Response){
  try{
      if(!req.fileUrl){
      throw new CustomError('File url not found','Kindly check file upload', 400)
    }
    const data = JSON.parse(req.body.data)
    const info = await prisma.powerType.create({
      data:{
        name:data.name,
        description:data.description,
        image:process.env.BASE_URL_AWS_S3+req.fileUrl
      }
    })
    responseSuccess(res, new CustomSuccess('Data uploaded successfully', data, 200))
  }catch(error){
    // if prisma request failed delete the S3 object that we create
    const params : deleteObject = {
      Bucket:process.env.BUCKET_NAME,
      Key:req.fileUrl
    }
    await deleteS3Object(params)
    responseError(res, error)
  }
}
