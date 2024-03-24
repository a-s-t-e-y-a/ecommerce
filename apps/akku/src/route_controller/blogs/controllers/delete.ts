import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const deleteBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.blogs.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ error: 'Unable to delete blog' });
    }
  };
  