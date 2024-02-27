import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import {Response} from 'express'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default async function createSize(req:Authenticate, res:Response){
  try {
    const data = await prisma.size.create({
      data:{
        name: req.body.data
      }
    })
    responseSuccess(res , new CustomSuccess('Data uploaded successfully', data, 200))
  }catch(error){
    responseError(res,error)
  }
}
