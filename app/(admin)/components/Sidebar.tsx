"use client"
import { LayoutDashboard, ListOrdered, CalendarArrowDown, Truck, TrendingUp, Settings, UsersRound, LogOut, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

type sidebarType = {
  isSidebarOpen: boolean,
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({isSidebarOpen, setIsSidebarOpen}: sidebarType) {
  const pathname = usePathname()
  return (
    <>
    <div onClick={()=> setIsSidebarOpen(false)} className={`bg-black opacity-50 ${isSidebarOpen ? 'fixed lg:hidden': "hidden"} top-0 left-0 w-full h-screen`}></div>
    <div className={`fixed top-0 left-0 h-screen lg:relative w-[225px] sm:w-[250px] bg-primary px-2 sm:px-4 py-3 md:py-4 lg:py-6 space-y-4 sm:space-y-6 lg:space-y-8 ${isSidebarOpen ? "flex" : "hidden lg:flex"} flex-col`}>
      <X onClick={()=> setIsSidebarOpen(false)} className='absolute top-4 right-4 text-white lg:hidden' />
      <div className='flex justify-center'>
      <Image
        src="/logo.svg"
        alt='market mingle logo'
        className='w-[98px] lg:w-[120px]'
        width={120}
        height={60}
      />
      </div>
      <div className='flex-1 flex flex-col justify-between'>
      <ul className='flex flex-col gap-1 md:gap-1.5 text-white'>
        <Link href="/dashboard">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${pathname === '/dashboard' ? "bg-secondary" : ""}`}>
            <LayoutDashboard />
            <span className='text-sm'>Dashboard</span>
        </li>
        </Link>
        <Link href="/inventory-management">
          <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${
            pathname === '/inventory-management' || pathname === '/inventory-management/add-product'
              ? "bg-secondary"
              : ""
          }`}>
            <ListOrdered />
            <span className='text-sm'>Inventory Management</span>
          </li>
        </Link>
        <Link href="/order-management">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${pathname === '/order-management' ? "bg-secondary" : ""}`}>
            <CalendarArrowDown />
            <span className='text-sm'>Order Management</span>
        </li>
        </Link>
        <Link href="/delivery-settings">
          <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${
            pathname === '/delivery-settings' || pathname === '/delivery-settings/assign-rider'
              ? "bg-secondary"
              : ""
          }`}>
            <Truck />
            <span className='text-sm'>Delivery Settings</span>
          </li>
        </Link>
        <Link href="/users-subcription-management">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${pathname === '/users-subcription-management' ? "bg-secondary" : ""}`}>
            <UsersRound />
            <span className='text-sm'>Users Subscription Management</span>
        </li>
        </Link>
        <Link href="/analytics-reports">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${pathname === '/analytics-reports' ? "bg-secondary" : ""}`}>
            <TrendingUp />
            <span className='text-sm'>Analytics & Reports</span>
        </li>
    
        </Link>
        <Link href="/settings">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary ${pathname === '/settings' ? "bg-secondary" : ""}`}>
            <Settings />
            <span className='text-sm'>Settings</span>
        </li>
        </Link>
      </ul>
      <Link href="/logout">
        <li className={`text-white cursor-pointer flex flex-row items-center gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-secondary`}>
            <LogOut />
            <span className='text-sm'>Logout</span>
        </li>
        </Link>
      </div>
    </div>
    </>
  )
}
