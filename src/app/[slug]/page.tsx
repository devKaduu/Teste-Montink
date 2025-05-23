import { products } from "@/const/product";
import { ProductDetailsTemplate } from "@/template/product-details";
import { Product } from "@/types/product";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;

  const product: Product | undefined = products.find((produdct) => produdct.slug === slug);

  if (!product) return;

  return <ProductDetailsTemplate product={product} />;
}
