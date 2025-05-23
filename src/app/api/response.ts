export interface CepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

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
