"use client";
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(10);

  useEffect(() => {
    if (carts.length > 0) {
      const total = carts.reduce(
        (prev, current) => prev + current.totalPrice,
        0
      );
      setTotalPrice(Number(total + shippingFee).toFixed(2));
      setSubTotalPrice(Number(total).toFixed(2));
    } else {
      setTotalPrice(Number(shippingFee).toFixed(2));
      setSubTotalPrice("0.00");
    }
  }, [carts, shippingFee]);

  const addToCart = (product) => {
    const checkProduct = carts.find((pt) => pt.id == product.id);
    if (checkProduct) {
      //   product.quantity += 1;
      const updateProduct = carts.map((c_pt) => {
        if (c_pt.id == checkProduct.id) {
          c_pt.quantity += 1;
          c_pt.totalPrice = c_pt.quantity * c_pt.price;
        }
        return c_pt;
      });
      setCarts([...updateProduct]);
    } else {
      product.quantity = 1;
      product.totalPrice = product.quantity * product.price;
      setCarts([...carts, product]);
    }
    //check...
  };

  const increaseQuantity = (id) => {
    console.log(id);

    const updateCart = carts.map((item) => {
      console.log(item.id == id);
      if (item.id == id) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
      return item;
    });
    setCarts([...updateCart]);
  };

  const decreaseQuantity = (id) => {
    const updateCart = carts.map((item) => {
      console.log(item.id == id);
      if (item.id == id) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
      return item;
    });
    setCarts([...updateCart]);
  };

  const removeProduct = (id) => {
    const removedProduct = carts.filter((item) => item.id != id);
    console.log(removedProduct);

    setCarts([...removedProduct]);
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        subTotalPrice,
        totalPrice,
        shippingFee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
