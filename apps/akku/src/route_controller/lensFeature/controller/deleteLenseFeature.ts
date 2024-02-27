import { PrismaClient } from "@prisma/client";
import { deleteObject } from "apps/akku/src/interfaces/AWSInterface";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import deleteS3Object from "apps/akku/src/utils/deleteFromAwsSdk";
import { CustomError } from "apps/akku/src/utils/errorThrow";
import getSpecifiedUrl from "apps/akku/src/utils/getSpecificFileName";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export default async function deleteLensFeature(req:Authenticate, res:Response){
  try{
      if(!req.params.id){
      throw new CustomError('Id not provided', 'Not found', 400)
    }
    const data = await prisma.lensFeature.delete({
      where:{
        id : parseInt(req.params.id)
      }
    })
    const params: deleteObject={
      Bucket:process.env.BASE_URL_AWS_S3,
      Key:getSpecifiedUrl(data.image)
    }
    await deleteS3Object(params)
    responseSuccess(res, new CustomSuccess('Data deleted successfully', data , 200))
  }catch(error){
    responseError(res, error)
  }
}
