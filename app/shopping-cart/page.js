"use client";
import { CartContext } from "@/context/CartProvider";
import React, { useContext } from "react";

const ShoppingCartPage = () => {
  const { carts } = useContext(CartContext);
  return (
    <div>
      <h1>ShoppingCartPage</h1>
      {carts.map((product) => (
        <li key={product.id}>
          {product.title} / {product.quantity}
        </li>
      ))}
    </div>
  );
};

export default ShoppingCartPage;
