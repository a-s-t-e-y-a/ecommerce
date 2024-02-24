import  express  from "express";
import { getAllLenses } from "./controller/get";

const lenseRouter = express.Router();

lenseRouter.get('/', getAllLenses)
export default lenseRouter
