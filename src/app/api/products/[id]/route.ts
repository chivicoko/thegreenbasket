import { NextRequest, NextResponse } from "next/server";
import { deleteProduct, getProduct, updateProduct } from "../../../../../services/productService";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await getProduct(params.id);

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const updated = await updateProduct(params.id, body);

  if (!updated) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const deleted = await deleteProduct(params.id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "Product deleted" },
    { status: 204 }
  );
}