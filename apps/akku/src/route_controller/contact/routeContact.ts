import express from 'express'
import { postContactFrom } from './controller/post';

const contactRouter = express.Router();

contactRouter.post('/', postContactFrom)
export default contactRouter;

