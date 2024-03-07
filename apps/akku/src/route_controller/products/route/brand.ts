import express from 'express';
import { verifyToken } from 'apps/akku/src/middleware/auth';
import { brandCreate } from '../controller/brand/create';
import { brandGetAll, brandGetById } from '../controller/brand/get';
import { brandUpdate } from '../controller/brand/update';
import { brandDelete } from '../controller/brand/delete';

const brand = express.Router();

brand.post('/', brandCreate );
brand.get('/', brandGetAll)
brand.get('/:id',brandGetById);
brand.put('/:id',verifyToken, brandUpdate);
brand.delete('/:id',verifyToken,brandDelete );

export default brand;
