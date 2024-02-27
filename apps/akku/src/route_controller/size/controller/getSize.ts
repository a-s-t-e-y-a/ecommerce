import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllSizes(req: Authenticate, res: Response) {
  try {
    const shapes = await prisma.size.findMany();
    responseSuccess(res, new CustomSuccess("Sizes retrieved successfully", shapes, 200));
  } catch (error) {
    responseError(res, error);
  }
}

