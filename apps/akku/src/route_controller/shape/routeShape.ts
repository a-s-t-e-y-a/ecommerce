import  express  from "express";
import { getAllshape } from "./controller/getShape";
import { getShapeById } from "./controller/getShapeById";
import { createShape } from "./controller/createShape";
import { updateShape } from "./controller/updateShape";
import { deleteShape } from "./controller/deleteShape";
import uploadToS3 from "../../middleware/upload";
import upload from "../../middleware/upload";
// import multer from 'multer'
// const upload = multer()
const shapeRouter = express.Router();
shapeRouter.get('/', getAllshape)
shapeRouter.get('/:id', getShapeById)
shapeRouter.post('/',upload.single('file'),createShape)
shapeRouter.put('/:id', updateShape)
shapeRouter.delete('/:id', deleteShape)
export default shapeRouter
