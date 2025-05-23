import { ProductDetailsProps } from "./props";

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-snug tracking-tight">{product.title}</h1>

      <span className="text-xl font-medium mt-2 text-zinc-900">R$ {product.price.toFixed(2)}</span>

      <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{product.shipping}</p>

      <p className="mt-8 text-base font-light leading-relaxed text-zinc-700 max-w-[320px]">{product.description}</p>
    </div>
  );
}
