import express from 'express';
import { loginPost } from './controller/postLogin';

const loginRouter = express.Router()

loginRouter.post('/',loginPost)
export default loginRouter