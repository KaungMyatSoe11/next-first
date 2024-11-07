import { Cross, X } from "lucide-react";
import React from "react";
import ProductQuantity from "./product-quantity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartProvider";

const CartItem = ({ product }) => {
  const { removeProduct } = React.useContext(CartContext);
  const RemoveHandler = () => removeProduct(product.id);
  return (
    <div className="grid grid-cols-8 my-3 gap-3 items-center">
      <div className="flex gap-2 col-span-4">
        <div>
          <Image
            src={product.thumbnail}
            width={50}
            height={100}
            className="w-full  border rounded-sm"
            alt={product.title}
          />
        </div>
        <div>
          <p>{product.title}</p>
          <p className="text-slate-400 text-sm">{product.brand}</p>
        </div>
      </div>
      <ProductQuantity product={product} />
      <div>{product.totalPrice}</div>
      <div>
        <Button variant="ghost" onClick={RemoveHandler}>
          <X size={24} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
