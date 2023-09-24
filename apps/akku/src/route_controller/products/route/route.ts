import express from 'express';

import { createProduct } from '../controller/product/create';
import { getProductById, getProducts } from '../controller/product/get';
import { deleteProduct } from '../controller/product/delete';
import { updateProduct } from '../controller/product/edit';
import { verifyToken } from 'apps/akku/src/middleware/auth';

const routerProduct = express.Router();

routerProduct.post('/',verifyToken, createProduct );
routerProduct.get('/',getProducts)
routerProduct.get('/:id',getProductById);
routerProduct.put('/:id', updateProduct);
routerProduct.delete('/:id',deleteProduct );

export default routerProduct;