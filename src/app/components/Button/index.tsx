import { ButtonProps } from "./props";

export function Button({ text }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={text}
      className="mt-6 w-full rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 cursor-pointer"
    >
      {text}
    </button>
  );
}
