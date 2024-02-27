import  express  from "express";



import { verifyToken } from "../../middleware/auth";
import getAllSizes from "./controller/getSize";
import getSizeById from "./controller/getSizeById";
import createSize from "./controller/createSize";
import updateSize from "./controller/putSize";
import deleteSize from "./controller/deletSize";

const sizeRouter = express.Router();
sizeRouter.get('/', getAllSizes)
sizeRouter.get('/:id', getSizeById)
sizeRouter.post('/',verifyToken,createSize)
sizeRouter.put('/:id',verifyToken, updateSize)
sizeRouter.delete('/:id', verifyToken,deleteSize)
export default sizeRouter
