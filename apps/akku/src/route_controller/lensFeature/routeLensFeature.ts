import  express  from "express";

import upload from "../../middleware/upload";
import { verifyToken } from "../../middleware/auth";
import getAllLenseFeature from "./controller/getLenseFeature";
import createLenseFeature from "./controller/createLenseFeature";
import deleteLensFeature from "./controller/deleteLenseFeature";
const lenseFeatureRouter = express.Router();
lenseFeatureRouter.get('/', getAllLenseFeature)
lenseFeatureRouter.post('/',verifyToken,upload.single('file'),createLenseFeature)
lenseFeatureRouter.delete('/:id', verifyToken,deleteLensFeature)
export default lenseFeatureRouter
