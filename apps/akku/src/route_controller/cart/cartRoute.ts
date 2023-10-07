import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { createCartItem } from './controller/create'
// import { sessionCheck } from '../../middleware/sessionCheck'
import { getAllCartItem } from './controller/get'
import { deleteCartItem } from './controller/delete'
const cartRoute = express.Router()

cartRoute.post('/',verifyToken,createCartItem)
cartRoute.get('/',verifyToken,getAllCartItem)
cartRoute.delete('/:id',verifyToken,deleteCartItem)

export default cartRoute