/*eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Product2 from "@/components/Products2";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Filter, X} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getPagination } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { productType } from "@/context/context";
import ProductDetails from "./product-details";

type productObjType = {
  items: productType[];
  pagination: { page: number; pages: number; total: number };
};

export default function InventoryList({
  products,
}: {
  products: productObjType;
}) {
  const [productsObj, setProductsObj] = useState({
    items: products.items,
    pagination: {
      page: products.pagination.page,
      pages: products.pagination.pages,
      total: products.pagination.total,
    },
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<productType>({
    _id: "",
    barcode: "",
    category: "",
    description: "",
    name: "",
    image: "",
    price: { selling: 0, cost: 0 },
    stock: { quantity: 0 },
    type: "",
    salesPrice: { isActive: false },
    variantItems: [],
  });
  const [showFilter, setShowFilter] = useState(false)
  const changeStep = (num: number, product: productType) => {
    setStep(num);
    setSelectedProduct(product);
  };
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

  const handleStep = () => {
    setStep(1),
    setSelectedProduct({
      _id: "",
    barcode: "",
    category: "",
    description: "",
    name: "",
    image: "",
    price: { selling: 0, cost: 0 },
    stock: { quantity: 0 },
    type: "",
    salesPrice: { isActive: false },
    variantItems: [],
    })
  }


  // const search = searchParams.get("page") || ""
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

  const relatedProducts = products.items.filter((product) => {
    return (
      product.category.toLowerCase() ==
        selectedProduct.category.toLowerCase() &&
      product.name.toLowerCase() !== selectedProduct.name.toLowerCase()
    );
  });

  // console.log(relatedProducts);

  useEffect(() => {
    setProductsObj({
      items: products.items,
      pagination: {
        page: products.pagination.page,
        pages: products.pagination.pages,
        total: products.pagination.total,
      },
    });
  }, [products]);

  return step == 1 ? (
    <div className="relative main-padding flex flex-col sm:flex-row overflow-x-auto">
      <div className={`min-w-[200px] pt-4 md:pt-6 lg:pt-8 border-r border-black absolute sm:static top-0 left-0 bg-white z-10 pl-4 sm:pl-0 ${showFilter ? "block" : "hidden sm:block" }`}>
        <X onClick={()=>setShowFilter(false)} className="block sm:hidden absolute top-2 right-2" />
        <p className="font-medium text-base sm:text-xl border-b border-black mr-2">
          Filter Options
        </p>
        <p className="my-4 md:my-6 font-light text-base">Category</p>
        <div>
          <ul className="list-none text-xs sm:text-sm space-y-3">
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "diary&baking"}
                onCheckedChange={() => handleCategoryParams("diary&baking")}
              />
              <span>Diary & Baking</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "bakery"}
                onCheckedChange={() => handleCategoryParams("bakery")}
              />
              <span>Bakery</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "households"}
                onCheckedChange={() => handleCategoryParams("households")}
              />
              <span>Households</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "water&drinks"}
                onCheckedChange={() => handleCategoryParams("water&drinks")}
              />
              <span>Water & Drinks</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "liqour"}
                onCheckedChange={() => handleCategoryParams("liqour")}
              />
              <span>Liquor</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "pasta&rice"}
                onCheckedChange={() => handleCategoryParams("pasta&rice")}
              />
              <span>Pasta & Rice</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "stationeries"}
                onCheckedChange={() => handleCategoryParams("diary&baking")}
              />
              <span>Stationeries</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "babyitems"}
                onCheckedChange={() => handleCategoryParams("babyitems")}
              />
              <span>Baby Items</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "health&beauty"}
                onCheckedChange={() => handleCategoryParams("health&beauty")}
              />
              <span>Health & Beauty</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "snacks&sweets"}
                onCheckedChange={() => handleCategoryParams("snacks&sweets")}
              />
              <span>Snacks & Sweets</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "breakfast"}
                onCheckedChange={() => handleCategoryParams("breakfast")}
              />
              <span>Breakfast</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "fast_produce"}
                onCheckedChange={() => handleCategoryParams("fast_produce")}
              />
              <span>Fast Produce</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "condiments"}
                onCheckedChange={() => handleCategoryParams("condiments")}
              />
              <span>Condiments & spice</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "frozen"}
                onCheckedChange={() => handleCategoryParams("frozen")}
              />
              <span>Frozen Foods</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "pharmacy"}
                onCheckedChange={() => handleCategoryParams("pharmacy")}
              />
              <span>Pharmacy</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "canned_goods"}
                onCheckedChange={() => handleCategoryParams("canned_goods")}
              />
              <span>Canned goods</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "icecream"}
                onCheckedChange={() => handleCategoryParams("icecream")}
              />
              <span>Icecream & Deserts</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "pet_care"}
                onCheckedChange={() => handleCategoryParams("per_care")}
              />
              <span>Pet Care</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "gift_hampers"}
                onCheckedChange={() => handleCategoryParams("gift_hampers")}
              />
              <span>Gift Hampers</span>
            </li>
            <li className="flex flex-row items-center gap-3">
              <Checkbox
                checked={category == "kitchen_wares"}
                onCheckedChange={() => handleCategoryParams("kitchen_wares")}
              />
              <span>Kitchen wares</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1 sm:pl-4 md:pl-6 sm:min-w-[640px] overflow-x-auto">
        <div className="py-4 md:py-6 flex flex-row justify-between items-center">
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
          <div
            className={`${
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
                    handleFunc={changeStep}
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
  ) : step == 2 ? (
    <div className="main-padding">
      <ProductDetails rating={4} product={selectedProduct} handleFunc={handleStep} />
      {relatedProducts.length > 0 && (
        <>
          <p className="text-xl font-semibold mb-5">Related Products</p>
          <div className="flex flex-row flex-wrap gap-6 mb-6 md:mb-8 lg:mb-10">
            {relatedProducts.slice(0,2).map((item, index) => (
              <Product2
                key={index}
                imgPath={item.image}
                name={item.name}
                price={item.price.selling}
                rating={4}
                handleFunc={changeStep}
                item={item}
              />
            ))}
          </div>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}
