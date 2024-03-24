import  express  from "express";

import { verifyToken } from "../../middleware/auth";
import { createBlog } from "./controllers/post";
import { getAllBlogs, getBlogById } from "./controllers/get";
import { updateBlog } from "./controllers/patch";
import { deleteBlog } from "./controllers/delete";
const blogsRouter = express.Router();
blogsRouter.get('/', getAllBlogs)
blogsRouter.get('/:id', getBlogById)
blogsRouter.post('/',createBlog)
blogsRouter.put('/:id', updateBlog)
blogsRouter.delete('/:id', verifyToken,deleteBlog)
export default blogsRouter
