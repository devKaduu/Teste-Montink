import Image from "next/image";
import { ProductPreviewProps } from "@/types/product";

export function FeaturedProduct({ image, title, price }: ProductPreviewProps) {
  return (
    <div className="w-fit">
      <Image src={image} alt="Camiseta" width={249} height={374} />
      <div className="mt-2">
        <p className="font-light text-xs">{title}</p>
        <p className="font-light text-xs">R$ {price}</p>
      </div>
    </div>
  );
}
