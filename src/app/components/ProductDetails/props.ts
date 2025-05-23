import { ProductApi } from "@/app/types/product";

export interface ProductDetailsProps {
  product: Omit<ProductApi, "options" | "price" | "values">;
}
