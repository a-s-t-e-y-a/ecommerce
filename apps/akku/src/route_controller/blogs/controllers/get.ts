import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const getAllBlogs = async (req: Request, res: Response) => {
    try {
      const blogs = await prisma.blogs.findMany();
      blogs.forEach((item) => {
      item['imageArray'] = `https://akkukachasma.s3.amazonaws.com/blogs/thumb/${item.thumb}`;
    });
      res.status(200).json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Unable to fetch blogs' });
    }
  };
  export const getBlogById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const blog = await prisma.blogs.findUnique({
        where: {
          seo_title: id,
        },
      });

      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      blog['imageArray'] = `https://akkukachasma.s3.amazonaws.com/blogs/thumb/${blog.thumb}`;
      res.status(200).json(blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
      res.status(500).json({ error: 'Unable to fetch blog' });
    }
  };
    