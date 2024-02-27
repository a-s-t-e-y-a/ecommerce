import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { responseError } from "apps/akku/src/utils/responseError";
import { CustomSuccess } from "apps/akku/src/utils/succes";
const prisma = new PrismaClient()
export default async function getAllPowerType(req:Authenticate, res:Response){
    try{
    const data = await prisma.powerType.findMany()
    responseSuccess(res, new CustomSuccess('Data founded successfully', data , 200))
  }catch(error){
    responseError(res, error)
  }
}
