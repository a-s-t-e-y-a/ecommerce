import express from 'express'
import { postContactFrom } from './controller/post';

const contactRouter = express.Router();

contactRouter.get('/', postContactFrom)
export default contactRouter;

