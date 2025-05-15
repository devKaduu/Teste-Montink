"use client";

import { product } from "@/app/const/product";
import { ProductDetails } from "@/app/components/ProductDetails";
import VariantSelector from "@/app/components/VariantSelector";
import { ImageGallery } from "@/app/components/ImageGallery";
import { Button } from "@/app/components/Button";
import ShippingField from "@/app/components/ShippingField";
import { usePersistedState } from "@/app/hook/usePersistedState";

export function ProductTemplate() {
  const [mainImage, setMainImage] = usePersistedState("mainImage", product.images[0]);
  const [selectedSize, setSelectedSize] = usePersistedState("selectedSize", "");
  const [selectedColor, setSelectedColor] = usePersistedState("selectedColor", product.variants.color[0]);

  return (
    <section className="flex justify-center items-center min-h-screen px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-24 w-full max-w-7xl">
        <ImageGallery images={product.images} selectedImage={mainImage} onSelect={setMainImage} />

        <div className="border border-gray-300 px-6 py-8 w-full max-w-md">
          <ProductDetails product={product} />

          <ShippingField />

          <VariantSelector
            title="Cor:"
            options={product.variants.color}
            selected={selectedColor}
            onSelect={setSelectedColor}
            type="color"
          />

          <VariantSelector
            title="Tamanho:"
            options={product.variants.size}
            selected={selectedSize}
            onSelect={setSelectedSize}
            type="text"
          />

          <Button text="Comprar agora" />
        </div>
      </div>
    </section>
  );
}
