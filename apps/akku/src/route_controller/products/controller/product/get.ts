import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProductById(req: Request, res: Response) {
  const productId = parseInt(req.params.id, 10);
  try {
    const product = await prisma.products.findUnique({
      where: { products_id: productId },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ error: 'Error fetching product' });
  }
}

export async function getProducts(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const itemsPerPage = parseInt(req.query.itemsPerPage as string) || 4; 

    const skip = (page - 1) * itemsPerPage;

    const products = await prisma.products.findMany({
      take: itemsPerPage,
      skip: skip,
    });

    return res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Error fetching products' });
  }
}