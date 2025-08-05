import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-primary">
      <div className='pb-4 mb-4 md:pb-6 mb:mb-6 lg:mb-8 lg:pb-8 border-b border-b-white flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0'>
        <div className='space-y-4'>
            <Image
                src={"/logo.svg"}
                alt='maarket mingle logo'
                width={80}
                height={80}
            />
            <p className='text-white'>
                Making grocery shopping easier,<br /> 
                fresher, and better, count on us for<br/> 
                trusted brands,exceptional<br /> 
                service, and unbeatable quality<br /> 
                every time you shop.      
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='space-y-6'>
                <p className='text-white text-xl font-medium'>Company</p>
                <ul className='space-y-3'>
                    <li className='text-sm text-[#808080]'>About Us</li>
                    <li className='text-sm text-[#808080]'>Blog</li>
                    <li className='text-sm text-[#808080]'>Contact Us</li>
                </ul>
            </div>
            <div className='space-y-6'>
                <p className='text-white font-medium text-xl'>Customer Services</p>
                <ul className='space-y-3'>
                    <li className='text-sm text-[#808080]'>My Account</li>
                    <li className='text-sm text-[#808080]'>Track Your Order</li>
                    <li className='text-sm text-[#808080]'>FAQ</li>
                </ul>
            </div>
            <div className='space-y-6'>
                <p className='text-white font-medium font-medium'>Our Information</p>
                <ul className='space-y-3'>
                    <li className='text-sm text-[#808080]'>Privacy</li>
                    <li className='text-sm text-[#808080]'>User Terms & Conditions</li>
                    <li className='text-sm text-[#808080]'>Return Policy</li>
                </ul>
            </div>
        </div>
      </div>
      <p className='text-base text-white'>&copy;Copyright 2025 <span className='text-secondary'>Market mingle</span> All Rights Reserved</p>
    </footer>
  )
}
