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
import sizeRouter from "./route_controller/size/routeSize";
import powerTypeRouter from "./route_controller/power_types/routePowerTypes";
import lenseFeatureRouter from "./route_controller/lensFeature/routeLensFeature";
import materialRouter from "./route_controller/material/routePowerType";
import colorRouter from "./route_controller/color/routeColor";
import styleRouter from "./route_controller/style/routeStyle";
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
mainRouter.use('/size',sizeRouter)
mainRouter.use('/power-type', powerTypeRouter)
mainRouter.use('/lense-feature', lenseFeatureRouter)
mainRouter.use('/material', materialRouter)
mainRouter.use('/color', colorRouter)
mainRouter.use('/style', styleRouter)
export default mainRouter;
