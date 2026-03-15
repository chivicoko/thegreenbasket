// services/orderService.ts
import { readJson, writeJson } from '@/lib/jsondb';
import { nanoid } from 'nanoid';
import { Order, OrderItem, Product } from '../types';

const ORDERS_FILE = 'orders.json';

/**
 * Get all orders
 */
export async function listOrders(): Promise<Order[]> {
  return readJson<Order[]>(ORDERS_FILE);
}

/**
 * Get all orders for a specific user
 */
export async function listOrdersByUser(userId: string): Promise<Order[]> {
  const orders = await listOrders();
  return orders
    .filter((o) => o.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/**
 * Create a new order
 */
export async function createOrder(
  userId: string,
  items: { product: Product; quantity: number }[],
  paymentIntentId: string
): Promise<Order> {
  const orders = await listOrders();

  if (items.length === 0) {
    throw new Error('Order must contain at least one item');
  }

  const orderItems: OrderItem[] = items.map(({ product, quantity }) => ({
    productId: product.id,
    title: product.title,
    priceCents: product.priceCents,
    quantity,
    total: product.priceCents * quantity,
  }));

  const totalAmount = orderItems.reduce((sum, item) => sum + item.total, 0);

  const newOrder: Order = {
    id: nanoid(),
    userId,
    items: orderItems,
    subtotalCents: totalAmount,
    status: 'pending', // could later be 'paid', 'shipped', 'completed'
    paymentIntentId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  orders.push(newOrder);
  await writeJson(ORDERS_FILE, orders);

  return newOrder;
}

/**
 * Get order by ID
 */
export async function getOrderById(orderId: string): Promise<Order | undefined> {
  const orders = await listOrders();
  return orders.find((o) => o.id === orderId);
}

/**
 * Update order status (e.g., after payment, shipping, etc.)
 */
export async function updateOrderStatus(
  orderId: string,
  status: Order['status']
): Promise<Order> {
  const orders = await listOrders();
  const index = orders.findIndex((o) => o.id === orderId);

  if (index === -1) {
    throw new Error(`Order with id ${orderId} not found`);
  }

  orders[index].status = status;
  orders[index].updatedAt = new Date().toISOString();

  await writeJson(ORDERS_FILE, orders);
  return orders[index];
}

/**
 * Delete an order (e.g., admin cancelation)
 */
export async function deleteOrder(orderId: string): Promise<void> {
  let orders = await listOrders();
  const initialLength = orders.length;

  orders = orders.filter((o) => o.id !== orderId);

  if (orders.length === initialLength) {
    throw new Error(`Order with id ${orderId} not found`);
  }

  await writeJson(ORDERS_FILE, orders);
}
