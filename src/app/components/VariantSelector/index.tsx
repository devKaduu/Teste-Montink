import { VariantSelectorProps } from "./props";

export default function VariantSelector({ title, options, selected, onSelect, type = "text" }: VariantSelectorProps) {
  return (
    <div className="mt-8">
      <p className="text-sm font-medium text-zinc-700">{title}</p>

      <div className="flex gap-2 items-center mt-3">
        {options.map((option, i) => (
          <button
            key={i}
            type="button"
            aria-label={type === "color" ? `Selecionar cor ${option}` : `Selecionar ${title} ${option}`}
            onClick={() => onSelect(option)}
            className={`
              ${type === "color" ? "rounded-full" : "rounded-md text-sm font-medium"}
              w-9 h-9 flex items-center justify-center border
            
              ${selected === option ? "outline outline-zinc-700 outline-offset-3" : "border-gray-300"}
              cursor-pointer
            `}
            style={type === "color" ? { backgroundColor: option } : {}}
          >
            {type === "text" && option}
          </button>
        ))}
      </div>

      {type === "text" && (
        <p className="mt-3 text-xs text-zinc-500 tracking-tight">ENCONTRE SEU TAMANHO • GUIA DE MEDIDAS</p>
      )}
    </div>
  );
}
