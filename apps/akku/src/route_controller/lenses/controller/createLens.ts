import { PrismaClient } from "@prisma/client";
import { Authenticate } from "apps/akku/src/interfaces/reqInterface";
import { responseError } from "apps/akku/src/utils/responseError";
import { Response } from "express";
const prisma = new PrismaClient()
export default async function createLens(req:Authenticate, res:Response){
  const data = JSON.parse(req.body.data)
  try{
    const data_ = await prisma.lenses.create({
      data:{
        heading :data.heading,
        price:data.price,
        warranty_period:data.warranty,
        thickness:data.thickness,
        power_range:data.power_range,
        blue_light_blocker:data.blue_light_blocker,
        anti_scratch_coating:data.anti_scratch_coating,
        both_side_anti_glare_coating:data.both_side_anti_glare_coating,
        both_side_anti_reflective_coating:data.both_side_anti_reflective_coating,
        uv_protection:data.uv_protection,
        water_and_dust_repellent:data.water_and_dust_repellent,
        breakage_and_crack_resistant:data.breakage_and_crack_resistant,
        created_at:new Date(),
        updated_at:new Date(),
        categories_id:{
          connect:{
            products_categories_id:parseInt(data.categories_id)
          }
        },
        brand_id:{
          connect:{
            products_brand_id:parseInt(data.products_brand_id)
          }
        },
        lens_feature_:{
          connect:{
            id:parseInt(data.lens_feature_id)
          }
        }
      }
    })
  }catch(error){
    responseError(res, error)
  }
}
