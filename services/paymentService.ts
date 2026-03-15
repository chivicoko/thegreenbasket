// services/paymentService.ts
import crypto from "crypto";

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: "requires_payment" | "succeeded" | "failed";
  clientSecret: string;
}

export async function createPaymentIntent(
  amount: number,
  currency = "usd"
): Promise<PaymentIntent> {
  // Mock payment intent generator
  const id = `pi_${crypto.randomBytes(8).toString("hex")}`;
  const clientSecret = `secret_${crypto.randomBytes(16).toString("hex")}`;

  return {
    id,
    amount,
    currency,
    status: "requires_payment",
    clientSecret,
  };
}
