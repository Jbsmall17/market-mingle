import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <section className='auth-layout'>
      <p className="text-center text-2xl md:text-3xl font-medium text-black mb-3 md:mb-5">Welcome Back</p>
      <p className="text-center text-xs text-[#4d4d4d] mb-5 md:mb-8 lg:mb-10">Please enter your details</p>
      <form>
        <div className='space-y-2 mb-5 lg:mb-7'>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="email" />
        </div>
        <div className='space-y-2 mb-5 lg:mb-7'>
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="password" />
        </div>
        <div className='flex flex-row justify-between mb-12 lg:mb-16'>
          <div>
            <Checkbox  className='mr-2'/>
            <span>Remember me!</span>
          </div>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
        <Button variant={'default'} className="block mx-auto w-[70%] sm:w-[90%] lg:w-[50%] xl:w-[30%] font-medium h-10">Sign In</Button>
        <p className='text-center mt-4 md:mt-6 text-[#4d4d4d]'>Dont have an account <Link href="/signup" className='text-black underline hover:no-underline font-medium'>Sign Up Here</Link></p>
      </form>
    </section>
  )
}
