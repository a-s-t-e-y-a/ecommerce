import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from '../../../../utils/errorThrow'
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess'
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface'
interface admin {
  first_name: string;
  last_name: string;
  address: string;
  password: string;
  email: string;
  gender: string;
}

export const createAdmin = async(res: Response , req : Authenticate)=>{
  try {
    console.log(req)
    const { first_name , last_name , address , password , email, gender } : admin = req.body
    console.log(req)
    const data = await prisma.user.findMany({where:{
      email: email
    }})
    if(data.length>0){
      throw new CustomError('Admin already exist', 'Bad Request', 404)
    }
    const data_ = await prisma.user.create({
      data:{
        name : first_name+' '+ last_name,
        address,
        email,
        gender,
        role:'admin',
        password,
        created_on : new Date()
      }
    })
    responseSuccess(res, new CustomSuccess('Admin created successfully', data_, 200))
  }catch(error){
    // responseError(res , error);
    console.log(error)
  }
}
