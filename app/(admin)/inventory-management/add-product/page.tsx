import React from 'react'
import addimgicon from '@/components/img/img.png'

export default function page() {
  return (
    <div>
        <h1 className='text-2xl font-bold mt-10'>Add Product Page</h1>
        <div className='mt-5'>
           <h1 className='font-bold'>Basic product details</h1>
           <div className='flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-around items center'>
           <input type="text" className='w-full h-10  border border-gray-900 rounded-lg mt-4 p-8 font-bold text-[#7C7C7C] text-[9px] md:text-s lg:text-base' placeholder='Product Name' />
           </div>
           <div className='flex w-full h-10 justify-between  gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4'>
             <input type="text" className='w-1/2 border p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] md:text-s lg:text-base' placeholder='Category' />
             <input type="text" className='w-1/2 border  p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] md:text-s lg:text-base' placeholder='Unit in Stock' />
            </div>
            <div className='flex w-full h-10 justify-between  gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8'>
             <input type="text" className='w-1/2 border p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] md:text-s lg:text-base' placeholder='Weight (Optional)' />
             <input type="text" className='w-1/2 border  p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] md:text-s lg:text-base' placeholder='Stock keeping unit' />
            </div>
            <div className='relative w-full h-20 mt-10 flex items-center justify-center'>
            <input
                type="file"
                id="product-image"
                className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center w-full h-full pointer-events-none border border-gray-900 rounded-lg bg-white">
                <span className="mb-2">
                <img src={addimgicon.src} alt="Add image Icon" className="w-6 h-6 mx-auto" />
                </span>
                <span className="text-center text-[9px] md:text-s lg:text-base text-[#7C7C7C] font-semibold">
                Upload product image
                </span>
            </div>
            </div>
            <h1 className='font-bold mt-10'>Product Pricing ₦ or Pts</h1>
            <div className='flex w-full h-10 justify-between  gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4'>
             <input type="text" className='w-1/2 border p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] text-center md:text-s lg:text-base' placeholder='Base price' />
             <input type="text" className='w-1/2 border  p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] text-center md:text-s lg:text-base' placeholder='Bronze price' />
            </div>
            <div className='flex w-full h-10 justify-between  gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-10'>
             <input type="text" className='w-1/2 border p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] text-center md:text-s lg:text-base' placeholder='Silver price' />
             <input type="text" className='w-1/2 border  p-8 border-gray-900 rounded-lg font-bold text-[#7C7C7C] text-[9px] text-center md:text-s lg:text-base' placeholder='Platinum price' />
            </div>
            <h1 className='font-bold mt-10'>Settings and promotion</h1>
            <div className='flex w-full h-10 justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-10'>
                <div className='flex w-[50%] h-10 justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
                    <div>
                    <h1 className='text-[9px] text-center md:text-s lg:text-base'>Product status</h1>
                </div>
                <div>
                    <select className='border p-2 border-[#285521] rounded-lg font-bold text-[#285521] text-[9px] md:text-s lg:text-base'>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                </div>
                <div className='flex w-[50%] h-10 justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
                <div>
                    <h1 className='text-[9px] text-center md:text-s lg:text-base'>Visibility to buyers</h1>
                </div>
                <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform"></div>
                    <div className="w-10 h-4 bg-gray-300 rounded-full peer peer-checked:bg-[#285521] transition-all"></div>
                </label>
                </div>
                </div>
            </div>
            <div className='flex w-full h-10 justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-10'>
                <div>
                    <h1 className='text-[9px] text-center md:text-s lg:text-base'>Promotion bar</h1>
                </div>
                <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-4 bg-gray-300 rounded-full peer peer-checked:bg-[#285521] transition-all"></div>
                    <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform"></div>
                </label>
                </div>
                <div>
                    <input type="text" className=' h-10  border border-gray-900 rounded-lg mt-4 p-8 font-bold text-[#7C7C7C] text-center text-[9px] md:text-s lg:text-base' placeholder='Add promotion message' />
                </div>
            </div>
            <div className='flex w-full h-10 justify-around items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-15'>
                <div>
                    <button className='w-32 h-10 bg-white border border-gray-900 rounded-md font-bold text-black text-[9px] md:text-s lg:text-base'>Save as draft</button>
                </div>
                <div>
                    <button className='w-32 h-10 bg-[#FFA32D] rounded-md font-bold text-white text-[9px] md:text-s lg:text-base'>Publish Product</button>
                </div>
                <div>
                    <button className='w-32 h-10 bg-white border border-gray-900 rounded-md font-bold text-black text-[9px] md:text-s lg:text-base'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}
