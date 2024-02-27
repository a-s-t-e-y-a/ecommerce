import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CustomError } from "apps/akku/src/utils/errorThrow";

const prisma = new PrismaClient();

export default async function updateSize(req: Authenticate, res: Response) {
  try {
    const { id } = req.params;
    if (!id) {
      throw new CustomError("Missing size ID",'Data not found',400) ;
    }

    const updatedSize = await prisma.size.update({
      where: { id: parseInt(id) }, // Ensure ID is correctly parsed as integer
      data: req.body, // Allow updating any properties in the request body
    });

    if (!updatedSize) {
     throw new CustomError("Updation problem",'Update not happend',400) ;
    }
    responseSuccess(res, new CustomSuccess("Size updated successfully", updatedSize, 200));
  } catch (error) {
    responseError(res, error);
  }
}

