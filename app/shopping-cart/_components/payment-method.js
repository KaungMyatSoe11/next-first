import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, PlaySquare } from "lucide-react";
import React from "react";

const PaymentMethod = ({ pMethod, setpMethod }) => {
  return (
    <div>
      <h3 className="text-lg text-slate-500">Payment Method</h3>
      <RadioGroup
        defaultValue={pMethod}
        className="mt-5 space-y-2"
        onValueChange={(value) => setpMethod(value)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="credit-card" id="r2" />
          <div className="flex space-x-2 items-center">
            <CreditCard size={24} />
            <Label htmlFor="r2">Credit Card</Label>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="r3" />
          <div className="flex space-x-2 items-center">
            <PlaySquare size={24} />
            <Label htmlFor="r3">PayPal</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;
