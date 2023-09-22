import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { createCartItem } from './controller/create'
import { sessionCheck } from '../../middleware/sessionCheck'
const cartRoute = express.Router()

cartRoute.post('/',verifyToken,sessionCheck,createCartItem)

export default cartRoute