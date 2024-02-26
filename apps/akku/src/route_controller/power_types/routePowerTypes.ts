import  express  from "express";
import { getAllLenses } from "../lenses/controller/get";

const powerTypeRouter = express.Router();

powerTypeRouter.get('/', getAllLenses)
export default powerTypeRouter
