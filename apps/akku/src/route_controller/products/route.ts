import express from 'express';

import { createProduct } from './controller/create';
import { getProductById, getProducts } from './controller/get';
import { deleteProduct } from './controller/delete';
import { updateProduct } from './controller/edit';

const routerProduct = express.Router();

routerProduct.post('/', createProduct );
routerProduct.get('/',getProducts)
routerProduct.get('/:id',getProductById);
routerProduct.put('/:id', updateProduct);
routerProduct.delete('/:id',deleteProduct );

export default routerProduct;