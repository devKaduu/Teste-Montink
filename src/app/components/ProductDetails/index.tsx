import { ProductApi } from "@/app/types/product";

export function ProductDetails({ title }: ProductApi) {
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-snug tracking-tight">{title}</h1>

      {/* <span className="text-xl font-medium mt-2 text-zinc-900">R$ {price}</span> */}

      {/* <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{product.shipping}</p> */}

      {/* <p className="mt-8 text-base font-light leading-relaxed text-zinc-700 max-w-[320px]">{product.description}</p> */}
    </div>
  );
}
