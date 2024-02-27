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
export default async function deletePowerType(req:Authenticate, res:Response){
  try{
    if(!req.params.id){
      throw new CustomError('Enter the ID also', 'ID not found', 400)
    }
    const data = await prisma.powerType.delete({
      where:{
        id:parseInt(req.params.id)
      }
    })
    const params : deleteObject ={
      Bucket:process.env.BUCKET_NAME,
      Key:getSpecifiedUrl(data.image)
    }
    await deleteS3Object(params)
    responseSuccess(res, new CustomSuccess('Deleted successully', data, 200))
  }
  catch(error){
    responseError(res, error)
  }
}
