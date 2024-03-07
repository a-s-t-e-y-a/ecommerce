import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export default async function getAllLenseFeature(req:Authenticate, res:Response){
  try{
    const data = await prisma.lensFeature.findMany({})
    responseSuccess(res, new CustomSuccess('Data fetched sucessfully', data , 200))
  }catch(error){
    console.log(error)
    responseError(res, error)
  }
}
