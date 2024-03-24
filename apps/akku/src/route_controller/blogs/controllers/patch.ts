import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const updateBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { heading, thumb, description, url, seo_title } = req.body;
    try {
      const updatedBlog = await prisma.blogs.update({
        where: {
          id: parseInt(id),
        },
        data: {
          heading,
          thumb,
          description,
          url,
          seo_title,
        },
      });
      res.status(200).json(updatedBlog);
    } catch (error) {
      console.error('Error updating blog:', error);
      res.status(500).json({ error: 'Unable to update blog' });
    }
  };
  