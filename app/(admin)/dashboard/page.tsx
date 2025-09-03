import React from 'react'
import addIcon from '@/components/img/addicon.png'
import ordersIcon from '@/components/img/ordersicon.png'
import messageIcon from '@/components/img/messageicon.png'
import salesIcon from '@/components/img/salesicon.png'
import BarChart from '@/components/img/barchart.png'
import PieChart from '@/components/img/piechart.png'

export default function page() {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between items-stretch gap-2 md:gap-4 lg:gap-5 py-2 md:py-3 lg:py-4">
        <div className="flex-1 min-w-[140px] max-w-[300px] flex flex-col items-center bg-[#FFC06F] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
          <p className="font-bold text-xs md:text-sm lg:text-base text-center">Total Order Today</p>
          <h1 className="font-bold text-lg md:text-xl lg:text-3xl text-center">128</h1>
        </div>
        <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center bg-[#DCFFE3] px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
          <p className="font-bold text-xs md:text-sm lg:text-base text-center">Total Sales</p>
          <h1 className="font-bold text-base md:text-xl lg:text-2xl text-center">₦ 4,079,728</h1>
          <select className="text-xs md:text-sm lg:text-base text-center">
            <option>Today</option>
            <option>Yesterday</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <div className="flex-1 min-w-[140px] max-w-[250px] flex flex-col items-center border border-red-300 px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-lg gap-1 md:gap-2 lg:gap-3">
          <p className="text-[#FF1D08] font-bold text-xs md:text-sm lg:text-base text-center">Low Stock Alerts</p>
          <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#FF0000] text-center">10</h1>
          <p className="text-[#FF6658] text-xs md:text-sm lg:text-base text-center">items under 10 units</p>
        </div>
      </div>
            <div>
              <h1 className='font-bold text-sm md:text-base lg:text-lg'>Quick actions</h1>
              <div className='flex flex-row justify-between w-full gap-3 md:gap-5 lg:gap-7 mt-3 md:mt-4 lg:mt-5'>
                <div className='flex flex-col items-center border border-[#285521] rounded-lg gap-2 px-6 py-10 flex-1'>
                  <img src={addIcon.src} alt="Add Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  <p className='text-[#285521] text-xs md:text-sm lg:text-base px-2 py-1 text-center'>Add Product</p>
                </div>
                <div className='flex flex-col items-center border border-[#FFA32D] rounded-lg gap-2 px-6 py-10 flex-1'>
                  <img src={ordersIcon.src} alt="Add Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  <p className='text-[#FFA32D] text-xs md:text-sm lg:text-base px-2 py-1 text-center'>Orders List</p>
                </div>
                <div className='flex flex-col items-center border border-[#238CAC] rounded-lg gap-2 px-6 py-10 flex-1'>
                  <img src={messageIcon.src} alt="Add Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  <p className='text-[#238CAC] text-xs md:text-sm lg:text-base px-2 py-1 text-center'>Send Messages</p>
                </div>
                <div className='flex flex-col items-center border border-[#1B27CA] rounded-lg gap-2 px-6 py-10 flex-1'>
                  <img src={salesIcon.src} alt="Add Icon" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  <p className='text-[#1B27CA] text-xs md:text-sm lg:text-base px-2 py-1 text-center'>Export Sales Report</p>
                </div>
              </div>
            </div>
      <div className='mt-10 flex flex-col lg:flex-row gap-5 md:gap-7 lg:gap-10'>
        <div className='w-full lg:w-[60%] rounded-lg px-3 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10 border border-[#5B5B5B] mb-6 lg:mb-0'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
            <h1 className='font-bold text-base md:text-lg'>Order Overview</h1>
            <select className='border font-bold border-gray-900 rounded-sm px-2 py-1 text-xs md:text-sm'>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div>
            <img src={BarChart.src} alt="Bar Chart" className='w-full mt-6 md:mt-10' />
          </div>
        </div>
        <div className='w-full lg:w-[40%] flex flex-col items-center bg-[#FFF4E5] rounded-lg px-3 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10'>
          <h1 className='font-bold text-base md:text-lg text-center'>Subscription Overview</h1>
          <div>
            <img src={PieChart.src} alt="Pie Chart" className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mt-6 md:mt-10' />
          </div>
          <div className='flex flex-wrap w-full justify-center items-center gap-2 md:gap-4 mt-6 md:mt-10'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-[#FF6658] rounded-full'></div>
              <p className='font-bold text-xs md:text-sm'>Bronze</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-[#97A0FF] rounded-full'></div>
              <p className='font-bold text-xs md:text-sm'>Silver</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-[#FFC06F] rounded-full'></div>
              <p className='font-bold text-xs md:text-sm'>Gold</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-full px-2 py-3 border border-[#606060] rounded-lg bg-white">
        <div className="flex items-center justify-between pb-2">
          <h2 className="font-bold text-sm md:text-base">Latest Orders</h2>
          <button className="text-[#606060] font-semibold text-xs md:text-sm ml-auto mr-4 md:mr-8">Open all</button>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full py-2">
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Order ID</div>
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Customer ID</div>
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Items</div>
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Amount</div>
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Status</div>
          <div className="flex-1 font-semibold text-xs md:text-sm text-[#606060]">Order type</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full py-2">
          <div className="flex-1 text-xs md:text-sm">MM101</div>
          <div className="flex-1 text-xs md:text-sm">S001</div>
          <div className="flex-1 text-xs md:text-sm">Dettol</div>
          <div className="flex-1 text-xs md:text-sm">4,000</div>
          <div className="flex-1 text-green-500 text-xs md:text-sm">Completed</div>
          <div className="flex-1 text-xs md:text-sm">Online</div>
        </div>
        <div className="flex w-full py-2">
          <div className="flex-1 text-xs md:text-sm">MM102</div>
          <div className="flex-1 text-xs md:text-sm">S002</div>
          <div className="flex-1 text-xs md:text-sm">Milo</div>
          <div className="flex-1 text-xs md:text-sm">2,500</div>
          <div className="flex-1 text-xs md:text-sm">Pending</div>
          <div className="flex-1 text-xs md:text-sm">Walk-in</div>
        </div>
        <div className="flex w-full py-2">
          <div className="flex-1 text-xs md:text-sm">MM103</div>
          <div className="flex-1 text-xs md:text-sm">S003</div>
          <div className="flex-1 text-xs md:text-sm">Indomie</div>
          <div className="flex-1 text-xs md:text-sm">3,200</div>
          <div className="flex-1 text-green-500 text-xs md:text-sm">Completed</div>
          <div className="flex-1 text-xs md:text-sm">Online</div>
        </div>
        <div className="flex w-full py-2">
          <div className="flex-1 text-xs md:text-sm">MM104</div>
          <div className="flex-1 text-xs md:text-sm">S004</div>
          <div className="flex-1 text-xs md:text-sm">Cornflakes</div>
          <div className="flex-1 text-xs md:text-sm">5,000</div>
          <div className="flex-1 text-[#FF1D08] text-xs md:text-sm">Cancelled</div>
          <div className="flex-1 text-xs md:text-sm">Walk-in</div>
        </div>
        <div className="flex w-full py-2">
          <div className="flex-1 text-xs md:text-sm">MM105</div>
          <div className="flex-1 text-xs md:text-sm">S005</div>
          <div className="flex-1 text-xs md:text-sm">Peak Milk</div>
          <div className="flex-1 text-xs md:text-sm">6,800</div>
          <div className="flex-1 text-green-500 text-xs md:text-sm">Completed</div>
          <div className="flex-1 text-xs md:text-sm">Online</div>
        </div>
      </div>
    </div>
  )
}