import { ProductPreview } from "@/components/ProductPreview";
import { ProductPreviewProps } from "@/types/product";
import Link from "next/link";

export function Products() {
  const products = [
    {
      slug: "camiseta-trico-estampada",
      image: "/preview/01.jpg",
      title: "CAMISETA DE TRICÔ ESTAMPADA",
      price: "269,00",
    },
    {
      slug: "camiseta-trico-estampada",
      image: "/preview/02.jpg",
      title: "CAMISETA DE TRICÔ ESTAMPADA",
      price: "269,00",
    },
    {
      slug: "camiseta-com-estampa-combinando",
      image: "/preview/03.jpg",
      title: "CAMISETA COM ESTAMPA COMBINANDO",
      price: "199,00",
    },

    {
      slug: "camiseta-com-estampa-combinando",
      image: "/preview/04.jpg",
      title: "CAMISETA COM ESTAMPA COMBINANDO",
      price: "199,00",
    },
  ] as ProductPreviewProps[];

  return (
    <section className="p-5 flex  justify-center flex-row gap-14">
      {products.map((product, index) => (
        <Link key={index} href={`/${product.slug}`}>
          <ProductPreview
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            slug={product.slug}
          />
        </Link>
      ))}
    </section>
  );
}
