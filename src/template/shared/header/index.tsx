"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export function Header() {
  const { cart } = useCart();

  return (
    <header>
      <div className="flex flex-row justify-between items-center py-6 px-14 w-full">
        <h1 className="text-7xl font-bold italic">WoW</h1>
        <nav className="flex items-center gap-4">
          <Link href="/">Iniciar sessão</Link>
          <Link href="/">Ajuda</Link>
          <Link href="/cart">Cesto {`[${cart.length}]`}</Link>
        </nav>
      </div>
    </header>
  );
}
