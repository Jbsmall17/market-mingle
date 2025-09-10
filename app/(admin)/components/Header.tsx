"use client"
import { Bell } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Header() { 
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
            case '/users-subscription-management':
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
        <div className='flex flex-row items-center justify-end gap-12 md:gap-24 lg:gap-32'>
            <h1 className='text-black text-3xl font-semibold'>{getPageTitle(pathname)}</h1>
            <div className='flex flex-row items-center gap-2 text-black'>
                <Bell className='fill-current' />
                <p className='text-xl font-semibold'>Admin</p>
                <Image 
                    src="/admin.svg"
                    alt="admin profile"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    </div>
  )
}
