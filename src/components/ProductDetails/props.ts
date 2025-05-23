import { Product } from "@/types/product";

export interface ProductDetailsProps {
  product: Omit<Product, "images" | "variants">;
}
