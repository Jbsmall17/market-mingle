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
      <h1 className='font-bold mt-5 text-xl'>Available Riders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {/* Profile Card 1 - Available */}
        <div className="flex flex-col border border-[#FFA32D] bg-[#DCFFE1A8] rounded-lg gap-2 p-8" style={{ minHeight: '170px' }}>
          <div className="flex flex-row items-center w-full mb-2 gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
            <span className="font-bold text-[15px] sm:text-xs md:text-sm lg:text-xl text-[#000]">Yusuf Bayo</span>
          </div>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Phone number: 0803400012</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Last delivery: Surulere</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base font-bold mb-1" style={{ color: "#299438" }}>Status: Available</span>
          <button className="border border-[#FFA32D] bg-[#DCFFE1A8] text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] font-semibold rounded px-4 py-2 mt-2 mb-2 w-[70%] mx-auto flex items-center justify-center whitespace-nowrap cursor-pointer">
            View ride history
          </button>
          <button className="bg-[#FFA32D] text-black font-bold text-[12px] sm:text-xs md:text-sm lg:text-base rounded px-4 py-2 w-[70%] mx-auto block cursor-pointer">Assign order</button>
        </div>
        {/* Profile Card 2 - 2 rides ongoing */}
        <div className="flex flex-col border border-[#FFA32D] bg-[#DCFFE1A8] rounded-lg gap-2 p-8" style={{ minHeight: '170px' }}>
          <div className="flex flex-row items-center w-full mb-2 gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
            <span className="font-bold text-[15px] sm:text-xs md:text-sm lg:text-lg text-[#000]">Chinedu Okafor</span>
          </div>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Phone number: 0803400023</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Last delivery: Yaba</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base font-bold mb-1" style={{ color: "#FF0000" }}>Status: 2 rides ongoing</span>
          <button className="border border-[#FFA32D] bg-[#DCFFE1A8] text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] font-semibold rounded px-4 py-2 mt-2 mb-2 w-[70%] mx-auto flex items-center justify-center whitespace-nowrap cursor-pointer">
            View ride history
          </button>
          <button className="bg-[#FFA32D] text-black font-bold text-[12px] sm:text-xs md:text-sm lg:text-base rounded px-4 py-2 w-[70%] mx-auto block cursor-pointer">Assign order</button>
        </div>
        {/* Profile Card 3 - 1 ride ongoing */}
        <div className="flex flex-col border border-[#FFA32D] bg-[#DCFFE1A8] rounded-lg gap-2 p-8" style={{ minHeight: '170px' }}>
          <div className="flex flex-row items-center w-full mb-2 gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
            <span className="font-bold text-[15px] sm:text-xs md:text-sm lg:text-lg text-[#000]">Fatima Yusuf</span>
          </div>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Phone number: 0803400034</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Last delivery: Lekki</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base font-bold mb-1" style={{ color: "#FF6658" }}>Status: 1 ride ongoing</span>
          <button className="border border-[#FFA32D] bg-[#DCFFE1A8] text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] font-semibold rounded px-4 py-2 mt-2 mb-2 w-[70%] mx-auto flex items-center justify-center whitespace-nowrap cursor-pointer">
            View ride history
          </button>
          <button className="bg-[#FFA32D] text-black text-[12px] sm:text-xs md:text-sm lg:text-base font-bold rounded px-4 py-2 w-[70%] mx-auto block cursor-pointer">Assign order</button>
        </div>
        {/* Profile Card 4 - Available */}
        <div className="flex flex-col border border-[#FFA32D] bg-[#DCFFE1A8] rounded-lg gap-2 p-8" style={{ minHeight: '170px' }}>
          <div className="flex flex-row items-center w-full mb-2 gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
            <span className="font-bold text-[15px] sm:text-xs md:text-sm lg:text-lg text-[#000]">Bola Ajayi</span>
          </div>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Phone number: 0803400045</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] mb-1">Last delivery: Ikeja</span>
          <span className="text-[12px] sm:text-xs md:text-sm lg:text-base font-bold mb-1" style={{ color: "#299438" }}>Status: Available</span>
          <button className="border border-[#FFA32D] bg-[#DCFFE1A8] text-[12px] sm:text-xs md:text-sm lg:text-base text-[#000] font-semibold rounded px-4 py-2 mt-2 mb-2 w-[70%] mx-auto flex items-center justify-center whitespace-nowrap cursor-pointer">
            View ride history
          </button>
          <button className="bg-[#FFA32D] text-[12px] sm:text-xs md:text-sm lg:text-base text-black font-bold rounded px-4 py-2 w-[70%] mx-auto block cursor-pointer">Assign order</button>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-8 px-2 md:px-8 lg:px-12">
        <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap cursor-pointer">&lt; Back</button>
        <span className="font-bold text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">1 of 20</span>
        <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap cursor-pointer">Next &gt;</button>
      </div>
    </div>
  )
}