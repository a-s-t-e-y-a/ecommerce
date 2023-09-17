import express from 'express'
import { verifyToken } from '../../middleware/auth'
const cartRoute = express.Router()

cartRoute.post('/',verifyToken)

export default cartRoute