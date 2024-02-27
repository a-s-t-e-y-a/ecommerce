import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CustomError } from "apps/akku/src/utils/errorThrow";

const prisma = new PrismaClient();

export default async function getSizeById(req: Authenticate, res: Response) {
  try {
    const { id } = req.params;
    if (!id) {
     throw new CustomError("Missing size ID",'Data not found',400) ;
    }

    const shape = await prisma.size.findUnique({
      where: { id: parseInt(id) }, // Ensure ID is correctly parsed as integer
    });

    if (!shape) {
      throw new CustomError('Size not found','Data not found', 400)
    }

    responseSuccess(res, new CustomSuccess("Size retrieved successfully", shape, 200));
  } catch (error) {
    responseError(res, error);
  }
}

