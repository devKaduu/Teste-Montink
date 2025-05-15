import { Product } from "@/app/types/product";

export const product: Product = {
  title: "CAMISA COM ESTAMPA ABSTRATA",
  price: 199.0,
  shipping: "Entrega em 3 a 7 dias úteis.",
  description: "Camiseta relaxed fit com estampa. Gola redonda e manga curta.",
  images: [
    "/products/front-shirt.png",
    "/products/back-shirt.png",
    "/products/side-shirt.png",
    "/products/zoom-shirt.png",
    "/products/only-shirt.png",
  ],
  variants: {
    size: ["P", "M", "G", "GG"],
    color: ["#000", "#fff", "#ebbe54"],
  },
};
