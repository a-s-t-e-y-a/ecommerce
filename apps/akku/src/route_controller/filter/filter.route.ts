import express from 'express'
import { getFilter } from './controller/get.filter';

const routeFilter = express.Router()

routeFilter.get('/',getFilter)

export default routeFilter
