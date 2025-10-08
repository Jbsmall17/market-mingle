"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import Item from "./item";

type shipment = {
  cost : number,
  estimatedDelivery: string,
  estimatedDeliveryTime : string,
  raw : {
    discount: {
      discounted: number
    }
  }
}

type item = {
  productId : "",
  name : "",
  category : "",
  sku: null | "",
  unitPrice: number,
  quantity: number,
  subtotal: number
}

type OrderDetailsType = {
  orderReference : string,
  items: item[],
  shipment: shipment
}

  export default function OrderDetails({order}: {order: OrderDetailsType}) {
  const router = useRouter()

  const handleNavigation = () =>{
    router.push(`/track-order?shipmentOrderId=${order.orderReference}`)
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
          {
            order.items.map((item, idx)=>(
              <Item
                key={idx}
                image="/placeholder.svg"
                name={item.name}
                price={item.subtotal}
                unit_price={item.unitPrice}
              />
            ))
          }
        </div>
        {/* <hr className="border-black" /> */}
        {/* <div className="py-3 md:py-5 lg:py-7 space-y-2">
          <div className="text-base md:text-xl flex justify-between items-center">
            <p className="font-medium">Delivery Fee</p>
            <p className="text-primary">
              ₦{order.shipment.cost.toLocaleString()}
            </p>
          </div>
          <div className="text-base md:text-xl flex justify-between items-center">
            <p className="font-medium">Discount</p>
            <p className="text-primary">
              ₦{order.shipment.raw.discount.discounted.toLocaleString()}
            </p>
          </div>
        </div> */}
        {/* <hr className="border-black" /> */}
        {/* <div className="pt-3 md:pt-5 lg:pt-7 pb-2 md:pb-4 lg:pb-6 text-base md:text-xl flex justify-between items-center">
          <p className="font-medium">Delivery Fee</p>
          <p className="text-primary">
            ₦{order.shipment.cost.toLocaleString()}
          </p>
        </div> */}
        <div className="flex justify-center items-center">
          <Button 
            onClick={handleNavigation}
            className="md:w-[50%] lg:w-[30%] text-base"
          >
            Track Your Order
          </Button>
        </div>
      </div>
    </div>
  );
}
