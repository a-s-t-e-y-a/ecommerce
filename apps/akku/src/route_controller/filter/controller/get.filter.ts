import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';

const prisma = new PrismaClient()

export async function getFilter(req:Request, res:Response){
      try {
      const shape = await prisma.shape.findMany({})
      const style = await prisma.style.findMany({})
      const color = await prisma.color.findMany({})
    responseSuccess(res, new CustomSuccess('All filter fetched in products',{
      shape,
      style,
      color
    }, 200))
  }catch (err){
    console.log(err)
  }
}

