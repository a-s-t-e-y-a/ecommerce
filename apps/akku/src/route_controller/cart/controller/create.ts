import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CustomError } from 'apps/akku/src/utils/errorThrow';

const prisma = new PrismaClient();

interface CreateCartItemRequest {
  p_id: number;
  price: string;
  qty: number;
  coupon_code?: string | null;
  user_ip: string;
  l_id?: number | null;
  l_price?: number | null;
  user_id: number;
}

export const createCartItem = async (req: Request, res: Response) => {
  try {
    const {
      p_id,
      price,
      qty,
      coupon_code,
      user_ip,
      l_id,
      l_price,
      user_id,
    }: CreateCartItemRequest = req.body;
    const product = await prisma.products.findUnique({
      where: {
        products_id: p_id,
      },
    });
    if(!product){
        throw new CustomError('Item does not exist','Bad Request',404)
    }
    const newCartItem = await prisma.cart.create({
      data: {
        pId: { connect: { products_id: p_id } },
        price:product.product_price,
        qty,
        coupon_code,
        user_ip:req.socket.remoteAddress    ,
        l_id,
        l_price,
        user: { connect: { id: user_id } },
      },
    });

    res.status(201).json(newCartItem);
  } catch (error) {
    console.error('Error creating cart item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Close the Prisma client when your application exits
process.on('exit', () => {
  prisma.$disconnect();
});
