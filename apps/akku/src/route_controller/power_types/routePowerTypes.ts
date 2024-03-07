import  express  from "express";

import upload from "../../middleware/upload";
import { verifyToken } from "../../middleware/auth";
import createPowerType from "./controller/createPowerType";
import getPowerTypeById from "./controller/getPowerTypeById";
import getAllPowerType from "./controller/getAllPowerTypes";
import deletePowerType from "./controller/deletePowerType";
const powerTypeRouter = express.Router();
powerTypeRouter.get('/', getAllPowerType)
powerTypeRouter.get('/:id', getPowerTypeById)
powerTypeRouter.post('/',upload.single('file'),createPowerType)
// powerTypeRouter.put('/:id', updateShape)
powerTypeRouter.delete('/:id', verifyToken,deletePowerType)
export default powerTypeRouter
