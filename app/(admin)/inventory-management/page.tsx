import React from 'react'
import searchIcon from '@/components/img/searchicon.png'
import addIcon from '@/components/img/add2.png'
export default function page() {
  return (
    <div>
      <div className='flex justify-center items-center mt-8 mb-4'>
        <div className="relative w-full md:w-2/3 lg:w-[60%] mb-4">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <img src={searchIcon.src} alt="Search Icon" className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search products, name, category or SKU"
            className="border border-gray-900 text-center text-[#000000] font-bold rounded-md px-10 py-3 w-full text-xs sm:text-sm md:text-base lg:text-lg placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
            style={{ textAlign: 'center' }}
          />
        </div>
      </div>
      <div className='flex justify-between items-center px-4 md:px-8 lg:px-12'>
        <h1 className='font-bold text-2xl'>Inventory</h1>
        <div className='flex flex-col items-center bg-[#285521] gap-2 px-6 py-2 rounded-xs'>
          <img src={addIcon.src} alt="Add Icon" className="w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4" />
          <p className='text-white text-xs md:text-sm lg:text-sm'>Add Product</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center px-2 md:px-8 lg:px-12 mt-6 gap-2 md:gap-4 lg:gap-8'>
        <div className='flex flex-col items-center gap-2 border border-[#285521] rounded-sm px-6 py-4 min-w-[100px] lg:min-w-[220px] lg:px-12 lg:py-8 lg:gap-4 lg:rounded-md bg-white'>
          <h1 className='font-bold text-base md:text-xl lg:text-2xl text-[#285521]'>120</h1>
          <p className='text-[#285521] text-[10px] md:text-xs lg:text-base text-center'>Total products</p>
        </div>
        <div className='flex flex-col items-center gap-2 border border-[#285521] rounded-sm px-6 py-4 min-w-[100px] lg:min-w-[220px] lg:px-12 lg:py-8 lg:gap-4 lg:rounded-md bg-white'>
          <h1 className='font-bold text-base md:text-xl lg:text-2xl text-[#285521]'>7</h1>
          <p className='text-[#285521] text-[10px] md:text-xs lg:text-base text-center'>Low stock items</p>
        </div>
        <div className='flex flex-col items-center gap-2 border border-[#285521] rounded-sm px-6 py-4 min-w-[100px] lg:min-w-[220px] lg:px-12 lg:py-8 lg:gap-4 lg:rounded-md bg-white'>
          <h1 className='font-bold text-base md:text-xl lg:text-2xl text-[#285521]'>3</h1>
          <p className='text-[#285521] text-[10px] md:text-xs lg:text-base text-center'>Out of stock</p>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='font-bold text-xs md:text-base lg:text-lg px-2 md:px-8 lg:px-12'>Product list</h1>
        <div className='mt-5 flex flex-row items-center px-2 md:px-8 lg:px-12 gap-2 md:gap-4 lg:gap-6'>
          <p className='text-[#285521] text-[8px] sm:text-[9px] md:text-xs lg:text-sm whitespace-nowrap'>Filter by category</p>
          <div className='flex flex-row gap-2 md:gap-4 lg:gap-6 px-0 py-2 w-full'>
            <div className='bg-[#285521] text-white rounded-sm px-4 py-1 w-full text-center text-[9px] md:text-xs lg:text-base flex items-center justify-center'>
              <p>All</p>
            </div>
            <div className='text-[#285521] border border-[#285521] rounded-sm px-4 py-1 w-full text-center text-[9px] md:text-xs lg:text-base flex items-center justify-center'>
              <p>In stock</p>
            </div>
            <div className='text-[#285521] border border-[#285521] rounded-sm px-4 py-1 w-full text-center text-[9px] md:text-xs lg:text-base flex items-center justify-center'>
              <p>Low stock items</p>
            </div>
            <div className='text-[#285521] border border-[#285521] rounded-sm px-4 py-1 w-full text-center text-[9px] md:text-xs lg:text-base flex items-center justify-center'>
              <p>Out of stock</p>
            </div>
          </div>
        </div>
      </div>
<div className="mt-10 w-full border border-[#606060] rounded-lg bg-white overflow-x-auto">
  {/* Table Header */}
  <div className="flex w-full font-bold text-[8px] sm:text-[9px] md:text-xs lg:text-base text-[#606060]">
    <div className="flex-1 px-1 py-2 whitespace-nowrap">Stock Keeping Unit</div>
    <div className="flex-1 px-1 py-2 whitespace-nowrap">Product name</div>
    <div className="flex-1 px-1 py-2 whitespace-nowrap">Units in stock</div>
    <div className="flex-1 px-1 py-2 whitespace-nowrap">Unit cost</div>
    <div className="flex-1 px-1 py-2 whitespace-nowrap">Condition</div>
  </div>
  <div className="border-b border-[#606060] w-full"></div>
  {/* Table Data */}
  <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
    <div className="flex-1 px-1 py-2">MM101</div>
    <div className="flex-1 px-1 py-2">Dettol</div>
    <div className="flex-1 px-1 py-2">50pcs</div>
    <div className="flex-1 px-1 py-2">12,000pts</div>
    <div className="flex-1 px-1 py-2 text-[#299438]">In stock</div>
  </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM102</div>
          <div className="flex-1 px-1 py-2">Milo</div>
          <div className="flex-1 px-1 py-2">30pcs</div>
          <div className="flex-1 px-1 py-2">8,500pts</div>
          <div className="flex-1 px-1 py-2 text-[#299438]">In stock</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM103</div>
          <div className="flex-1 px-1 py-2">Indomie</div>
          <div className="flex-1 px-1 py-2">15pcs</div>
          <div className="flex-1 px-1 py-2">4,200pts</div>
          <div className="flex-1 px-1 py-2 text-[#FF0000]">Low stock</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM104</div>
          <div className="flex-1 px-1 py-2">Cornflakes</div>
          <div className="flex-1 px-1 py-2">0pcs</div>
          <div className="flex-1 px-1 py-2">5,000pts</div>
          <div className="flex-1 px-1 py-2 font-bold">Out of stock</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM105</div>
          <div className="flex-1 px-1 py-2">Peak Milk</div>
          <div className="flex-1 px-1 py-2">60pcs</div>
          <div className="flex-1 px-1 py-2">14,800pts</div>
          <div className="flex-1 px-1 py-2 text-[#299438]">In stock</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM106</div>
          <div className="flex-1 px-1 py-2">Golden Morn</div>
          <div className="flex-1 px-1 py-2">10pcs</div>
          <div className="flex-1 px-1 py-2">3,500pts</div>
          <div className="flex-1 px-1 py-2 text-[#FF0000]">Low stock</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[8px] sm:text-[9px] md:text-xs lg:text-base">
          <div className="flex-1 px-1 py-2">MM107</div>
          <div className="flex-1 px-1 py-2">Lipton</div>
          <div className="flex-1 px-1 py-2">25pcs</div>
          <div className="flex-1 px-1 py-2">6,000pts</div>
          <div className="flex-1 px-1 py-2 text-[#299438]">In stock</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-6 px-2 md:px-8 lg:px-12">
      <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">&lt; Back</button>
      <span className="font-bold text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">1 of 20</span>
      <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">Next &gt;</button>
    </div>
    </div>
  )
}