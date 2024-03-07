import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export async function deleteMaterial (req:Authenticate, res:Response){
  try{
      const data_ = await prisma.material.delete({
      where:{
        id:parseInt(req.params.id)
      }
    })
    responseSuccess(res, new CustomSuccess('Data deleted successfully', data_ , 200))
  }catch(error){
    responseError(res, error)
  }
}
