import React from "react";
import CartButton from "./CartButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-600 text-white py-5">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <Link href={"/"}>Logo</Link>
          <div className="flex gap-5">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
