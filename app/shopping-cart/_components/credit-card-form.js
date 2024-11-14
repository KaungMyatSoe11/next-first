"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartProvider";
import { useToast } from "@/hooks/use-toast";

const fromSchema = z.object({
  name: z.string().nonempty({ message: "Must enter card holder name" }),
  cardNumber: z.string().nonempty({ message: "Must enter card holder name" }),
});

const CreditCardForm = () => {
  const { toast } = useToast();

  const { carts,clearCarts } = useContext(CartContext);
  const form = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: "kaung Myat soe",
      cardNumber: "3888 3883 3838 3838",
    },
    disabled: carts.length <= 0,
  });
  const onSubmit = (value) => {
    console.log(value);
    //api ordering
    // toast()
    toast({ description: "Successfully Checkout!" });
    clearCarts()
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name On Card</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      value={form.getValues("cardNumber")}
                      onChange={(e) => {
                        let formatNum = "";
                        // if (e.target.value.length < 19) {
                        for (let i = 0; i < e.target.value.length; i++) {
                          if (i > 0 && i % 4 == 0) {
                            formatNum += " ";
                          }
                          formatNum += e.target.value[i].toString();
                          form.setValue("cardNumber", formatNum);
                        }
                        console.log("change card no", formatNum);
                      }}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
            className="w-full disabled:cursor-not-allowed"
            disabled={carts.length == 0}
          >
            Check Out
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreditCardForm;
