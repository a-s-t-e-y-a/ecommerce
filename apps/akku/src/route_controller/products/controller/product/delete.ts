// deleteProduct.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteProduct(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  try {
    await prisma.products.delete({
      where: { products_id: productId },
    });
    return res.status(204).end();
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'Error deleting product' });
  }
}