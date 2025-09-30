"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import Item from "./item";

export default function OrderDetails() {
  const router = useRouter()

  const handleNavigation = () =>{
    router.push("/track-order")
  }


  return (
    <div className="space-y-2 md:space-y-3 lg:space-y-4 mx-auto max-w-screen-lg py-3 md:py-4 lg:py-5 px-4 md:px-6 lg:px-8 rounded-xl border border-gray-300 mb-4 md:mb-6 lg:mb-8">
      <p className="text-xl md:text-2xl font-semibold">Order Details</p>
      <div>
        <div className="text-sm md:text-base font-medium flex flex-row items-center justify-between mb-2 md:mb-4">
          <p>Products</p>
          <p>Subtotal</p>
        </div>
        <div className="space-y-2  lg:space-y-3 mb-5 md:mb-6 lg:mb-8 xl:mb-10">
          <Item
            image="/almond-milk.svg"
            name="Almond milk"
            price={30000}
          />
          <Item
            image="/almond-milk.svg"
            name="Almond milk"
            price={30000}
          />
          <Item
            image="/almond-milk.svg"
            name="Almond milk"
            price={30000}
          />
        </div>
        <hr className="border-black" />
        <div className="py-3 md:py-5 lg:py-7 space-y-2">
          <div className="text-base md:text-xl flex justify-between items-center">
            <p className="font-medium">Delivery Fee</p>
            <p className="text-primary">
              ₦{(10000).toLocaleString()}/piece
            </p>
          </div>
          <div className="text-base md:text-xl flex justify-between items-center">
            <p className="font-medium">Coupon Discount</p>
            <p className="text-primary">
              ₦{(25000).toLocaleString()}/piece
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="pt-3 md:pt-5 lg:pt-7 pb-2 md:pb-4 lg:pb-6 text-base md:text-xl flex justify-between items-center">
          <p className="font-medium">Delivery Fee</p>
          <p className="text-primary">
            ₦{(10000).toLocaleString()}/piece
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button 
            onClick={handleNavigation}
            className="md:w-[50%] lg:w-[30%] text-base md:text-xl"
          >
            Track Your Order
          </Button>
        </div>
      </div>
    </div>
  );
}
