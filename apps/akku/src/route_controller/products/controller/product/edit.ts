import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateProduct(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  try {
    const updatedProduct = await prisma.products.update({
      where: { p_id: productId },
      data: req.body,
    });
    return res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Error updating product' });
  }
}
