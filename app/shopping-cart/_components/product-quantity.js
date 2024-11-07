"use client";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartProvider";
import { Minus, Plus } from "lucide-react";
import React from "react";

const ProductQuantity = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = React.useContext(CartContext);
  const IncreaseHandler = () => {
    increaseQuantity(product.id);
  };
  const DecreaseHandler = () => {
    decreaseQuantity(product.id);
  };
  return (
    <div className="flex col-span-2 gap-3 items-center">
      <Button
        variant="secondary"
        disabled={product.quantity <= 1}
        onClick={DecreaseHandler}
      >
        <Minus size={24} />
      </Button>
      <p>{product.quantity}</p>
      <Button
        variant="secondary"
        onClick={IncreaseHandler}
        disabled={product.quantity >= 10}
      >
        <Plus size={24} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
