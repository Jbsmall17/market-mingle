"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
export default function Testimonials() {
    const plugin = useRef(Autoplay({ delay: 1000 }));
  return (
    <Carousel
        plugins={[plugin.current]}
    >
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center">
          <div className="w-[90%] max-w-lg">
            <p className="mb-4 md:mb-6 w-full text-center text-xl lg:text-2xl font-medium text-[#808080]">
              I&apos;ve tried several grocery delivery services, and this one is
              by far the best. The website is user-friendly, the selection is
              vast, and the customer service is outstanding. Highly recommend!
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="flex flex-row gap-2 items-center">
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="mt-2 text-center text-xl font-semibold">
              Grace Wilson
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <div className="w-[90%] max-w-lg">
            <p className="mb-4 md:mb-6 w-full text-center text-xl lg:text-2xl font-medium text-[#808080]">
              I&apos;ve tried several grocery delivery services, and this one is
              by far the best. The website is user-friendly, the selection is
              vast, and the customer service is outstanding. Highly recommend!
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="flex flex-row gap-2 items-center">
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="mt-2 text-center text-xl font-semibold">
              Grace Wilson
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <div className="w-[90%] max-w-lg">
            <p className="mb-4 md:mb-6 w-full text-center text-xl lg:text-2xl font-medium text-[#808080]">
              I&apos;ve tried several grocery delivery services, and this one is
              by far the best. The website is user-friendly, the selection is
              vast, and the customer service is outstanding. Highly recommend!
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="flex flex-row gap-2 items-center">
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="mt-2 text-center text-xl font-semibold">
              Grace Wilson
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <div className="w-[90%] max-w-lg">
            <p className="mb-4 md:mb-6 w-full text-center text-xl lg:text-2xl font-medium text-[#808080]">
              I&apos;ve tried several grocery delivery services, and this one is
              by far the best. The website is user-friendly, the selection is
              vast, and the customer service is outstanding. Highly recommend!
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="flex flex-row gap-2 items-center">
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
                <Star className="size-6 fill-current text-[#62a643]" />
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="mt-2 text-center text-xl font-semibold">
              Grace Wilson
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
