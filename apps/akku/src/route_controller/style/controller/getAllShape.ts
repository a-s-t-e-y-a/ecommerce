import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { responseSuccess } from "apps/akku/src/utils/responseSuccess";
import { CustomSuccess } from "apps/akku/src/utils/succes";
import { Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllStyle(req: Authenticate, res: Response) {
  try {
    const style = await prisma.style.findMany();
    responseSuccess(res, new CustomSuccess("Style retrieved successfully", style, 200));
  } catch (error) {
    responseError(res, error);
  }
}

