import express from 'express';

import { createProduct } from '../controller/product/create';
import { getProductById, getProducts } from '../controller/product/get';
import { deleteProduct } from '../controller/product/delete';
import { updateProduct } from '../controller/product/edit';
import { verifyToken } from 'apps/akku/src/middleware/auth';
import { brandCreate } from '../controller/brand/create';
import { brandGetAll, brandGetById } from '../controller/brand/get';
import { brandUpdate } from '../controller/brand/update';
import { brandDelete } from '../controller/brand/delete';

const brand = express.Router();

brand.post('/',verifyToken, brandCreate );
brand.get('/', brandGetAll)
brand.get('/:id',brandGetById);
brand.put('/:id',verifyToken, brandUpdate);
brand.delete('/:id',verifyToken,brandDelete );

export default brand;