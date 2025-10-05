"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Loader from '@/components/ui/loader';
import { productType, useContextValue } from '@/context/context';
import { ArrowLeft, Heart, Minus, Plus, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ProductDetails = ({
    rating,
    product,
    // handleFunc
  }: {
    rating: number;
    product: productType;
    // handleFunc: () => void
  }) => {
    const router = useRouter()
    const {setCartProduct} = useContextValue()
    const ratingMap = [1, 2, 3, 4, 5];
    const [number, setNumber] = useState(1);
    const[isAdding,setIsAdding] = useState(false)
    
    const addToCart = () => {
      const selectProduct : productType = {
        ...product,
         stock: { quantity: number },
      }
      setIsAdding(true)
      setTimeout(()=>{
        setIsAdding(false)
      },1000)
      setCartProduct((prev)=>{
        const findProduct = prev.find((product)=> product._id === selectProduct._id)
        if(!findProduct){
          return [
            ...prev,
            selectProduct
          ]
        }else{
          const updatedArray = prev.map((product) => product._id == findProduct._id ? selectProduct : product)
          return updatedArray
        }
      })
    }

    const handleClick = () => {
      router.push("/shop")  
    }
    
    return (
      <div className="inner-y-padding">
        <Button
          onClick={handleClick}
          variant={"outline"}
        >
          <ArrowLeft className="inline mr-2" />
          Back
        </Button>
        <p className="title font-bold title-container-margin-bottom text-center">Shop</p>
        <p className="text-gray-400 sub-title font-medium text-center">
          Home / Shop / {product.category} / {product.name}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 my-6 md:my-8 lg:my-10">
          <div className="flex-1 flex items-center justify-center border rounded-lg border-black">
            <Image
              src={product.image ? product.image : "/placeholder.svg"}
              width={100}
              height={200}
              className="w-[200px] h-[350px] object-cover rounded-md"
              alt="product image"
            />
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-xl mb-2 text-secondary">{product.category}</p>
            <div className="mb-3 flex flex-row gap-3 items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-semibold">{product.name}</span>
              <Badge className="bg-[#d0efc2] text-black border border-primary rounded-full">
                {product.salesPrice.isActive ? "In Stock" : "Not In Stock"}
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
              <p className="text-base font-medium">
                {rating.toFixed(1)} (245 reviews)
              </p>
            </div>
            <p className="text-base sm:text-xl font-semibold mb-4">
              ₦{product.price.selling.toLocaleString()}/unit
            </p>
            <p className="text-base font-light mb-2">{product.description}</p>
            {
              product.variantItems.length > 1
              &&
            <>
            <p className="text-base sm:text-xl font-semibold mb-3">Select Size</p>
            <div className="flex flex-row gap-3 items-center mb-3">
              {product.variantItems.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer px-4 py-1 border-2 border-secondary rounded-md hover:bg-secondary"
                >
                  <span className="text-xl">{item}</span>
                </div>
              ))}
            </div>
            </>
            }
            <div className="flex flex-row gap-4 items-center mb-5">
              <div className="flex flex-row gap-5 items-center p-1 border-2 border-[#c4c4c4] rounded-lg">
                <div
                  onClick={() => {
                    setNumber((prev) => {
                      return Math.max(1, prev - 1);
                    });
                  }}
                  className="rounded-md border-2 border-[#319f43] text-[#319f43] hover:bg-[#319f43] hover:text-white size-6 md:size-7 lg:size-8 flex items-center justify-center cursor-pointer"
                >
                  <Minus className="size-4 md:size-5 lg:size-6 fill-current" />
                </div>
                <span className="text-base md:text-xl lg:text-2xl font-semibold">{number}</span>
                <div
                  onClick={() => {
                    setNumber((prev) => {
                      return  prev + 1;
                    });
                  }}
                  className="rounded-md border-2 border-[#319f43] text-[#319f43] hover:bg-[#319f43] hover:text-white size-6 md:size-7 lg:size-8 flex items-center justify-center cursor-pointer"
                >
                  <Plus className="size-4 md:size-5 lg:size-6 fill-current" />
                </div>
              </div>
              <div className="bg-white border border-[#c4c4c4] h-[32px] md:h-[40px] w-[32px] md:w-[40px] rounded-full flex justify-center items-center">
                <Heart className="size-4 md:size-5" />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Button onClick={addToCart} className="bg-[#319f43] flex flex-jusitfy items-center min-w-[105px]">
                {
                  isAdding
                  ? <Loader size={4} />
                  : "Add to Cart"
                }
              </Button>
              <Button variant={"secondary"} asChild>
                <Link href="/cart">
                  Buy Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductDetails