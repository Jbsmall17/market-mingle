import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function pages() {
  return (
    <section className="auth-layout">
      <p className="text-center text-2xl md:text-3xl font-medium text-black mb-3 md:mb-5">Hey, Create Your Account</p>
      <p className="text-center text-xs text-[#4d4d4d] mb-5 md:mb-7">Want to shop with us, Create your account</p>
      <form  className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" placeholder="confirm password" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input type="text" placeholder="address" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Checkbox />
          <span className="font-normal">Accept Terms & Provacy</span>
        </div>
        <Button variant={'default'} className="block mx-auto w-[70%] sm:w-[90%] lg:w-[50%] xl:w-[30%] font-medium h-10">Sign up</Button>
        <p className="text-center text-xs text-[#4d4d4d]">Start your grocery shopping now! <Link className="text-black underline text-sm" href="/">Sign In Here</Link></p>
      </form>
    </section>
  );
}
