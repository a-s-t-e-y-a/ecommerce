import express from 'express';

import { createProduct } from '../controller/product/create';
import { getProductById, getProducts } from '../controller/product/get';
import { deleteProduct } from '../controller/product/delete';
import { updateProduct } from '../controller/product/edit';
import { verifyToken } from 'apps/akku/src/middleware/auth';

const categories = express.Router();

categories.post('/',verifyToken, createProduct );
categories.get('/',getProducts)
categories.get('/:id',getProductById);
categories.put('/:id', updateProduct);
categories.delete('/:id',deleteProduct );

export default categories;