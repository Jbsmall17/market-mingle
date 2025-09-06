import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className='text-2xl text-center text-[#000000B2] font-bold'>Settings & Roles</h1>
      <p className='text-center text-[#000000B2] text-[10px] sm:text-xs md:text-sm lg:text-base mt-5'>Manage roles, permissions, preferences and systems configuration</p>
      <div className='flex justify-center items-center mt-10 gap-10'>
        <div className='bg-[#FFA32D] rounded-lg p-3 hover:shadow-lg cursor-pointer'>
          <p className='text-[10px] sm:text-xs md:text-sm lg:text-base'>Roles & permission</p>
        </div>
        <div className='border border-[#FFA32D] rounded-lg p-3 hover:shadow-lg cursor-pointer'>
          <p className='text-[10px] sm:text-xs md:text-sm lg:text-base'>General Setting</p>
        </div>
      </div>
      <div className="mt-10 w-full bg-white overflow-x-auto">
        {/* Table Header */}
        <div className="flex w-full font-bold text-[10px] md:text-xs lg:text-base text-[#7C7C7C]">
          <div className="flex-1 px-2 py-3">Name</div>
          <div className="flex-1 px-2 py-3">Role</div>
          <div className="flex-1 px-2 py-3">E-mail</div>
          <div className="flex-1 px-2 py-3">Status</div>
          <div className="flex-1 px-2 py-3">Action</div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        {/* Table Data Rows */}
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">John Capper</div>
          <div className="flex-1 px-2 py-3">Analytics</div>
          <div className="flex-1 px-2 py-3">Johncapper@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#299438] font-semibold">Active</div>
        <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base ">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">Sarah Lee</div>
          <div className="flex-1 px-2 py-3">Admin</div>
          <div className="flex-1 px-2 py-3">Sarahlee@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#299438] font-semibold">Active</div>
          <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">Mike Opara</div>
          <div className="flex-1 px-2 py-3">Sales</div>
          <div className="flex-1 px-2 py-3">Mikeopara@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#FF0000] font-semibold">Inactive</div>
        <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">Aisha Bello</div>
          <div className="flex-1 px-2 py-3">Support</div>
          <div className="flex-1 px-2 py-3">Aishabello@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#299438] font-semibold">Active</div>
        <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1  hover:cursor-pointer text-[10px] md:text-xs lg:text-base ">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">Chinedu Okafor</div>
          <div className="flex-1 px-2 py-3">Marketing</div>
          <div className="flex-1 px-2 py-3">chineduokafor@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#FF0000] font-semibold">Inactive</div>
      <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
        <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center">
          <div className="flex-1 px-2 py-3">Fatima Yusuf</div>
          <div className="flex-1 px-2 py-3">Finance</div>
          <div className="flex-1 px-2 py-3">fatimayusuf@gmail.com</div>
          <div className="flex-1 px-2 py-3 text-[#299438] font-semibold">Active</div>
          <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Assign new role</button>
          <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer text-[10px] md:text-xs lg:text-base">Deactivate</button>
        </div>
        </div>
        <div className="border-b border-[#606060] w-full"></div>
      </div>
    <div className="w-full flex items-center justify-between mt-6 px-2 md:px-8 lg:px-12">
      <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">&lt; Back</button>
      <span className="font-bold text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">1 of 20</span>
      <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">Next &gt;</button>
    </div>
    </div>
  )
}
