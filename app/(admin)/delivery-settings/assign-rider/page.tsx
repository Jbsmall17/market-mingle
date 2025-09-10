import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-center font-bold mt-5 text-xl'>Assign Rider to Order</h1>
      <div className="w-full mt-8 flex flex-col gap-6">
        <div className="w-full bg-[#F0F0F0] rounded-lg p-4">
          <div className="flex flex-row items-center gap-2 mb-1">
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#000]">#ONL-120001</span>
            <span className="text-xs md:text-sm lg:text-base text-[#000]">| 9:45am</span>
            <span className="text-xs md:text-sm lg:text-base font-bold" style={{ color: "#FF6658" }}>| pending</span>
          </div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-[#000] mb-1">Chioma Olojo Musa</div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] sm:text-sm md:text-md lg:text-base text-[#000]">12, adams babs Street, Victoria Island, Lagos</span>
             <span className="text-[9px] sm:text-sm md:text-md lg:text-base text-[#000]">Delivery Note:  Call before coming for the delivery</span>
          </div>
        </div>
      </div>
    </div>
  )
}