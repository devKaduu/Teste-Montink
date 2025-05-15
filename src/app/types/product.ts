export interface Product {
  title: string;
  price: number;
  shipping: string;
  description: string;
  images: string[];
  variants: {
    size: string[];
    color: string[];
  };
}
