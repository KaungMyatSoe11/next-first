"use client"
import { Badge } from "@/components/ui/badge";
import { CartContext } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const CartButton = () => {
  const { carts } = useContext(CartContext);

  const router=useRouter()
  const handleClick=()=>{
    router.push("/shopping-cart")
  }

  return (
    <div className="relative" onClick={handleClick}>
      <Badge variant="destructive" className="absolute bottom-[70%] left-[70%]">{carts.length}</Badge>
      <ShoppingCart size={26} />
    </div>
  );
};

export default CartButton;
