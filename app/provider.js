"use client";
import CartProvider from "@/context/CartProvider";
import FavProvider from "@/context/FavProvider";
import ProductProvider from "@/context/ProductProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <CartProvider>
          <FavProvider>{children}</FavProvider>
        </CartProvider>
      </ProductProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
