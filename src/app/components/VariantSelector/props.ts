export interface VariantSelectorProps {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  type?: "color" | "text";
}
