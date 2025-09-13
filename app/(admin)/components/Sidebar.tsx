"use client"
import { LayoutDashboard, ListOrdered, CalendarArrowDown, Truck, TrendingUp, Settings, UsersRound, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className='w-[215px] bg-primary px-4 py-6 space-y-8'>
      <div className='flex justify-center'>
      <Image
        src="/logo.svg"
        alt='market mingle logo'
        width={120}
        height={60}
      />
      </div>
      <ul className='space-y-4 text-white'>
        <Link href="/dashboard">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${pathname === '/dashboard' ? "bg-secondary" : ""}`}>
            <LayoutDashboard />
            <span>Dashboard</span>
        </li>
        </Link>
        <Link href="/inventory-management">
          <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${
            pathname === '/inventory-management' || pathname === '/inventory-management/add-product'
              ? "bg-secondary"
              : ""
          }`}>
            <ListOrdered />
            <span>Inventory Management</span>
          </li>
        </Link>
        <Link href="/order-management">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${pathname === '/order-management' ? "bg-secondary" : ""}`}>
            <CalendarArrowDown />
            <span>Order Management</span>
        </li>
        </Link>
        <Link href="/delivery-settings">
          <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${
            pathname === '/delivery-settings' || pathname === '/delivery-settings/assign-rider'
              ? "bg-secondary"
              : ""
          }`}>
            <Truck />
            <span>Delivery Settings</span>
          </li>
        </Link>
        <Link href="/users-subcription-management">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${pathname === '/users-subcription-management' ? "bg-secondary" : ""}`}>
            <UsersRound />
            <span>Users Subscription Management</span>
        </li>
        </Link>
        <Link href="/analytics-reports">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${pathname === '/analytics-reports' ? "bg-secondary" : ""}`}>
            <TrendingUp />
            <span>Analytics & Reports</span>
        </li>
    
        </Link>
        <Link href="/settings">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary ${pathname === '/settings' ? "bg-secondary" : ""}`}>
            <Settings />
            <span>Settings</span>
        </li>
        </Link>
        <Link href="/logout">
        <li className={`cursor-pointer flex flex-row items-center gap-3 p-2 rounded-lg hover:bg-secondary`}>
            <LogOut />
            <span>Logout</span>
        </li>
        </Link>
      </ul>
    </div>
  )
}
