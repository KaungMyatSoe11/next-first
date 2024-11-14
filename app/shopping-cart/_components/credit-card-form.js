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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const fromSchema = z.object({
  name: z.string().nonempty({message:"Must enter card holder name"}),
  cardNumber: z.string().nonempty({message:"you must enter your card number."}),
});
const CreditCardForm = () => {
  const form = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: { name: "kaung Myat soe", cardNumber: "" },
  });
  const onSubmit = (value) => {
    console.log(value);
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
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button className="w-full">Check Out</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreditCardForm;
