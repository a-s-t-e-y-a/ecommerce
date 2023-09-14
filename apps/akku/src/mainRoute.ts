import  express  from "express";

import routerProduct from "./route_controller/products/route/route";
import authRouter from "./route_controller/auth/authRoute";
const mainRouter = express.Router()

mainRouter.use('/products',routerProduct)
mainRouter.use('/auth',authRouter)
export default mainRouter;