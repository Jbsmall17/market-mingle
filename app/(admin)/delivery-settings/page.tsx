import React from 'react'
import searchIcon from '@/components/img/searchicon.png'

export default function page() {
  return (
    <div>
      <p className='text-center font-bold text-[#000000] text-[12px] sm:text-xs md:text-sm lg:text-base mt-5'>All Deliveries are for online orders</p>
      <div className='flex justify-center items-center mt-8 mb-4'>
        <div className="relative w-full md:w-2/3 lg:w-[60%] mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <img src={searchIcon.src} alt="Search Icon" className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search by order ID, customer name or phone number"
            className=" bg-[#F0F0F0] text-center text-[#000000] font-bold rounded-md px-10 py-3 w-full text-xs sm:text-sm md:text-base lg:text-lg placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
            style={{ textAlign: 'center' }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-2 md:gap-4 lg:gap-6 px-2 md:px-8 lg:px-12 w-full">
        <span className="font-bold text-black text-xs md:text-sm lg:text-base">Filter</span>
        <button className="bg-[#FFA32D] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">All</button>
        <button className="border border-[#A1A1A1] bg-[#F0F0F0] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">Pending</button>
        <select className="border border-[#A1A1A1] bg-[#F0F0F0] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
        <button className="border border-[#A1A1A1] bg-[#F0F0F0] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">Delivered</button>
        <button className="border border-[#A1A1A1] bg-[#F0F0F0] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">Cancelled</button>
      </div>
      <div className="w-full mt-8 flex flex-col gap-6">
        {/* Pending */}
        <div className="w-full bg-[#F0F0F0] rounded-lg p-4">
          <div className="flex flex-row items-center gap-2 mb-1">
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#000]">#ONL-120001</span>
            <span className="text-xs md:text-sm lg:text-base text-[#000]">| 9:45am</span>
            <span className="text-xs md:text-sm lg:text-base font-bold" style={{ color: "#FF6658" }}>| pending</span>
          </div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-[#000] mb-1">Chioma Olojo Musa</div>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs md:text-sm lg:text-base text-[#000]">12, adams babs Street, Victoria Island, Lagos</span>
            <button className="bg-[#FFA32D] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">Assign rider</button>
          </div>
        </div>
        {/* Delivered */}
        <div className="w-full bg-[#F0F0F0] rounded-lg p-4">
          <div className="flex flex-row items-center gap-2 mb-1">
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#000]">#ONL-120002</span>
            <span className="text-xs md:text-sm lg:text-base text-[#000]">| 10:15am</span>
            <span className="text-xs md:text-sm lg:text-base font-bold" style={{ color: "#299438" }}>| Delivered</span>
          </div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-[#000] mb-1">Emeka Okoro</div>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs md:text-sm lg:text-base text-[#000]">22, Allen Avenue, Ikeja, Lagos</span>
            <button className="bg-[#FFA32D] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">See Details</button>
          </div>
        </div>
        {/* Cancelled */}
        <div className="w-full bg-[#F0F0F0] rounded-lg p-4">
          <div className="flex flex-row items-center gap-2 mb-1">
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#000]">#ONL-120004</span>
            <span className="text-xs md:text-sm lg:text-base text-[#000]">| 12:30pm</span>
            <span className="text-xs md:text-sm lg:text-base font-bold" style={{ color: "#FF0000" }}>| Cancelled</span>
          </div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-[#000] mb-1">Bola Ajayi</div>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs md:text-sm lg:text-base text-[#000]">18, Broad Street, Lagos Island, Lagos</span>
            <button className="bg-[#FFA32D] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">See Details</button>
          </div>
        </div>
        {/* Delivered */}
        <div className="w-full bg-[#F0F0F0] rounded-lg p-4">
          <div className="flex flex-row items-center gap-2 mb-1">
            <span className="font-bold text-xs md:text-sm lg:text-base text-[#000]">#ONL-120003</span>
            <span className="text-xs md:text-sm lg:text-base text-[#000]">| 11:00am</span>
            <span className="text-xs md:text-sm lg:text-base font-bold" style={{ color: "#299438" }}>| Delivered</span>
          </div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-[#000] mb-1">Fatima Yusuf</div>
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs md:text-sm lg:text-base text-[#000]">5, Marina Road, Lagos Island, Lagos</span>
            <button className="bg-[#FFA32D] text-black font-bold rounded px-4 py-2 text-xs md:text-sm lg:text-base cursor-pointer">See Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
