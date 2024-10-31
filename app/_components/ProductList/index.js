import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div>
      <h3 className="text-[20px] font-bold">ProductList</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
