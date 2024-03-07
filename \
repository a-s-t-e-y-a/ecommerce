import express from 'express'
import { verifyToken } from '../../middleware/auth'
import { getAllMaterial } from './controller/getAllMaterial'
import { deleteMaterial } from './controller/deleteMaterial'
import { createMaterial } from './controller/createMaterial'

const materialRouter = express.Router()

materialRouter.get('/', getAllMaterial)
materialRouter.post('/', createMaterial)
materialRouter.delete('/:id', deleteMaterial)

export default materialRouter
