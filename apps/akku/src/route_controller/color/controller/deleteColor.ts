import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export async function deleteColor(req:Authenticate, res:Response){
    try{
      const data = await prisma.color.delete({
      where:{
        id:parseInt(req.params.id)
      }
    })
    responseSuccess(res, new CustomSuccess('Data created successfully', data , 200))
  }catch(error){
    responseError(res, error)
  }
}
