import { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "CAMISETA DE TRICÔ ESTAMPADA",
    slug: "camiseta-trico-estampada",
    price: 269,
    shipping: "Entrega em 3 a 7 dias úteis.",
    description: "Camiseta relaxed fit com estampa. Gola redonda e manga curta.",
    images: ["/preview/01.jpg", "/preview/02.jpg"],
    variants: {
      size: ["P", "M", "G", "GG"],
    },
  },
  {
    title: "CAMISETA COM ESTAMPA COMBINANDO",
    slug: "camiseta-com-estampa-combinando",
    price: 199,
    shipping: "Entrega em 3 a 7 dias úteis.",
    description: "Camiseta relaxed fit com estampa. Gola redonda e manga curta.",
    images: ["/preview/04.jpg", "/preview/03.jpg"],
    variants: {
      size: ["P", "M", "G", "GG"],
      color: ["#fff"],
    },
  },
];
