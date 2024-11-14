"use client"
import React, { createContext, useState } from "react";

export const FavContext = createContext(null);
const FavProvider = ({ children }) => {
  const [favProducts, setFavProducts] = useState([]);
  const addFavProduct = (product) => {
    setFavProducts({ ...favProducts, product });
  };
  return (
    <FavContext.Provider value={{ favProducts, addFavProduct }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
