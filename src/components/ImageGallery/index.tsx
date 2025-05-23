import Image from "next/image";
import { ImageGalleryProps } from "./props";

export function ImageGallery({ images, onSelect, selectedImage }: ImageGalleryProps) {
  return (
    <div className="flex gap-10 flex-col lg:flex-row ">
      <div className="border border-gray-300">
        <Image src={selectedImage} alt="Produto" width={467} height={538} />
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
