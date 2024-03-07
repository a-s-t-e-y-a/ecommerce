import  express  from "express";



import { verifyToken } from "../../middleware/auth";
import getAllShape from "./controller/getAllShape";


const styleRouter = express.Router();
styleRouter.get('/', getAllShape)
// styleRouter.get('/:id', getSizeById)
// styleRouter.post('/',verifyToken,createSize)
// styleRouter.put('/:id',verifyToken, updateSize)
// styleRouter.delete('/:id', verifyToken,deleteSize)
export default styleRouter
