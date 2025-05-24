export interface ProductResponse {
  title: string;
  options: string[];
  values: string[][];
  image_url: string;
  id: number;
  variants: Variant[];
}

interface Variant {
  values: string[];
  inventory_quantity: number;
  id: number;
  price: number;
}
