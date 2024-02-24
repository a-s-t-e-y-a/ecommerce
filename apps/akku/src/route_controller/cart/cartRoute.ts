import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { createCartItem } from './controller/create'
// import { sessionCheck } from '../../middleware/sessionCheck'
import { getAllCartItem } from './controller/get'
import { deleteCartItem } from './controller/delete'
import { addToCartSession } from './controller/createSession'
import { getCartSession } from './controller/getSessionCart'
const cartRoute = express.Router()

cartRoute.post('/',verifyToken,createCartItem)
cartRoute.get('/',verifyToken,getAllCartItem)
cartRoute.delete('/:id',verifyToken,deleteCartItem)
cartRoute.post('/add-to-session', addToCartSession)
cartRoute.get('/get-all-session', getCartSession)
export default cartRoute
