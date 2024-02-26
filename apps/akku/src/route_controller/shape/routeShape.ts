import  express  from "express";
import { getAllshape } from "./controller/getShape";
import { getShapeById } from "./controller/getShapeById";
import { createShape } from "./controller/createShape";
import { updateShape } from "./controller/updateShape";
import { deleteShape } from "./controller/deleteShape";

const shapeRouter = express.Router();
shapeRouter.get('/', getAllshape)
shapeRouter.get('/:id', getShapeById)
shapeRouter.post('/', createShape)
shapeRouter.put('/:id', updateShape)
shapeRouter.delete('/:id', deleteShape)
export default shapeRouter
