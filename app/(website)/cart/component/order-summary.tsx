import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type orderSummaryType = {
  totalItems: number, 
  subtotal: number, 
  deliveryFee?: number,
  discount?: number
  route?: string, 
  children: React.ReactNode
}

export default function OrderSummary({totalItems,deliveryFee, discount, subtotal, route,children}: orderSummaryType) {
    const router = useRouter()

    const handleNavigation = (route : string) => {
        router.push(route)
    }

    return (
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
          <p className="text-black">{deliveryFee ? `₦${deliveryFee.toLocaleString()}` : `NIL`}</p>
        </div>
        <div className="text-base flex flex-row justify-between items-center">
          <p className="text-[#4d4d4d]">Discount</p>
          <p className="text-black">{discount ? `₦${discount.toLocaleString()}` : `NIL`}</p>
        </div>
        <div className="text-base flex flex-row justify-between items-center">
          <p className="text-black font-medium">Total</p>
          <p className="text-primary font-medium">
            ₦{
            deliveryFee
            ?
            (subtotal + deliveryFee).toLocaleString()
            : subtotal.toLocaleString()  
          }
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {
            route
            &&
            <Button 
                onClick={() => handleNavigation(route)} 
                variant={"default"} className="w-[200px]">
                Checkout
            </Button>
        }
        {children}
      </div>
    </div>
  );
}
