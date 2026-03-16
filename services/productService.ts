import { products } from "@/lib/data";

const delay = () => new Promise((res) => setTimeout(res, 500));

export interface QueryOptions {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sort?: string;
  order?: "asc" | "desc";
}

export function listProducts(options: QueryOptions) {
  let result = [...products];

  // Filtering
  if (options.category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === options.category!.toLowerCase()
    );
  }

  // Search
  if (options.search) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(options.search!.toLowerCase())
    );
  }

  // Sorting
  if (options.sort) {
    result.sort((a: any, b: any) => {
      const aVal = Number(a[options.sort!]);
      const bVal = Number(b[options.sort!]);

      if (options.order === "desc") return bVal - aVal;
      return aVal - bVal;
    });
  }

  const total = result.length;

  // Pagination
  const page = options.page || 1;
  const limit = options.limit || 10;
  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + limit);

  return {
    data: paginated,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getProduct(id: string) {
    await delay();
    return products.find((p) => p.id === id);
}

export function createProduct(data: any) {
  const newProduct = {
    id: String(products.length + 1),
    ...data,
  };

  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(id: string, data: any) {
    await delay();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...data };
    return products[index];
}

export async function deleteProduct(id: string) {
    await delay();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return false;

    products.splice(index, 1);
    return true;
}
