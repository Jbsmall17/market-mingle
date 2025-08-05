import { ArrowRight, Plus, ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-6 md:py-8 lg:py-10 main-padding flex flex-col lg:flex-row justify-center lg:justify-start gap-4 md:gap-6 items-center">
      <div className="flex-[1.25]">
        <div className="px-2 md:px-4 inline-flex gap-2 items-center p-2 rounded-md bg-muted">
          <ShoppingCart  className="size-4 md:size-6"/>
          <span className="text-sm md:text-base">The Best Online Grocery Store</span>
        </div>
        <p className="text-center lg:text-center my-4 md:my-6 lg:my-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Your One-Stop Shop
          <br />for <span className="text-primary">Quality Groceries</span>
        </p>
        <p className="hidden lg:block text-muted-foreground font-light mb-3 md:mb-5 lg:mb-7">
          Making grocery shopping easier, fresher, and better,<br /> 
          count on us for trusted brands, exceptional service,<br /> and and unbeatable quality
          quality every time you stop
        </p>
        <p className="text-center block lg:hidden text-muted-foreground font-light mb-3 md:mb-5 lg:mb-7">
          Making grocery shopping easier, fresher, and better,
          count on us for trusted brands, exceptional service, and and unbeatable quality
          quality every time you stop
        </p>
        <div className="mb-3 md:mb-5 lg:mb-7 flex gap-3 md:gap-5 lg:gap-7 items-center justify-center lg:justify-start">
          <Button variant={"default"}>
            Shop Now <ArrowRight />
          </Button>
          <Link href="/shop">View All products</Link>
        </div>
        <div className="flex gap-2 items-center justify-center lg:justify-start">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            <Avatar>
              <AvatarImage src="/avatar.svg" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/avatar.svg" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/avatar.svg" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/avatar.svg" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>
          <div className="sapce-y-2">
            <p>
              4.8 rating <Plus className="inline size-4" />
            </p>
            <p className="text-muted-foreground text-sm font-light">Trusted by 75k customers</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/cart-image.svg"
          className="object-contain w-full"
          width={400}
          height={500}
          alt="cart image"
        />
      </div>
    </section>
  );
}
