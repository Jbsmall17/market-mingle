import React from 'react'
import BarChart2 from '@/components/img/barchart2.png'
import PieChart2 from '@/components/img/piechart2.png'
import BarChart3 from '@/components/img/barchart3.png'

export default function page() {
  return (
    <div>
       <select className='border p-2 border-gray-900 rounded-lg font-bold text-[#000000] text-[9px] md:text-s lg:text-base mt-10'>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
        <option>Last 6 months</option>
        <option>Last 1 year</option>
       </select>
       <div className="flex flex-row justify-between items-stretch gap-2 md:gap-4 lg:gap-5 py-2 md:py-3 lg:py-4">
        <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center mt-10 border border-[#A1A1A1] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#285521] font-bold text-xs md:text-sm lg:text-base text-center">TOTAL USERS</p>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#285521] text-center">4,000</h1>
            <p className="text-[#FFA32D] text-xs md:text-sm lg:text-base text-center">View details</p>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center mt-10 border border-[#A1A1A1] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#285521] font-bold text-xs md:text-sm lg:text-base text-center">ORDERS</p>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#285521] text-center">1,450</h1>
            <p className="text-[#FFA32D] text-xs md:text-sm lg:text-base text-center">View details</p>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center mt-10 border border-[#A1A1A1] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#285521] font-bold text-xs md:text-sm lg:text-base text-center">REVENUE</p>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#285521] text-center">1,100</h1>
            <p className="text-[#FFA32D] text-xs md:text-sm lg:text-base text-center">View details</p>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center mt-10 border border-[#A1A1A1] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#285521] font-bold text-xs md:text-sm lg:text-base text-center">ACTIVE PLANS</p>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#285521] text-center">1,100</h1>
            <p className="text-[#FFA32D] text-xs md:text-sm lg:text-base text-center">View details</p>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center mt-10 border border-[#A1A1A1] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#285521] font-bold text-xs md:text-sm lg:text-base text-center">OUT STOCK</p>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#285521] text-center">31</h1>
            <p className="text-[#FFA32D] text-xs md:text-sm lg:text-base text-center">View details</p>
          </div>
        </div>
        <div className='mt-10 flex flex-col lg:flex-row gap-5 md:gap-7 lg:gap-10'>
        <div className='w-full lg:w-full rounded-lg px-3 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10 border border-[#5B5B5B] mb-6 lg:mb-0'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
            <h1 className='font-bold text-base md:text-lg'>SALES TREND</h1>
            <select className='border font-bold border-gray-900 rounded-sm px-2 py-1 text-xs md:text-sm'>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div>
            <img src={BarChart2.src} alt="Bar Chart" className='w-full mt-6 md:mt-10' />
          </div>
        </div>
        </div>
        <div className='mt-10 flex flex-col lg:flex-row gap-5 md:gap-7 lg:gap-10'>
        <div className='w-full lg:w-[50%] rounded-lg px-3 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10 border border-[#5B5B5B] mb-6 lg:mb-0'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
            <h1 className='font-bold text-base md:text-lg'>Order breakdown</h1>
            <select className='border font-bold border-gray-900 rounded-sm px-2 py-1 text-xs md:text-sm'>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div>
            <h1 className='text-[#165BAA] text-2xl mt-3'>1,450</h1>
          </div>
          <div>
            <p className='mt-2'>Total Order</p>
          </div>
          <div>
            <img src={PieChart2.src} alt="Bar Chart" className='w-full mt-6 md:mt-10' />
          </div>
        </div>
         <div className='w-full lg:w-[50%] rounded-lg px-3 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10 border border-[#5B5B5B] mb-6 lg:mb-0'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
            <h1 className='font-bold text-base md:text-lg'>SALES TREND</h1>
            <select className='border font-bold border-gray-900 rounded-sm px-2 py-1 text-xs md:text-sm'>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div>
            <img src={BarChart3.src} alt="Bar Chart" className='w-full mt-6 md:mt-12' />
          </div>
        </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold mt-10'>Product Sales</h1>
        </div>
        <div className="mt-8 w-full bg-white overflow-x-auto">
          <div className="flex w-full font-bold text-[10px] md:text-xs lg:text-base text-[#5B5B5B]">
            <div className="flex-1 px-2 py-3">Product</div>
            <div className="flex-1 px-2 py-3">Amount</div>
            <div className="flex-1 px-2 py-3">Category</div>
            <div className="flex-1 px-2 py-3">Number in stock</div>
            <div className="flex-1 px-2 py-3">Action</div>
          </div>
          <div className="border-b border-[#606060] w-full"></div>
              <div className="flex w-full text-[10px] md:text-xs lg:text-base text-black items-center">
                <div className="flex-1 px-2 py-3 font-bold">Indomie<br /><span>#10220</span></div>
                <div className="flex-1 px-2 py-3 font-bold">5,000pts</div>
                <div className="flex-1 px-2 py-3 font-bold">Groceries</div>
                <div className="flex-1 px-2 py-3 font-bold">500</div>
                <div className="flex-1 px-2 py-3 flex gap-3">
                  <span className="text-[#FFA32D] cursor-pointer">Edit</span>
                  <span className="text-[#FFA32D] cursor-pointer">Delete</span>
                </div>
              </div>
          <div className="border-b border-[#606060] w-full"></div>
              <div className="flex w-full text-[10px] md:text-xs lg:text-base text-black items-center">
                <div className="flex-1 px-2 py-3 font-bold">Indomie<br /><span>#10220</span></div>
                <div className="flex-1 px-2 py-3 font-bold">5,000pts</div>
                <div className="flex-1 px-2 py-3 font-bold">Groceries</div>
                <div className="flex-1 px-2 py-3 font-bold">500</div>
                <div className="flex-1 px-2 py-3 flex gap-3">
                  <span className="text-[#FFA32D] cursor-pointer">Edit</span>
                  <span className="text-[#FFA32D] cursor-pointer">Delete</span>
                </div>
              </div>
          <div className="border-b border-[#606060] w-full"></div>
              <div className="flex w-full text-[10px] md:text-xs lg:text-base text-black items-center">
                <div className="flex-1 px-2 py-3 font-bold">Indomie<br /><span>#10220</span></div>
                <div className="flex-1 px-2 py-3 font-bold">5,000pts</div>
                <div className="flex-1 px-2 py-3 font-bold">Groceries</div>
                <div className="flex-1 px-2 py-3 font-bold">500</div>
                <div className="flex-1 px-2 py-3 flex gap-3">
                  <span className="text-[#FFA32D] cursor-pointer">Edit</span>
                  <span className="text-[#FFA32D] cursor-pointer">Delete</span>
                </div>
              </div>
          <div className="border-b border-[#606060] w-full"></div>
              <div className="flex w-full text-[10px] md:text-xs lg:text-base text-black items-center">
                <div className="flex-1 px-2 py-3 font-bold">Indomie<br /><span>#10220</span></div>
                <div className="flex-1 px-2 py-3 font-bold">5,000pts</div>
                <div className="flex-1 px-2 py-3 font-bold">Groceries</div>
                <div className="flex-1 px-2 py-3 font-bold">500</div>
                <div className="flex-1 px-2 py-3 flex gap-3">
                  <span className="text-[#FFA32D] cursor-pointer">Edit</span>
                  <span className="text-[#FFA32D] cursor-pointer">Delete</span>
                </div>
              </div>
        </div>
    </div>
  )
}
