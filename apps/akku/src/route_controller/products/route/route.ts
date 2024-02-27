import express from 'express';

import { createProduct } from '../controller/product/create';
import { getProductById, getProducts } from '../controller/product/get';
import { deleteProduct } from '../controller/product/delete';
import { updateProduct } from '../controller/product/edit';
import { verifyToken } from '../../../../src/middleware/auth';
import upload from "../../../middleware/upload";

const routerProduct = express.Router();

routerProduct.post('/', upload.single('file'),upload.array('files',3)  ,createProduct);
routerProduct.get('/',getProducts)
routerProduct.get('/:id',getProductById);
routerProduct.put('/:id',verifyToken, updateProduct);
routerProduct.delete('/:id',verifyToken, deleteProduct );

export default routerProduct;
