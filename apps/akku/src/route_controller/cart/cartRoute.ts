import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { createCartItem } from './controller/create'
import { sessionCheck } from '../../middleware/sessionCheck'
import { getAllCartItem } from './controller/get'
const cartRoute = express.Router()

cartRoute.post('/',verifyToken,sessionCheck,createCartItem)
cartRoute.get('/',verifyToken,sessionCheck,getAllCartItem)

export default cartRoute