import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { heading, thumb, description, url, seo_title } = req.body;
    const createdBlog = await prisma.blogs.create({
      data: {
        heading,
        thumb,
        description,
        url,
        seo_title,
        created_on: new Date(), // assuming you want to set the current date/time
      },
    });
    res.status(201).json(createdBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Unable to create blog' });
  }
};
