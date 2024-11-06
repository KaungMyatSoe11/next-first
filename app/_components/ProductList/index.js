"use client";
import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "@/context/ProductProvider";
import { useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  // const data={
  //   data:[],
  //   current:0,
  //   totalPage:10,
  // }

  // {products:[]}
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  const arr = new Array(20);

  return (
    <div>
      <h3 className="text-[20px] font-bold">ProductList</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => (
              <Skeleton key={index} className="w-full h-[300px]" />
            ))
          : data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductList;
