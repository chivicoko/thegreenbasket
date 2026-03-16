import { NextRequest, NextResponse } from "next/server";
import { deleteProduct, getProduct, updateProduct } from "../../../../../services/productService";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = await getProduct(id);

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
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();
  const updated = await updateProduct(id, body);

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
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const deleted = await deleteProduct(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return new NextResponse(null, { status: 204 });
}