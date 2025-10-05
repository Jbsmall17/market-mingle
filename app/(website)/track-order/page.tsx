/*eslint-disable @typescript-eslint/no-explicit-any*/
import React from 'react'
import Item from '../checkout/component/item'


const baseUrl = process.env.NEXT_PUBLIC_API_URL
export default async function page({searchParams}: {searchParams : any}) {
    const {shipmentOrderId} = await searchParams
    // console.log(shipmentOrderId)
    // const trackShipmentDetails = () => {
    //     const endpoint = `${baseUrl}/user/grocery-finace/trackGuestShipment/${shipmentOrderId}`
    // }
    try{
        const endpoint = `${baseUrl}/user/grocery-finace/trackGuestShipment/${shipmentOrderId}`

        const response = await fetch(endpoint,{cache : 'no-cache'})
        if(!response.ok){
            throw new Error("Failed to fetch Track records")
        }
        const trackResponse  = await response.json() 
        console.log(trackResponse)
    }catch(err){
        console.log(err)
    }
  return (
    <div className='main-padding'>
        <div className='title-container-padding'>
            <p className="title font-bold title-container-margin-bottom text-center">
                Track Your Order
            </p>
            <p className="text-gray-400 sub-title font-medium text-center">
                Home / Track Your Order
            </p>
        </div>
        <div className='space-y-2 my-4 md:my-6 max-w-screen-lg mx-auto'>
            <p className='text-base md:text-xl lg:text-2xl font-medium'>Order Status</p>
            <p className='text-sm md:text-base lg:text-xl'>Order ID: <span className='font-medium'>SKU-3457FGSTY</span></p>
        </div>
        <div className='max-w-screen-lg mx-auto space-y-4 mb-3 md:mb-5 lg:mb-7'>
            <div className='p-2 md:p-3 pb-5 md:pb-7 rounded-md border border-gray-300'>
                <div className='mb-8 sm:mb-12 lg:mb-16 text-black text-sm font-medium sm:text-base flex flex-row justify-between items-start'>
                    <p>
                        Date purchased<br />
                        Fri, Nov 9, 2024
                    </p>
                    <p>
                        31, Fashoro lane, off Animashaun <br />
                        Aguda, Surulere, Lagos State,<br />
                        <span className='text-gray-400'>02:30pm</span>

                    </p>
                </div>
                <div className='relative w-full h-1.5 bg-primary'>
                    <div className='absolute left-[25%] -translate-x-[50%] translate-y-[8px] bottom-0 flex flex-col items-center gap-2.5 font-medium'>
                        <p>Pending</p>
                        <div className='size-6 bg-primary text-white text-sm leading-none rounded-full flex justify-center items-center'>1</div>
                    </div>
                    <div className='absolute left-[50%] -translate-x-[50%] translate-y-[8px] bottom-0 flex flex-col items-center gap-2.5 font-medium'>
                        <p>Processing</p>
                        <div className='size-6 bg-primary text-white text-sm leading-none rounded-full flex justify-center items-center'>2</div>
                    </div>
                    <div className='absolute left-[75%] -translate-x-[50%] translate-y-[8px] bottom-0 flex flex-col items-center gap-2.5 font-medium'>
                        <p>Shipped</p>
                        <div className='size-6 bg-primary text-white text-sm leading-none rounded-full flex justify-center items-center'>3</div>
                    </div>
                </div>
            </div>
            <div className='space-y-4 py-3 md:py-4 lg:py-5 px-3 md:px-6 border border-gray-400 rounded-md'>
                <p className='text-base md:text-xl font-medium'>Products </p>
                <div className='space-y-2 md:space-y-3'>
                    <Item
                        image="/almond-milk.svg"
                        name="Almond milk"
                        price={30000}
                        unit_price={1000}
                    />
                    <Item
                        image="/almond-milk.svg"
                        name="Almond milk"
                        price={30000}
                        unit_price={1000}
                    />
                </div>

            </div>
        </div>
    </div>
  )
}
