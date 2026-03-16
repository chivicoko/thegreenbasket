import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
  category: z.string(),
  price: z.coerce.number().positive(),
  stock: z.coerce.number().int().nonnegative(),
});

export type ProductInput = z.infer<typeof productSchema>;