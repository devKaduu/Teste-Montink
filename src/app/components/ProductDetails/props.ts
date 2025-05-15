import { Product } from "@/app/types/product";

export interface ProductDetailsProps {
  product: Omit<Product, "images" | "variants">;
}
