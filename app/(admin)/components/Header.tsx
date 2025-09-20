"use client"
import { Bell, Menu } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'

type headerType = {
    setIsSidebarOpen : Dispatch<SetStateAction<boolean>>
}

export default function Header({setIsSidebarOpen}: headerType) { 
    const pathname = usePathname()
    const getPageTitle = (path: string) =>{
        let name;
        switch(path){
            case '/dashboard':
                name = 'Dashboard';
                break;
            case '/inventory-management':
                name = 'Inventory Management';
                break;
            case '/inventory-management/add-product':
                name = 'Inventory Management';
                break;
            case '/order-management':
                name = 'Order Management';
                break;
            case '/delivery-settings':
                name = 'Delivery Settings';
                break;
            case '/delivery-settings/assign-rider':
                name = 'Delivery Settings';
                break;
            case '/users-subcription-management':
                name = 'Users Subscription Management';
                break;
            case '/analytics-reports':
                name = 'Analytics & Reports';
                break;
            case '/settings':
                name = "";
                break;
            default :
                name = 'no page found';
                break;
        }
        return name;
    }
  return (
    <div>
        <div className='flex flex-row items-center justify-between lg:justify-end'>
            <Menu onClick={()=> setIsSidebarOpen(true)} className='size-6 sm:size-8 block lg:hidden' />
            <div className='flex flex-row items-center gap-6 sm:gap-10 md:gap-24 lg:gap-32'>
                <h1 className='text-black text-2xl sm:text-2xl lg:text-3xl font-semibold'>{getPageTitle(pathname)}</h1>
                <div className='flex flex-row items-center gap-2 text-black'>
                    <Bell className='fill-current size-6 sm:size-8' />
                    <p className='text-base sm:text-xl font-semibold'>Admin</p>
                    <Image 
                        src="/admin.svg"
                        alt="admin profile"
                        className='w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]'
                        width={40}
                        height={40}
                    />
            </div>
            </div>
        </div>
    </div>
  )
}
