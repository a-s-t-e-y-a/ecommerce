import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { createCartItem } from './controller/create'
const cartRoute = express.Router()

cartRoute.get('/',verifyToken)

export default cartRoute