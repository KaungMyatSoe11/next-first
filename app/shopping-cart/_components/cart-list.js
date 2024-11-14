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
      <h2 className="text-2xl my-10 font-bold">Shopping Cart.</h2>
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
          <div className="border-b my-4">
            {carts.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <table className="text-end w-fit ms-auto">
            <tbody>
              <tr>
                <td className="text-left pr-12  py-2">Sub Total</td>
                <td className="text-left py-2">${subTotalPrice}</td>
              </tr>
              <tr className="border-b">
                <td className="text-left pr-12 py-2">Shipping Fee</td>
                <td className="text-left py-2">${shippingFee}</td>
              </tr>
              <tr>
                <td className="text-left pr-12 py-2 font-bold">Total</td>
                <td className="text-left py-2 font-bold">${totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartList;
