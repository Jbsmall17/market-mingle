import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Newletter() {
  return (
    <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-[#f5f5f5]">
      <p className="text-base sm:text-xl text-center mb-2">Newsletters</p>
      <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
        Subcribe to Our Newsletters to<br /> 
        <span className='text-[#62a643]'>get Updates On Our Latest Offers</span>
      </p>
      <p className='text-sm text-center text-[#808080] mb-2'>Get 5% your Order by Subscribing to Our newsletter</p>
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <Input
          className='bg-white p-2 rounded-lg w-full md:w-[400px] lg:w-[500px]' 
          placeholder='Enter Email Address' 
        />
        <Button className='text-black self-start' variant={'secondary'}>Subscribe</Button>
      </div>
    </section>
  )
}
