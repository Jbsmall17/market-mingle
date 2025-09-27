"use client";
import { Button } from "@/components/ui/button";
import { useContextValue } from "@/context/context";
import { ArrowLeft, Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cartItemType = {
    id: string,
  img: string;
  name: string;
  price: number;
  quantity: number;
};

export default function page() {
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

  const CartItem = ({ img, name, price, quantity, id }: cartItemType) => {

    const decreaseCount = () =>{
        const newQuantity = Math.max(1, quantity - 1)
        setCartProduct((prev)=>{
            return prev.map((product)=> product._id === id ? {...product, stock: { quantity: newQuantity }} : product)
        })
    } 
    const IncreaseProductCount = () =>{
        const newQuantity = quantity + 1
        setCartProduct((prev)=>{
            return prev.map((product)=> product._id === id ? {...product, stock: { quantity: newQuantity }} : product)
        })
    }

    const handleDelete = () =>{
        setCartProduct((prev)=>{
            return prev.filter((product)=> product._id !== id)
        })
    }

    return (
      <div className="mx-auto max-w-screen-lg border border-[#eaeaea] px-3 md:px-5 py-2 md:py-3 lg:py-5 relative rounded-2xl flex flex-row items-center justify-between">
        <div onClick={handleDelete} className="absolute top-2 right-2 size-6 bg-white hover:bg-red-200 rounded-full flex flex-row justify-center items-center">
            <Trash className="text-red-500 size-4" />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="h-auto flex justify-center items-center">
            <Image
              src={img ? img : "/placeholder.svg"}
              alt={`${name}'s image`}
              width={100}
              height={50}
              className="object-cover"
            />
          </div>
          <div className="space-y-1 font-medium">
            <p className="text-base">{name}</p>
            <p className="text-xl text-primary">
              ₦{price.toLocaleString()}NGN/piece
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base">Quantity : {quantity}</p>
          <div className="p-1 flex flex-row justify-between rounded-sm border-2 border-primary">
            <div
                onClick={decreaseCount} 
                className={`size-5 flex justify-center items-center border-2 ${quantity!== 1 ? "border-primary" : "text-[#d0efc2]"} rounded-full`}>
              <Minus className={`size-4 ${quantity !== 1 ? "text-primary" : "text-[#d0efc2]" }`} />
            </div>
            <span className="font-medium leading-none">{quantity}</span>
            <div
                onClick={IncreaseProductCount} 
                className="size-5 flex justify-center items-center border-2 border-primary rounded-full">
              <Plus className="size-4 text-primary fill-current" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="main-padding">
      <div className="pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
        <Link href={"/shop"}>
        <Button variant={"outline"}>
          <ArrowLeft className="inline mr-2" />
          Back to shop
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
        <div className="text-end mt-4">
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
        <div className="space-y-4 max-w-md mx-auto mt-4 md:mt-6 lg:mt-8 border border-[#eaeaea] rounded-md p-3 md:p-5">
          <p className="text-xl font-medium text-center">Order Summary</p>
          <div className="space-y-2">
            <div className="text-base flex flex-row justify-between items-center">
              <p className="text-[#4d4d4d]">Items</p>
              <p className="text-black">{totalItems}</p>
            </div>
            <div className="text-base flex flex-row justify-between items-center">
              <p className="text-[#4d4d4d]">Subtotal</p>
              <p className="text-black">₦{subtotal.toLocaleString()}</p>
            </div>
            <div className="text-base flex flex-row justify-between items-center">
              <p className="text-[#4d4d4d]">Delivery fee</p>
              <p className="text-black">0</p>
            </div>
            <div className="text-base flex flex-row justify-between items-center">
              <p className="text-[#4d4d4d]">Discount</p>
              <p className="text-black">0</p>
            </div>
            <div className="text-base flex flex-row justify-between items-center">
              <p className="text-black font-medium">Total</p>
              <p className="text-primary font-medium">₦{subtotal.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant={"default"} className="w-[200px]">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
