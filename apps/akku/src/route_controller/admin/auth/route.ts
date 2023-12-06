import express from 'express';
import { createAdmin } from './controller/createAdmin'

const adminRouter = express.Router()

adminRouter.post('/', createAdmin)

export default adminRouter
