"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartContext } from "@/context/CartProvider";
import { FavContext } from "@/context/FavProvider";

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { addFavProduct, favProducts } = useContext(FavContext);
  // cosnt {sdfs}=product
  const handleClick = () => {
    addToCart(product);
  };

  const handleFav = () => {
    addFavProduct(product);
  };
  useEffect(() => {
    const isExist = favProducts.find((pt) => pt.id == product.id);
    isExist && setIsFav(true);
  }, []);
// isFav ? ... : ...;
  return (
    <Card className="overflow-hidden hover:scale-105 transition-all">
      {/* <Image
        src={P1}
        alt="product 1"
        className="w-full"
        placeholder="blur"
        blurDataURL={P1.placeholder}
      /> */}
      <Image
        src={product.thumbnail}
        width={300}
        height={100}
        alt={product.title}
        className="w-full"
      />
      <CardFooter className="mt-3 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <Link href={`/product/${product.id}`}>
            {/* <CardTitle>{product.product_name}</CardTitle> */}
            <CardTitle>{product.title}</CardTitle>
          </Link>
          <p className="text-[18px]">{product.price}$</p>
        </div>
        <div>
          <Button onClick={handleClick}>Add Cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
