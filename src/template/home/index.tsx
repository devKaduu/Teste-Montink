import { Products } from "./products";
import { Header } from "@/template/shared/header";

export function HomeTemplate() {
  return (
    <main>
      <Header />
      <Products />
    </main>
  );
}
