import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CustomError } from "apps/akku/src/utils/errorThrow";

const prisma = new PrismaClient();

export default async function deleteShape(req: Authenticate, res: Response) {
  try {
    const { id } = req.params;
    if (!id) {
      throw new CustomError("Missing shape ID",'Data not found',400) ;
    }

    const deletedShape = await prisma.size.delete({
      where: { id: parseInt(id) }, // Ensure ID is correctly parsed as integer
    });

    if (!deletedShape) {
      throw new CustomError("Shape not found", 'Error ocurred', 404 );
    }
    responseSuccess(res, new CustomSuccess("Shape deleted successfully", deletedShape, 200));
  } catch (error) {
    responseError(res, error);
  }
}

