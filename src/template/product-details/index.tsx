"use client";

import { Button } from "@/components/Button";
import { ImageGallery } from "@/components/ImageGallery";
import { ProductDetails } from "@/components/ProductDetails";
import ShippingField from "@/components/ShippingField";
import VariantSelector from "@/components/VariantSelector";
import { usePersistedState } from "@/hook/usePersistedState";
import { Product } from "@/types/product";
import { Header } from "@/template/shared/header";
import { useCart } from "@/context/CartContext";

export function ProductDetailsTemplate({ product }: { product: Product }) {
  const [mainImage, setMainImage] = usePersistedState("mainImage", product.images[0]);
  const [selectedSize, setSelectedSize] = usePersistedState("selectedSize", "");
  const [selectedColor, setSelectedColor] = usePersistedState("selectedColor", product.variants.color?.[0] || "");

  const { addToCart } = useCart();

  function handleAddToCart() {
    if (selectedSize) {
      addToCart({
        ...product,
        title: product.title,
        price: product.price,
        shipping: product.shipping,
        description: product.description,
        images: product.images,
      });
    } else {
      alert("Selecione um tamanho antes de adicionar ao carrinho.");
    }
  }

  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center  mt-2.5">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-center lg:gap-24 w-full max-w-7xl">
          <ImageGallery images={product.images} selectedImage={mainImage} onSelect={setMainImage} />

          <div className="border border-gray-300 px-6 py-8 w-full max-w-md">
            <ProductDetails product={product} />

            <ShippingField />

            {selectedColor && (
              <VariantSelector
                title="Cor:"
                options={product.variants.color || []}
                selected={selectedColor}
                onSelect={setSelectedColor}
                type="color"
              />
            )}

            <VariantSelector
              title="Tamanho:"
              options={product.variants.size}
              selected={selectedSize}
              onSelect={setSelectedSize}
              type="text"
            />

            <Button text="Comprar agora" onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </main>
  );
}
