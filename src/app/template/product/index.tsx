"use client";

import { ProductDetails } from "@/app/components/ProductDetails";
import { Button } from "@/app/components/Button";
import ShippingField from "@/app/components/ShippingField";
import { fetchProduct } from "@/app/api/fetchProduct";
import { useEffect, useState } from "react";
import { ProductResponse } from "@/app/api/response";
import Image from "next/image";
import { arraysAreEqual } from "@/app/utils/arrays-equal";
import { Modal } from "@/app/components/Modal";
import { sendResquestProduct } from "@/app/api/sendProduct";

export function ProductTemplate() {
  const [products, setProducts] = useState<ProductResponse>();
  const [selectedVariant, setSelectedVariant] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProduct();

      if (!data) return;

      setProducts(data);
    };

    fetchProducts();
  }, []);

  function handleSelectVariant(variantName: string, indexOption: number) {
    if (!products?.options) return;

    setSelectedVariant((prev) => {
      const copy = [...prev];

      if (copy.includes(variantName) && copy[indexOption] !== variantName) return copy;

      copy[indexOption] = variantName;

      return copy;
    });
  }

  async function handleBuyProduct() {
    if (!products) return;

    const matchedVariant = products?.variants.find((variant) => arraysAreEqual(variant.values, selectedVariant));

    if (matchedVariant && matchedVariant.inventory_quantity <= 0) {
      setIsOpen(true);

      return;
    }

    if (selectedVariant.length === 0 && selectedVariant.length !== products.options.length) return;

    const product = [
      {
        values: selectedVariant,
        quantity: 1,
        product_id: products.id,
        variant_id: matchedVariant ? matchedVariant.id : 0,
        price: matchedVariant ? String(matchedVariant.price) : "0",
      },
    ];

    await sendResquestProduct(product);

    alert(`Produto Comprado -  R$:${matchedVariant?.price} ${matchedVariant?.values}`);
  }

  if (!products) return;

  return (
    <section className="flex justify-center items-center min-h-screen px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-24 w-full max-w-7xl">
        <Image src={products.image_url} alt="Imamge do Produto" width={467} height={538} />

        <div className="border border-gray-300 px-6 py-8 w-full max-w-md">
          <ProductDetails title={products.title} />

          <ShippingField />

          {products.options.map((item, indexOption) => (
            <div className="flex flex-row gap-2" key={indexOption}>
              <div className="mt-5">
                <p key={indexOption}>{item}</p>
                <div className="flex gap-3 items-center w-fit">
                  {products.values[indexOption].map((item, indexVariant) => (
                    <button
                      key={indexVariant}
                      onClick={() => handleSelectVariant(item, indexOption)}
                      className={`px-4 py-1 border rounded-sm cursor-pointer mt-2 ${
                        item === selectedVariant[indexOption]
                          ? "bg-black/80 outline-1 outline-offset-2 outline-black text-white"
                          : "bg-transparent"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Button text="Comprar agora" onClick={handleBuyProduct} />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
