import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import {CustomError}  from '../../../../middleware/errorThrow'
import { responseError } from "apps/akku/src/middleware/responseError";
const prisma = new PrismaClient();
export async function loginPost(req:Request , res: Response) {
    try {
        const find = await prisma.user.findFirst({
            where:{
                email: req.body.email
            }
        })
        if(!find){
            throw new CustomError('User Does not exist','Not acceptable',406) 
        }
    }catch(err){
        responseError(res,err)
    }
}