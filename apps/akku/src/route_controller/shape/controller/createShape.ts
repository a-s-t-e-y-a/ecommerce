import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { responseSuccess } from 'apps/akku/src/utils/responseSuccess';
import { responseError } from 'apps/akku/src/utils/responseError';
import { CustomSuccess } from 'apps/akku/src/utils/succes';
import { Authenticate } from 'apps/akku/src/interfaces/reqInterface';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();

export async function createShape(req: Authenticate, res: Response) {
  try {
    // Ensure proper handling of potential errors
    const data = await JSON.parse(req.body.data); // Use await to handle potential parsing errors
    const fileUrl = req.fileUrl; // Use a descriptive variable name

    if (!fileUrl) {
      throw new CustomError('File url is not uploaded', 'Error occurred', 404);
    }

    const info = await prisma.shape.create({
      data: {
        name: data.name,
        image: process.env.BASE_URL_AWS_S3 + fileUrl,
      },
    });

    responseSuccess(res, new CustomSuccess('Data created successfully', info, 200));
  } catch (error) {
    // Provide more informative and actionable error messages

      console.error('An unexpected error occurred:', error);
      responseError(res, error)

  }
}


