import React from "react";
import CartList from "./_components/cart-list";
import CheckOutPanel from "./_components/check-out-panel";

const ShoppingCartPage = () => {
  return (
    <div className="grid grid-cols-3">
      <CartList />
      <CheckOutPanel />
    </div>
  );
};

export default ShoppingCartPage;
