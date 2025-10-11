"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OrderDetails from '../../component/order-details'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Loader from '@/components/ui/loader2'
import { checkoutObjType } from '../paystack/page'

const baseUrl = process.env.NEXT_PUBLIC_API_URL



export default function Page() {
    const searchParams = useSearchParams()
    // const status = searchParams.get('status')
    const orderRef = searchParams.get('orderRef')
    const [isLoading, setIsLoading] = useState(false)
    const [checkoutObj, setCheckoutObj] = useState<checkoutObjType>({
        orderReference : "",
        transactionId : "",
        status : "processing",
        items : [],
        shipment: {
           cost : 0,
           estimatedDelivery: "",
           estimatedDeliveryTime : "",
           raw : {
            discount: {
                discounted: 0
            }
           },
           trackingUrl: ""
        }
    })
    const getOrderDetails = () =>{
        setIsLoading(true)
        const endpoint = `${baseUrl}/user/grocery-finance/orders/${orderRef}`
        axios.get(endpoint)
        .then((res)=>{
            setCheckoutObj(res.data.data)
        })
        .catch((err)=>{
            console.log(err.response)
            setCheckoutObj({
                orderReference : "",
                transactionId : "",
                status : "processing",
                items : [],
                shipment: {
                    cost : 0,
                    estimatedDelivery: "",
                    estimatedDeliveryTime : "",
                    raw : {
                    discount: {
                        discounted: 0
                    }
                },
                trackingUrl: ""
            }
        })
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }    

    useEffect(()=>{
        getOrderDetails()
    },[])

  return (
    <div className={`main-padding min-h-screen ${isLoading || checkoutObj.orderReference == "" ? "flex justify-center items-center" : ""}`}>
        {
            isLoading || checkoutObj.orderReference == ""
            ?
            <Loader size={8} />
            :
        <>
        <div className='title-container-padding'>
            <p className="title font-bold title-container-margin-bottom text-center">Order</p>
            <p className="text-gray-400 sub-title font-medium text-center">
                Home / Order
            </p>
        </div>
        <div className='flex justify-center items-center my-3 md:my-4 lg:my-5'>
            <Image
                src="/Vector.svg"
                alt="vector icon"
                width={100}
                height={125}
                className='animate-pulse'
            />
        </div>   
        <p className='title font-semibold text-center mb-3 md:mb-5 lg:mb-8 capitalize'>Your Order is {checkoutObj.status}</p>
        <div className='mb-3 md:mb-5 lg:mb-7 p-2 md:p-3 lg:p-4 flex flex-col md:flex-row divide-y-2 md:divide-x-2 md:divide-y-0 divide-[#4d310d] rounded-md bg-secondary max-w-screen-lg mx-auto'>
            <div className='py-2 md:py-0 flex-1 space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Order ID</p>
                <p className='text-base md:text-xl font-semibold uppercase'>{checkoutObj.orderReference}</p>
            </div>
            <div className='py-2 md:py-0 flex-1 space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Transaction ID</p>
                <p className='text-base md:text-xl font-semibold uppercase'>{checkoutObj.transactionId}</p>
            </div>
            <div className='py-2 md:py-0 flex-[2] space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Estimated date of Delivery</p>
                <div className='flex justify-between items-start'>
                    <p className='text-base md:text-xl font-semibold'>{new Date(checkoutObj.shipment.estimatedDeliveryTime).toLocaleDateString()}</p>
                    <Button>Download Invoice</Button>
                </div>
            </div>
        </div>
        <OrderDetails 
            order={checkoutObj}
        />
        </>
        }
    </div>
  )
}
