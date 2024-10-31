import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import P1 from "@/assets/images/p1.jpg";
import { Button } from "@/components/ui/button";

const ProductCard = () => {
    // console.log(P1);
    
  return (
    <Card className="overflow-hidden hover:scale-105 transition-all">
      <Image src={P1} alt="product 1" className="w-full" placeholder="blur" blurDataURL={P1.placeholder} />
      <CardFooter className="mt-3 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <CardTitle>Product Name</CardTitle>
          <p className="text-[18px]">15,000 Ks</p>
        </div>
        <div>
          <Button>Add Cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
