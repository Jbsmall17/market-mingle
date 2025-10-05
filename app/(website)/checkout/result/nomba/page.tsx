import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import OrderDetails from '../../component/order-details'

export default function page() {
  return (
    <div className='main-padding'>
        <div className='title-container-padding'>
            <p className="title font-bold title-container-margin-bottom text-center">Order Completed</p>
            <p className="text-gray-400 sub-title font-medium text-center">
                Home / Order completed
            </p>
        </div>
        <div className='flex justify-center items-center my-3 md:my-4 lg:my-5'>
            <Image
                src="/Vector.svg"
                alt="vector icon"
                width={100}
                height={125}
            />
        </div>  
        <p className='title font-semibold text-center mb-3 md:mb-5 lg:mb-8'>Your Order is Completed</p>
        <div className='mb-3 md:mb-5 lg:mb-7 p-2 md:p-3 lg:p-4 flex flex-col md:flex-row divide-y-2 md:divide-x-2 md:divide-y-0 divide-[#4d310d] rounded-md bg-secondary max-w-screen-lg mx-auto'>
            <div className='py-2 md:py-0 flex-1 space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Order ID</p>
                <p className='text-base md:text-xl font-semibold'>SKU-3457FGSYT</p>
            </div>
            <div className='py-2 md:py-0 flex-1 space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Transaction ID</p>
                <p className='text-base md:text-xl font-semibold'>TRNS345232</p>
            </div>
            <div className='py-2 md:py-0 flex-[2] space-y-1.5 px-2 md:px-3 lg:px-4'>
                <p className='text-sm md:text-base text-[#4d310d]'>Estimated date of Delivery</p>
                <div className='flex justify-between items-start'>
                    <p className='text-base md:text-xl font-semibold'>29, JULY 2025</p>
                    <Button>Download Invoice</Button>
                </div>
            </div>
        </div>
        <OrderDetails />
    </div>
  )
}
