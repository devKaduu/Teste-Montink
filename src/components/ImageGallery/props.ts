export interface ImageGalleryProps {
  images: string[];
  selectedImage: string;
  onSelect: (img: string) => void;
}
