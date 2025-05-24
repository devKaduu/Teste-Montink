import { ProductResponse } from "./response";

export async function fetchProduct(): Promise<ProductResponse | null> {
  try {
    const res = await fetch(`https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-1.json`);
    const data: ProductResponse = await res.json();

    if (!data) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}
