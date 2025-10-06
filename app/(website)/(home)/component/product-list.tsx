"use client"
import Product2 from '@/components/Products2'
import { productType } from '@/context/context'
import React from 'react'

export default function ProductList({products}: {products: productType[]}) {
  return (
    <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-[#62a643]">
        <p className="text-base sm:text-xl text-center mb-2">Product</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Featured <span className="text-secondary">Products</span>
        </p>
        {
          products.length > 0
          ?
        <div className="place-items-center grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(215px,1fr))] gap-4 md:gap-6 lg:gap-8">
          {
            products.slice(0,8).map((item,index)=>(
              <Product2
                key={index}
                imgPath={item.image}
                name={item.name}
                price={item.price.selling}
                rating={4}
                // handleFunc={changeStep}
                item={item}
              />
            ))
          }
        </div>
        : 
        <div className="min-h-[300px] flex justify-center items-center">
            <p className="text-muted-foreground text-xl font-medium">
              No Products Available
            </p>
          </div>
        }
    </section>
  )
}
