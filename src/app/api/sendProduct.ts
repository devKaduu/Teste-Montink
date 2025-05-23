import { ProductRequest } from "./request";
import { ProductResponse } from "./response";

export async function sendResquestProduct(body: ProductRequest[]) {
  try {
    const res = await fetch(`https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data: ProductResponse = await res.json();

    if (!data) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}
