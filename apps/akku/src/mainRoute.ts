import  express  from "express";

import routerProduct from "./route_controller/products/route/route";
import authRouter from "./route_controller/auth/authRoute";
import cartRoute from "./route_controller/cart/cartRoute";
import brand from "./route_controller/products/route/brand";
import categories from "./route_controller/products/route/categories";
import adminRouter from "./route_controller/admin/auth/route";
import routeFilter from "./route_controller/filter/filter.route";
import lenseRouter from "./route_controller/lenses/routeLenses";
import shapeRouter from "./route_controller/shape/routeShape";
const mainRouter = express.Router()

mainRouter.use('/products',routerProduct)
mainRouter.use('/brands',brand)
mainRouter.use('/categories', categories)
mainRouter.use('/auth',authRouter)
mainRouter.use('/cart',cartRoute)
mainRouter.use('/admin', adminRouter)
mainRouter.use('/filter', routeFilter)
mainRouter.use('/lenses', lenseRouter)
mainRouter.use('/shape', shapeRouter)
export default mainRouter;
