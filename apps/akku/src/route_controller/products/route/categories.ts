import express from 'express';


import { verifyToken } from 'apps/akku/src/middleware/auth';
import { categoryCreate } from '../controller/category/create';
import { categoryGetAll, categoryGetById } from '../controller/category/get';
import { categoryUpdate } from '../controller/category/update';
import { categoryDelete } from '../controller/category/delete';

const categories = express.Router();

categories.post('/',verifyToken, categoryCreate );
categories.get('/',categoryGetAll)
categories.get('/:id',categoryGetById);
categories.put('/:id', categoryUpdate);
// categories.delete('/:id',categoryDelete );

export default categories;