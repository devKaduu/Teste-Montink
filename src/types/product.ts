export interface Product {
  slug: string;
  title: string;
  price: number;
  shipping: string;
  description: string;
  images: string[];
  variants: {
    size: string[];
    color?: string[];
  };
}

export interface ProductPreviewProps {
  slug: string;
  image: string;
  title: string;
  price: string;
}
