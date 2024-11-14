"use client";
import React, { useState } from "react";
import PaymentMethod from "./payment-method";
import PayPalForm from "./paypal-form";
import CreditCardForm from "./credit-card-form";

const CheckOutPanel = () => {
  const [pMethod, setPMethod] = useState("credit-card");
  return (
    <div className="flex flex-col space-y-8 bg-slate-100 rounded-md p-5 mt-10">
      <h2 className="text-2xl  font-bold">Payment Info.</h2>
      <PaymentMethod pMethod={pMethod} setpMethod={setPMethod} />

      <div>{pMethod == "paypal" ? <PayPalForm /> : <CreditCardForm />}</div>
    </div>
  );
};

export default CheckOutPanel;
