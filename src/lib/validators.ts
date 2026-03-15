import { z } from 'zod';

export const productCreateSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  priceCents: z.number().int().positive(),
  imageUrl: z.string().url().optional(),
  stock: z.number().int().nonnegative(),
  sku: z.string().optional(),
  category: z.string().optional()
});

export const productUpdateSchema = productCreateSchema.partial();

export const cartSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().int().positive()
  })).min(1)
});

export const checkoutSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().int().positive()
  })).min(1)
});


export const productSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  category: z.string(),
  price: z.coerce.number().positive(),
  stock: z.coerce.number().int().nonnegative(),
});

export type ProductInput = z.infer<typeof productSchema>;