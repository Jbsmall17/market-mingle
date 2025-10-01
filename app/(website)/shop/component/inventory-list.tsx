/*eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Product2 from "@/components/Products2";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Filter, X} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Category, getPagination } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { productType, useContextValue } from "@/context/context";
import ProductDetails from "./product-details";

type productObjType = {
  items: productType[];
  pagination: { page: number; pages: number; total: number };
};

type categoryType = {
  description : string,
  id : string,
  name : string
}

export default function InventoryList({
  products,
  categoryArray
}: {
  products: productObjType;
  categoryArray: categoryType[]
}) {
  const {productsObj, setProductsObj} = useContextValue()
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState("");
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
          src={image !== "" ? image : "/placeholder.svg"}
          height={60}
          width={60}
          className="h-[32px] sm:w-[40px] md:w-[60px] h-[32px] sm:h-[40px] md:h-[60px]"
          alt="image"
        />
        <p className="text-xs sm:text-sm md:text-base text-center sm:font-medium mt-2">
          {text}
        </p>
      </div>
    );
  };



  const handleParams = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleCategoryParams = (category: string) => {
    setCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };
  const pagination = getPagination(
    productsObj.pagination.page,
    productsObj.pagination.pages
  );

  useEffect(() => {
    setProductsObj({
      items: products.items,
      pagination: {
        page: products.pagination.page,
        pages: products.pagination.pages !== 0 ?products.pagination.pages : 0,
        total: products.pagination.total,
      },
    });
    sessionStorage.setItem("products",JSON.stringify(products))

  }, [products]);

  return (
    <div className="relative flex flex-col sm:flex-row overflow-x-auto">
      <div className={`min-w-[225px] pt-4 pb-4 md:pt-6 lg:pt-8 border-r border-black absolute sm:static top-0 left-0 bg-white z-10 pl-4 sm:pl-0 md:pl-8 lg:pl-10 xl:pl-14 pr-2 ${showFilter ? "block" : "hidden sm:block" } overflow-y-auto`}>
        <X onClick={()=>setShowFilter(false)} className="block sm:hidden absolute top-2 right-2" />
        <p className="font-medium text-base sm:text-xl border-b border-black mr-2">
          Filter Options
        </p>
        <p className="my-4 md:my-6 font-light text-base">Category</p>
        <div>
          <ul className="list-none text-xs sm:text-sm space-y-3">
            {
              categoryArray.map((itemCategory, index)=>(
              <li key={index} className="flex flex-row items-center gap-3">
                <Checkbox
                  checked={category == itemCategory.name}
                  onCheckedChange={() => handleCategoryParams(itemCategory.name)}
                />
                <span>{itemCategory.name}</span>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="flex flex-col min-h-[1150px] pr-4 md:pr-8 lg:pr-10 xl:pr-14 relative flex-1 sm:pl-4 md:pl-6 sm:min-w-[640px] overflow-x-auto">
        <div className="inner-y-padding flex flex-row justify-between items-center">
          <p className="text-black font-normal text-sm">
            showing {productsObj.pagination.page}-{productsObj.pagination.pages}{" "}
            of {productsObj.pagination.total} results
          </p>
          <div  className="block sm:hidden flex flex-row gap-4 items-center">
            <p className="text-sm sm:text-base md:text-xl font-medium">Filter by:</p>
            <p onClick={()=> setShowFilter(true)} className="text-sm sm:text-base font-medium p-1.5 sm:p-2 border rounded-lg">
              Category
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
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
          <div
            className={`flex-1 ${
              productsObj.items.length > 0 ? "min-h-[500px]" : "h-auto"
            }`}
          >
            <div
              className={`my-6 md:my-8 lg:my-10 place-items-center ${
                productsObj.items.length > 0
                  ? "grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] grid-4"
                  : "flex justify-center items-center min-h-[400px]"
              }  gap-4 md:gap-6 lg:gap-8`}
            >
              {productsObj.items.length > 0 ? (
                productsObj.items.map((item, index) => (
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
              ) : (
                <p className="text-muted-foreground text-xl font-medium">
                  No Products Available
                </p>
              )}
            </div>
          </div>
          {
            products.items.length >= 1
            &&
          <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center items-center gap-6 md:gap-8">
            <ArrowLeft
              className={`${
                productsObj.pagination.page == 1 ? "text-[#e7e7e7]" : ""
              }`}
              onClick={() => {
                setProductsObj((prev) => {
                  const value = Math.max(1, prev.pagination.page - 1) || "1"
                  handleParams(value as string)
                  return {
                  ...prev,
                  pagination: {
                    ...prev.pagination,
                    page: Math.max(1, prev.pagination.page - 1),
                  },
                }});
              }}
            />
            {
              <ul className="flex flex-row gap-6">
                {pagination.map((pg, idx) =>
                  pg == "..." ? (
                    <li key={idx}>
                      <span>...</span>
                    </li>
                  ) : (
                    <li
                      onClick={() => {
                        handleParams(pg as string);
                        setProductsObj((prev) => {
                          return {
                            ...prev,
                            pagination: {
                              ...prev.pagination,
                              page: pg as number,
                            },
                          };
                        });
                      }}
                      key={idx}
                      className="size-6 text-sm cursor-pointer hover:bg-primary hover:text-white rounded-full flex justify-center items-center"
                    >
                      <span>{pg}</span>
                    </li>
                  )
                )}
              </ul>
            }
            <ArrowRight
              className={`${
                productsObj.pagination.page == productsObj.pagination.pages
                  ? "text-[#e7e7e7]"
                  : ""
              }`}
              onClick={() => {
                setProductsObj((prev) => {
                  const value = Math.min(prev.pagination.page + 1, prev.pagination.pages)|| "1"
                  handleParams(value as string)
                  return {
                  ...prev,
                  pagination: {
                    ...prev.pagination,
                    page: Math.min(
                      prev.pagination.page + 1,
                      prev.pagination.pages
                    ),
                  },
                }});
              }}
            />
          </div>
           }
        </div>
      </div>
    </div>
  )
}
