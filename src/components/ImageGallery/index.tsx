import Image from "next/image";
import { ImageGalleryProps } from "./props";
import { useRef, useState } from "react";

export function ImageGallery({ images, onSelect, selectedImage }: ImageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [transformOrigin, setTransformOrigin] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = ((e.clientX - rect?.left) / rect?.width) * 100;
    const y = ((e.clientY - rect?.top) / rect?.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  }

  return (
    <div className="flex gap-10 flex-col lg:flex-row ">
      <div className="border border-gray-300">
        <div
          onMouseMove={(e) => {
            handleMouseMove(e);
            setIsZoomed(true);
          }}
          ref={containerRef}
          onMouseLeave={() => {
            setIsZoomed(false);
          }}
          className="w-[467px] h-[700px] bg-no-repeat overflow-hidden transition duration-200 cursor-zoom-in"
        >
          <Image
            src={selectedImage}
            alt={"Imagen seleccionada"}
            width={467}
            height={538}
            className={`transition-transform duration-1000 ease-in-out delay-150 ${
              isZoomed ? "scale-200" : "scale-100"
            }`}
            style={{
              transformOrigin: isZoomed ? transformOrigin : transformOrigin,
            }}
          />
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-center flex-wrap lg:flex-col lg:justify-start items-center">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Miniatura ${i}`}
            onClick={() => onSelect(img)}
            className={`cursor-pointer object-cover border border-gray-300 ${
              selectedImage === img ? "opacity-100" : "opacity-40"
            }`}
            width={64}
            height={78}
          />
        ))}
      </div>
    </div>
  );
}
