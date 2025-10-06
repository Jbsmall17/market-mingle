/*eslint-disable typescript-eslint/no-explicit-any*/
"use client"
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";


const CarouselComp = () => {
    const plugin = useRef(Autoplay({ delay: 1000 }));
    const [count, setCount] = useState(0);
    const [api, setApi] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const goTo = (index: number) => api & api.scrollTo(index);

    const SlideComp = () => {
    return (
      
      <div className="shrink-0  p-6 lg:p-8 xl:p-10 flex flex-row justify-between items-center bg-gradient-to-l front-[#62a643] via-[#62A643] to-[#85bf6b] rounded-lg shadow-lg">
        <div className="space-y-3 md:space-y-4">
          <p className="text-white text-xs md:text-base">
            Get 30% Discount on your first
            <br /> Order on this platform
          </p>
          <Button variant={"secondary"} className="md:w-[150px]" asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
        <div>
          <Image
            src="/cart-image.svg"
            alt="cart image"
            width={150}
            height={150}
          />
        </div>
      </div>
    );
  };

    useEffect(() => {
      if (!api) return;
      setCount(api.scrollSnapList().length);

      api.on("select", () => {
        setCurrentPage(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div className="mt-8 md:mt-10 lg:mt-14 bg-white main-padding py-4 md:py-6 lg:py-8">
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          className="pb-4 flex flex-row gap-4 lg:gap-6 w-[100%] h-auto"
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 w-[90%] md:max-w-[500px] lg:max-w-[700px] h-auto">
              <SlideComp />
            </CarouselItem>
            <CarouselItem className="pl-4 w-[90%] md:max-w-[500px] lg:max-w-[700px] h-auto">
              <SlideComp />
            </CarouselItem>
            <CarouselItem className="pl-4 w-[90%] md:max-w-[500px] lg:max-w-[700px] h-auto">
              <SlideComp />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex flex-row justify-center items-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "size-4 rounded-full",
                currentPage === index ? "bg-secondary" : "bg-[#c4c4c4]"
              )}
              onClick={() => goTo(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
export default CarouselComp