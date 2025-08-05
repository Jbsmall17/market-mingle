import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='auth-layout'>
        <p className="text-center text-2xl md:text-3xl font-medium text-black mb-3 md:mb-5">Forgot Password</p>
        <p className="text-center text-xs text-[#4d4d4d] mb-5 md:mb-8 lg:mb-10">Recover your password</p>
        <form>
            <div className='space-y-2 mb-5 lg:mb-7'>
                <Label htmlFor='newPassowrd'>New Password</Label>
                <Input type='password' placeholder='new password' />
            </div>
            <div className='space-y-2 mb-18 lg:mb-24'>
                <Label htmlFor='confirmPassowrd'>Re-enter Password</Label>
                <Input type='password' placeholder='confirm password' />
            </div>
            <Button variant={'default'} className="block mx-auto w-[70%] sm:w-[90%] lg:w-[50%] xl:w-[30%] font-medium h-10">Reset</Button>
            <p className='text-center mt-4 md:mt-6 text-[#4d4d4d]'>Dont have an account? <Link href="/signup"className='text-black underline hover:no-underline font-medium'>Sign up Here</Link></p>
        </form>
    </section>
  )
}
