import  express  from "express";

import routerProduct from "./route_controller/products/route/route";
import authRouter from "./route_controller/auth/authRoute";
import cartRoute from "./route_controller/cart/cartRoute";
import brand from "./route_controller/products/route/brand";
import categories from "./route_controller/products/route/categories";
const mainRouter = express.Router()

mainRouter.use('/products',routerProduct)
mainRouter.use('/brands',brand)
mainRouter.use('/categories', categories)
mainRouter.use('/auth',authRouter)
mainRouter.use('/cart',cartRoute)
export default mainRouter;