import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-6 px-14 w-full">
        <h1 className="text-7xl font-bold italic">WoW</h1>
        <nav className="flex items-center gap-4">
          <Link href="/">Iniciar sessão</Link>
          <Link href="/">Ajuda</Link>
          <Link href="/">Cesto [0]</Link>
        </nav>
      </div>
    </header>
  );
}
