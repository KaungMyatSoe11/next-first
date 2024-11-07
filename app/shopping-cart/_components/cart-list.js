"use client";
import { CartContext } from "@/context/CartProvider";
import React from "react";
import CartItem from "./cart-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartList = () => {
  const { carts, subTotalPrice, totalPrice, shippingFee } = React.useContext(
    CartContext
  );
  console.log(subTotalPrice, totalPrice, shippingFee);

  return (
    <div className="col-span-2">
      <h2 className="text-lg my-10 font-bold">Shopping Cart.</h2>
      {carts.length <= 0 ? (
        <Link href="/">
          <Button>Go To Shopping</Button>
        </Link>
      ) : (
        <div>
          <div className="grid grid-cols-8">
            <span className="col-span-4">Product</span>
            <span className="col-span-2">Quantity</span>
            <span>Total Price</span>
          </div>
          <div className="border-b ">
            {carts.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          {/* <div className="text-end">
            <div>
              <span className="font-bold text-lg">Sub Total :</span>
              <span className="font-bold">${subTotalPrice}</span>
            </div>
            <div>
              <span className="font-bold text-lg">Shipping Fee :</span>
              <span className="font-bold">${shippingFee}</span>
            </div>
            <div>
              <span className="font-bold text-lg">Total :</span>
              <span className="font-bold">${totalPrice}</span>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CartList;
