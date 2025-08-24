"use client"
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import Product from "@/components/Products";

export default function Home() {


  const Category = ({ imgPath, name }: { imgPath: string; name: string }) => {
    return (
      <div className="flex flex-col items-center py-4 gap-4 px-4 bg-white rounded-tl-full rounded-tr-full">
        <div className="bg-accent w-[125px] h-[125px] rounded-full flex justify-center items-center">
          <Image
            src={imgPath}
            alt={`${name}'s image`}
            width={100}
            height={100}
          />
        </div>
        <p className="font-semibold text-xl text-center whitespace-nowrap">
          {name}
        </p>
      </div>
    );
  };

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <section className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 bg-[#f5f5f5]">
        <p className="text-base sm:text-xl text-center mb-2">Categories</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Festured <span className="text-secondary">Categories</span>
        </p>
        <div className="place-items-center main-padding grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Category imgPath="/diary-baking.svg" name="Diary & baking" />
          <Category imgPath="/bakery.svg" name="Bakery" />
          <Category imgPath="/household.svg" name="Households" />
          <Category imgPath="/water-drinks.svg" name="Water & Drinks" />
        </div>
        <div className="mt-8 md:mt-10 lg:mt-14 bg-white main-padding py-4 md:py-6 lg:py-8">
          <div className="pb-4 flex flex-row overflow-x-hidden gap-4 lg:gap-6">
            <div className="shrink-0 w-full md:w-[500px] lg:w-[700px] p-6 md:p-8 lg:10 xl:p-14 flex flex-row justify-between items-center bg-gradient-to-l front-[#62a643] via-[#62A643] to-[#85bf6b] rounded-lg shadow-lg">
              <div className="space-y-3 md:space-y-4">
                <p className="text-white text-xs md:text-base">
                  Get 30% Discount on your first
                  <br /> Order on this platform
                </p>
                <Button variant={"secondary"} className="md:w-[150px]">
                  Shop Now
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
            <div className="shrink-0 w-full md:w-[500px] lg:w-[700px] p-6 md:p-8 lg:10 xl:p-14 flex flex-row justify-between items-center bg-gradient-to-l front-[#62a643] via-[#62A643] to-[#85bf6b] rounded-lg shadow-lg">
              <div className="space-y-3 md:space-y-4">
                <p className="text-white text-xs md:text-base">
                  Get 30% Discoumt on your first
                  <br /> Order on this platform
                </p>
                <Button variant={"secondary"} className="md:w-[150px]">
                  Shop Now
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
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="size-4 rounded-full bg-secondary"></div>
            <div className="size-4 rounded-full bg-[#c4c4c4]"></div>
            <div className="size-4 rounded-full bg-[#c4c4c4]"></div>
          </div>
        </div>
      </section>
      <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-[#62a643]">
        <p className="text-base sm:text-xl text-center mb-2">Product</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Featured <span className="text-secondary">Products</span>
        </p>
        <div className="place-items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            weight="5"
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
          <Product
            imgPath="/candrink.svg"
            name="Can coke"
            rating={4}
            price={1000}
            type="first"
          />
        </div>
      </section>
      <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
        <p className="text-base sm:text-xl text-center mb-2">Today&apos;s Deals</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Deals of the day
        </p>
        <div className="place-items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/co
            oking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
        </div>
      </section>
      <section className="flex justify-center items-center main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-[#f5f5f5]">
        <div className="shadow-sm relative p-6 md:p-8 rounded-lg w-full md:w-[500px] lg:w-[700px] bg-gradient-to-l front-[#62a643] via-[#62A643] to-[#85bf6b]">
          <p className="relative z-10 text-secondary text-base mb-4">
            Weekly Deals
          </p>
          <p className="relative z-10 text-3xl text-white mb-8">
            Unbeatable Offers: Your <br />
            <span className="text-secondary">weekly grocery special</span>
          </p>
          <Button variant={"secondary"}>Shop Now</Button>
          <Image
            src="/offer-img.svg"
            alt="offers image"
            width={300}
            height={300}
            className=" absolute bottom-2 -right-20 md:-right-28 w-[200px] md:w-[250px] object-contain"
          />
        </div>
      </section>
      <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
        <p className="text-base sm:text-xl text-center mb-2">Testimonials</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Testimonials from our
          <br /> <span className="text-[#62a643]">Loyal Customers</span>
        </p>
        <div className="my-6 md:my-8 lg:my-10 flex flex-row gap-2 md:gap-4 items-center justify-center">
          <Image
            src="/person1.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person2.svg"
            alt="person two image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person3.svg"
            alt="person three image"
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px]"
            width={125}
            height={125}
          />
          <Image
            src="/person4.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person5.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
        </div>
        <div className="relative flex justify-center items-center">
          <div className="flex justify-center items-center absolute top-[50%] translate-y-[50%] left-0 size-8 rounded-full bg-[#808080]">
            <ArrowLeft className="size-5 text-white" />
          </div>
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
            <p className="mt-2 text-center text-xl font-semibold">Grace Wilson</p>
          </div>
          <div className="flex justify-center items-center absolute top-[50%] translate-y-[50%] right-0 size-8 rounded-full bg-[#62a643]">
            <ArrowRight className="size-5 text-white" />
          </div>
        </div>
      </section>
    </main>
  );
}
