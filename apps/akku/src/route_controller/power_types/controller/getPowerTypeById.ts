import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { CustomError } from "apps/akku/src/utils/errorThrow";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export default async function getPowerTypeById(req:Authenticate, res:Response){
  try{
    if (!req.params.id){
      throw new CustomError('Enter ID ', 'Error', 400)
    }
     const data = await prisma.powerType.findUnique({
      where:{
        id:parseInt(req.params.id)
      }
    })
    if(!data){
      responseSuccess(res, new CustomSuccess('Data not found', {"data":[]},200))
    }
    responseSuccess(res, new CustomSuccess('Data founded', data , 200))
  }catch(error){
    responseError(res, error)
  }
}
