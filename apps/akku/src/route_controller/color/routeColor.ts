import express from 'express'
import { getColor } from './controller/getColor'
import { deleteColor } from './controller/deleteColor'
import { createColor } from './controller/createColor'

const colorRouter = express.Router()
colorRouter.get('/',getColor)
colorRouter.delete('/:id',deleteColor)
colorRouter.post('/',createColor)
export default colorRouter
