"use client";
import { Button } from "@/components/ui/button";
import { useContextValue } from "@/context/context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import OrderSummary from "./component/order-summary";
import CartItem from "./component/cart-item";

export default function Page() {
  const { cartProduct, setCartProduct } = useContextValue();
  
  const clearCart = () => {
    setCartProduct([])
  }
    const totalItems = cartProduct.reduce((numOfItem, item)=>{
      return item.stock.quantity + numOfItem
    },0)

    const subtotal = cartProduct.reduce((total, item)=>{
      return total + (item.stock.quantity * item.price.selling)
    },0)

  return (
    <div className="main-padding">
      <div className="inner-y-padding">
        <Link href={"/shop"}>
        <Button variant={"outline"}>
          <ArrowLeft className="inline mr-1" />
          <span className="leading-none">shop</span>
        </Button>
        </Link>
        <div>
          <p className="text-3xl font-bold mb-5 text-center">Shopping Cart</p>
          <p className="text-gray-400 text-2xl font-medium text-center">
            Home / Shopping Cart
          </p>
        </div>
        {cartProduct.length > 0 ? (
          <div className="mt-4 md:mt-6 space-y-4">
            {cartProduct.map((cartItem) => (
              <CartItem
                id={cartItem._id}
                key={cartItem._id}
                img={cartItem.image}
                name={cartItem.name}
                price={cartItem.price.selling}
                quantity={cartItem.stock.quantity}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 md:mt-6 min-h-[400px] flex justify-center items-center  border border-primary rounded-md">
            <p className="text-muted-foreground text-xl font-medium">
              No Item in the Cart
            </p>
          </div>
        )}
        <div className="text-end my-2 sm:my-4">
          <span onClick={clearCart} className="text-sm text-black underline hover:no-underline">
            Clear Shopping Cart
          </span>
        </div>
        <div className="mx-auto max-w-screen-lg">
          <div className="p-2 md:p-4 rounded-lg max-w-lg bg-[#eaeaea] rounded-xl flex flex-row justify-between items-center">
            <div className="space-y-4">
              <p className="font-medium text-base">DISCOUNT CODE</p>
              <p className="text-sm">Enter your code</p>
            </div>
            <Button
              variant={"outline"}
              className="bg-transparent border-secondary"
            >
              APPLY
            </Button>
          </div>
        </div>
        <OrderSummary 
          totalItems={totalItems} 
          subtotal={subtotal}
          route={"/cart/checkout"}
        ><></></OrderSummary>
      </div>
    </div>
  );
}
