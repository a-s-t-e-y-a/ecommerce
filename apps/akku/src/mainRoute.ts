import  express  from "express";

import routerProduct from "./route_controller/products/route";
const mainRouter = express.Router()

mainRouter.use('/products',routerProduct)
export default mainRouter;