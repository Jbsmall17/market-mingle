"use client"
import { productType, useContextValue } from '@/context/context'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductDetails from '../../shop/component/product-details'
import Product2 from '@/components/Products2'
import Loader from '@/components/ui/loader'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
  const {productsObj, setProductsObj} = useContextValue()
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
  const [loading, setLoading] = useState(false)
  const {name} = useParams()
  const getAProducts = () =>{
    const endpoint = `${baseUrl}/user/grocery-finance/groceries?name=${name}`
    setLoading(true)
    axios.get(endpoint)
    .then((res)=>{
      console.log(res.data.products.items[0])
      const product = res.data.products.items[0]
      setSelectedProduct(product)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  const relatedProducts = productsObj.items.filter((product) => {
    return (
      product.category.toLowerCase() ==
        selectedProduct.category.toLowerCase() &&
      product.name.toLowerCase() !== selectedProduct.name.toLowerCase()
    );
  });

  useEffect(()=>{
      getAProducts()
      const product = sessionStorage.getItem("products")
      if(productsObj.items.length === 0 && product){
        const parsedProduct = JSON.parse(product)
        setProductsObj({
          items: parsedProduct.items,
            pagination: {
            page: parsedProduct.pagination.page,
            pages: parsedProduct.pagination.pages !== 0 ?parsedProduct.pagination.pages : 0,
            total: parsedProduct.pagination.total,
        }
        })
      }
    }, [])

  return (
    <>
    {
      !loading && selectedProduct._id !== "" 
      ? <div className='main-padding'>
      <ProductDetails 
        // rating={4} 
        product={selectedProduct} 
        // handleFunc={handleStep} 
      />
      {relatedProducts.length > 0 && (
        <>
          <p className="text-xl font-semibold mb-5">Related Products</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] sm:grid-cols-3 xl:grid-cols-5 gap-6 mb-6 md:mb-8 lg:mb-10">
            {relatedProducts.slice(0,2).map((item, index) => (
              <Product2
                key={index}
                imgPath={item.image}
                name={item.name}
                price={item.price.selling}
                rating={4}
                // handleFunc={changeStep}
                item={item}
              />
            ))}
          </div>
        </>
      )}
    </div>
      : 
      <div className='min-h-[400px] flex justify-center items-center'>
        <Loader size={8} />
      </div>
    }
    </>
  )
}
