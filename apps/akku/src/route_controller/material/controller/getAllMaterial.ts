import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
const prisma = new PrismaClient()
export async function getAllMaterial(req:Authenticate, res:Response){
    try{
    const data_ = await prisma.material.findMany()
    responseSuccess(res, new CustomSuccess('Data founded successfully', data_, 200))
  }catch(error){
    responseSuccess(res, error)
  }
}
