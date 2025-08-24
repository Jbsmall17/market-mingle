"use client";
import Product from "@/components/Products";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Heart, Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const changeStep = (num: number) => {
    setStep(num)
  } 
  const ProductCategory = ({
    image,
    text,
  }: {
    image: string;
    text: string;
  }) => {
    return (
      <div>
        <Image
          src={image}
          height={60}
          width={60}
          className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
          alt="image"
        />
        <p className="text-sm md:text-base text-center font-medium mt-2">
          {text}
        </p>
      </div>
    );
  };

  const ProductDetails = ({
    img,
    category,
    name,
    rating,
    description,
    price,
  }: {
    img: string;
    category: string;
    name: string;
    rating: number;
    description: string;
    price: string;
  }) => {
    const ratingMap = [1, 2, 3, 4, 5];

    return (
      <div className="pt-8 md:pt-10 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
        <p className="text-3xl font-bold mb-5 text-center">Shop</p>
        <p className="text-gray-400 text-2xl font-medium text-center">
          Home / Shop / Product Details
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 my-6 md:my-8 lg:my-10">
          <div className="flex-1 flex items-center justify-center border rounded-lg border-black">
            <Image
              src={img}
              width={100}
              height={200}
              className="w-[200px] h-[350px] object-cover"
              alt="product image"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl mb-2 text-secondary">{category}</p>
            <div className="mb-3 flex flex-row gap-3 items-center">
              <span className="text-3xl font-semibold">{name}</span>
              <Badge className="bg-[#d0efc2] text-black border border-primary rounded-full">
                In Stock
              </Badge>
            </div>
            <div className="flex flex-row gap-4 items-center mb-3">
              <div className="text-secondary flex flex-row gap-1">
                {ratingMap.map((fig, idx) => {
                  if (fig <= rating) {
                    return <Star key={idx} className="size-4 fill-current" />;
                  } else {
                    return <Star key={idx} className="size-4" />;
                  }
                })}
              </div>
              <p className="text-base font-medium">{rating.toFixed(1)} (245 reviews)</p>
            </div>
            <p className="text-xl font-semibold mb-4">{price} per one</p>
            <p className="text-base font-light mb-2">{description}</p>
            <p className="text-xl font-semibold mb-3">Select Size</p>
            <div className="flex flex-row gap-3 items-center mb-3">
              <div className="cursor-pointer px-4 py-1 border-2 border-secondary rounded-md hover:bg-secondary">
                <span className="text-xl">1KG</span>
              </div>
              <div className="cursor-pointer px-4 py-1 border-2 border-secondary rounded-md hover:bg-secondary">
                <span className="text-xl">3KG</span>
              </div>
              <div className="cursor-pointer px-4 py-1 border-2 border-secondary rounded-md hover:bg-secondary">
                <span className="text-xl">5KG</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center mb-5">
              <div className="flex flex-row gap-5 items-center p-1 border-2 border-[#c4c4c4] rounded-lg">
                <div className="rounded-md border-2 border-[#319f43] text-[#319f43] hover:bg-[#319f43] hover:text-white size-8 flex items-center justify-center cursor-pointer">
                  <Minus className="size-6 fill-current" />
                </div>
                <span className="text-2xl font-semibold">2</span>
                <div className="rounded-md border-2 border-[#319f43] text-[#319f43] hover:bg-[#319f43] hover:text-white size-8 flex items-center justify-center cursor-pointer">
                  <Plus className="size-6 fill-current" />
                </div>
              </div>
              <div className="bg-white border border-[#c4c4c4] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <Heart className="size-5" />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Button className="bg-[#319f43]">Add to Cart</Button>
              <Button variant={"secondary"}>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mockData = [
    {
      imgPath: "/peak-milk.svg",
      name: "Can peak milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/almond-milk.svg",
      name: "Almond milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/nido-milk.svg",
      name: "Nido",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/peak-milk.svg",
      name: "Can peak milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/almond-milk.svg",
      name: "Almond milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/nido-milk.svg",
      name: "Nido",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/peak-milk.svg",
      name: "Can peak milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/almond-milk.svg",
      name: "Almond milk",
      price: 10000,
      weight: "5",
      rating: 4,
    },
    {
      imgPath: "/nido-milk.svg",
      name: "Nido",
      price: 10000,
      weight: "5",
      rating: 4,
    },
  ];

  return step == 1 ? (
    <div className="main-padding flex flex-row overflow-x-auto">
      <div className="min-w-[150px] sm:min-w-[200px] pt-4 md:pt-6 lg:pt-8 border-r border-black">
        <p className="font-medium text-base sm:text-xl border-b border-black mr-2">
          Filter Options
        </p>
        <p className="my-4 md:my-6 font-light text-base">Category</p>
        <div>
          <ul className="list-none text-xs sm:text-sm space-y-3">
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Diary & Baking</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Bakery</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Households</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Water & Drinks</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Liquor</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Pasta & Rice</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Stationeries</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Baby Items</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Health & Beauty</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Snacks & Sweets</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Breakfast</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Fast Produce</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Condiments & spice</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Frozen Foods</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Condiments & Spices</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Frozen Foods</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Pharmacy</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Canned goods</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Icecream & Deserts</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Pet Care</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Gift Hampers</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox />
              <span>Kitchen wares</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 pl-4 md:pl-6 min-w-[450px] sm:min-w-[640px] overflow-x-auto">
        <div className="py-4 md:py-6 flex flex-row justify-between items-center">
          <p className="text-black font-normal text-sm">
            showing 1-12 of 1200 results
          </p>
          <div className="flex flex-row gap-4 items-center">
            <p className="text-xl font-medium">Sort by:</p>
            <p className="text-base font-medium p-2 border rounded-lg">
              Default Sorting
            </p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold mb-5 text-center">Shop</p>
          <p className="text-gray-400 text-2xl font-medium text-center">
            Home / Shop
          </p>
          <div className="flex flex-row justify-between py-4 md:py-6">
            <ProductCategory image="/milk.svg" text="Milk" />
            <ProductCategory image="/image2.svg" text="Eggs" />
            <ProductCategory image="/image3.svg" text="Youghurt" />
            <ProductCategory image="/image4.svg" text="Butter" />
            <ProductCategory image="/image5.svg" text="Cheese" />
            <ProductCategory image="/image6.svg" text="Cream" />
            <ProductCategory image="/image7.svg" text="Margarine" />
          </div>
          <div className="my-6 md:my-8 lg:my-10 place-items-center grid sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {mockData.map((product, index) => (
              <Product
                key={index}
                imgPath={product.imgPath}
                name={product.name}
                price={product.price}
                rating={product.rating}
                weight={product.weight}
                type="third"
                handleFunc={changeStep}
              />
            ))}
          </div>
          <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center items-center gap-6 md:gap-8">
            <ArrowLeft />
            <ul className="flex flex-row gap-6">
              <li className="size-6 text-sm cursor-pointer bg-primary hover:opacity-80 rounded-full flex justify-center items-center">
                <span>1</span>
              </li>
              <li className="size-6 text-sm cursor-pointer hover:bg-primary rounded-full flex justify-center items-center">
                <span>2</span>
              </li>
              <li className="size-6 text-sm cursor-pointer hover:bg-primary rounded-full flex justify-center items-center">
                <span>3</span>
              </li>
              <li className="size-6 text-sm cursor-pointer hover:bg-primary rounded-full flex justify-center items-center">
                <span>4</span>
              </li>
              <li className="size-6 text-sm cursor-pointer hover:bg-primary rounded-full flex justify-center items-center">
                <span>5</span>
              </li>
              <li>
                <span>...</span>
              </li>
              <li className="size-6 cursor-pointer hover:bg-primary rounded-full flex justify-center items-center">
                <span>20</span>
              </li>
            </ul>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="main-padding">
      <ProductDetails
        category="Diary"
        name="NIDO Milk"
        rating={4}
        price={"10000"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem blanditiis molestias, impedit esse obcaecati iste? Cum nulla, maxime consectetur fuga qui veniam eius aliquam natus sed optio quas laboriosam."
        }
        img="/nido-big-milk.svg"
      />
      <p className="text-xl font-semibold mb-5">Related Products</p>
      <div className="flex flex-row gap-6 mb-6 md:mb-8 lg:mb-10">
        <Product
          name="Peak milk"
          imgPath="/peak-milk.svg"
          rating={5}
          price={10000}
          weight="5kg"
          type="third"
        />
        <Product
          name="Peak milk"
          imgPath="/peak-milk.svg"
          rating={5}
          price={10000}
          weight="5kg"
          type="third"
        />
      </div>
    </div>
  );
}
