"use client"
import React, { createContext, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "I Watch 11",
      category: "smart watch",
      price: 600,
    },
    {
      id: 2,
      product_name: "I Phone X",
      category: "Mobile",
      price: 600,
    },
    {
      id: 3,
      product_name: "I Phone 11",
      category: "Mobile",
      price: 750,
    },
    {
      id: 4,
      product_name: "I Phone 15",
      category: "Mobile",
      price: 900,
    },
    {
      id: 5,
      product_name: "15 Pro Max",
      category: "Mobile",
      price: 999,
    },
  ]);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
