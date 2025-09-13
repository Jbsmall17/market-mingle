'use client'

import React, { useState } from 'react'

export default function page() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  const handleAssignClick = (rowIdx: number) => {
    setMenuOpen(rowIdx)
  }

  const handleCloseMenu = () => {
    setMenuOpen(null)
  }

  const tableData = [
    { name: "John Capper", role: "Analytics", email: "Johncapper@gmail.com", status: "Active" },
    { name: "Sarah Lee", role: "Admin", email: "Sarahlee@gmail.com", status: "Active" },
    { name: "Mike Opara", role: "Sales", email: "Mikeopara@gmail.com", status: "Inactive" },
    { name: "Aisha Bello", role: "Support", email: "Aishabello@gmail.com", status: "Active" },
    { name: "Chinedu Okafor", role: "Marketing", email: "chineduokafor@gmail.com", status: "Inactive" },
    { name: "Fatima Yusuf", role: "Finance", email: "fatimayusuf@gmail.com", status: "Active" },
  ]

  const permissions = [
    "Manage Orders",
    "Assign Drivers",
    "Access Settings",
    "Manage Inventory",
    "View reports",
    "Management subscriptions",
    "Analytics management"
  ]

  return (
    <div className="relative">
      {/* Opaque overlay when menu is open */}
      {menuOpen !== null && (
        <div className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.08)]"></div>
      )}

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
        {tableData.map((row, idx) => (
          <React.Fragment key={idx}>
            <div className="flex w-full text-[10px] md:text-xs lg:text-base items-center relative">
              <div className="flex-1 px-2 py-3">{row.name}</div>
              <div className="flex-1 px-2 py-3">{row.role}</div>
              <div className="flex-1 px-2 py-3">{row.email}</div>
              <div className={`flex-1 px-2 py-3 font-semibold ${row.status === "Active" ? "text-[#299438]" : "text-[#FF0000]"}`}>{row.status}</div>
              <div className="flex-1 px-2 py-3 flex flex-col gap-2 items-start">
                <button
                  className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer"
                  onClick={() => handleAssignClick(idx)}
                >
                  Assign new role
                </button>
                <button className="border border-[#FFA32D] rounded px-2 py-1 hover:cursor-pointer">Deactivate</button>
              </div>
              {/* Centered Assign Role Menu */}
              {menuOpen === idx && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                  <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-2 sm:mx-auto flex flex-col justify-center overflow-y-auto max-h-screen p-4 sm:p-6">
                    <h2 className="text-center font-bold text-lg sm:text-xl md:text-2xl text-black mb-4">Assign New Role</h2>
                    <label className="text-xs sm:text-sm font-semibold mb-1">Staff Name</label>
                    <input type="text" className="border border-gray-300 rounded px-3 py-2 mb-3 text-xs sm:text-sm" placeholder="Enter staff name" />
                    <label className="text-xs sm:text-sm font-semibold mb-1">Email</label>
                    <input type="email" className="border border-gray-300 rounded px-3 py-2 mb-3 text-xs sm:text-sm" placeholder="Enter email" />
                    <h3 className="font-bold text-sm sm:text-base text-black mt-2 mb-2">Permissions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                      {permissions.map((perm, i) => (
                        <label key={perm} className="flex items-center gap-2 text-xs sm:text-sm">
                          <input type="checkbox" className="accent-[#FFA32D]" />
                          {perm}
                        </label>
                      ))}
                    </div>
                    <label className="text-xs sm:text-sm font-semibold mb-1">Input Admin password</label>
                    <input type="password" className="border border-gray-300 rounded px-3 py-2 mb-5 text-xs sm:text-sm" placeholder="Admin password" />
                    <div className="flex justify-center gap-4 mt-2">
                      <button
                        className="border border-[#FFA32D] bg-white text-black font-semibold px-4 py-2 rounded"
                        onClick={handleCloseMenu}
                      >
                        Cancel
                      </button>
                      <button className="bg-[#FFA32D] text-black font-semibold px-4 py-2 rounded">
                        Save all changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="border-b border-[#606060] w-full"></div>
          </React.Fragment>
        ))}
      </div>
      <div className="w-full flex items-center justify-between mt-6 px-2 md:px-8 lg:px-12">
        <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">&lt; Back</button>
        <span className="font-bold text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">1 of 20</span>
        <button className="text-[#606060] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">Next &gt;</button>
      </div>
    </div>
  )
}