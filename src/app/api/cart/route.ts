// app/api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeJson, readJson } from "@/lib/jsondb";

const CART_FILE = "cart.json";

export async function GET() {
  const cart = await readJson(CART_FILE).catch(() => []);
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await writeJson(CART_FILE, body);
  return NextResponse.json({ success: true, cart: body });
}
