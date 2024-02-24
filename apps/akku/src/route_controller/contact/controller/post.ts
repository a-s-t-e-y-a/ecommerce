import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { responseError } from 'apps/akku/src/utils/responseError';
const prisma = new PrismaClient()
export async function postContactFrom(req:Request, res:Response){
try {
    const contact = await prisma.contact.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country,
      },
    });
   responseSuccess(res, new CustomSuccess('Contact info saved successfully ', contact, 200))
  } catch (error) {

  responseError(res, error)
  }
}

