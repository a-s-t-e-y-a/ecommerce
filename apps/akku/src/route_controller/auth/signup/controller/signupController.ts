import {  Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from '../../../../utils/errorThrow';
import { responseError } from 'apps/akku/src/utils/responseError';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';

const prisma = new PrismaClient();
import { User } from 'apps/akku/src/interfaces/userInterface';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';
export const signup = async (req: Authenticate , res: Response) => {
    try {
      const { name, email, password, mobile, alter_mobile, address, status } : User = req.body;
  
      // Check if the email is already registered
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      if (existingUser) {
        throw new CustomError('User already exist',  'Bad request', 404 )
      }
  
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password, 
          mobile,
          alter_mobile,
          address,
          status,
          created_on: new Date(),
        },
      });
  
      responseSuccess(res, new CustomSuccess('User created succesfully',newUser,200))
    } catch (error) {
     
     responseError(res, error)
    } finally {
      await prisma.$disconnect();
    }
  };
  