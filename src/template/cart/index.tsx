"use client";

import { useCart } from "@/context/CartContext";

export function CartTemplate() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.title}>
              {item.title} - {item.quantity}x<button onClick={() => removeFromCart(item.title)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
}
