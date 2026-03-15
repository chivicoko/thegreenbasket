// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createPaymentIntent } from "../../../../services/paymentService";
import { createOrder } from "../../../../services/orderService";

export async function POST(req: NextRequest) {
  const { userId, items } = await req.json();

  const totalAmount = items.reduce(
    (sum: number, item: any) => sum + item.product.price * item.quantity,
    0
  );

  const paymentIntent = await createPaymentIntent(totalAmount);

  const order = await createOrder(userId, items, paymentIntent.id);

  return NextResponse.json({ order, paymentIntent });
}
