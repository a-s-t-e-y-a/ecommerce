import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CustomError } from "apps/akku/src/utils/errorThrow";

const prisma = new PrismaClient();

export default async function deleteSize(req: Authenticate, res: Response) {
  try {
    const { id } = req.params;
    if (!id) {
      throw new CustomError("Missing shape ID",'Data not found',400) ;
    }

    const deletedSize = await prisma.size.delete({
      where: { id: parseInt(id) }, // Ensure ID is correctly parsed as integer
    });

    if (!deletedSize) {
      throw new CustomError("Size not found", 'Error ocurred', 404 );
    }
    responseSuccess(res, new CustomSuccess("Size deleted successfully", deletedSize, 200));
  } catch (error) {
    responseError(res, error);
  }
}

