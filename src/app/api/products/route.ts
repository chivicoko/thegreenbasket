import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "@/lib/validators";
import { createProduct, listProducts } from "../../../../services/productService";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const result = listProducts({
      page: Number(searchParams.get("page")),
      limit: Number(searchParams.get("limit")),
      category: searchParams.get("category") || undefined,
      search: searchParams.get("search") || undefined,
      sort: searchParams.get("sort") || undefined,
      order: searchParams.get("order") as "asc" | "desc" | undefined,
    });

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = productSchema.parse(body);

    const product = createProduct(validated);

    return NextResponse.json(product, { status: 201 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 400 }
    );
  }
}