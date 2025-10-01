/*eslint-disable @typescript-eslint/no-explicit-any*/
import React from 'react'
import InventoryList from './component/inventory-list'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default async function Page({
  searchParams
}: {
  searchParams : any
}) {

const categoryEndpoint = `${baseUrl}/user/grocery-finance/product-categories`

  const apiUrl = new URL(
    `${baseUrl}/user/grocery-finance/groceries`
  );

  const { page = "1", name = "", category = "" } = await searchParams;

  if (name) apiUrl.searchParams.set("name", name);
  if (category) apiUrl.searchParams.set("category", category);
  apiUrl.searchParams.set("page", page);

  try{
    const [productResponse, categoryResponse] = await Promise.all([
    fetch(apiUrl.toString(), {cache: "no-store"}),
    fetch(categoryEndpoint, {cache: "no-store"})
  ]) 
    // const response = await fetch(apiUrl.toString(), {cache: "no-store"}) 
    if(!productResponse.ok){
      throw new Error("Failed to fetch products")
    }
    if(!categoryResponse.ok){
      throw new Error("Failed to fetch category")
    }

    const productData = await productResponse.json()
    const categoryData = await categoryResponse.json()
    const products = productData.products
    const category = categoryData.data
    console.log(products)
    return (
      <InventoryList products={products} categoryArray={category} />
    )
  }catch(error){
    console.log(error)
    return (
      <InventoryList
        products={{
          items: [],
          pagination: { page: 1, pages: 1, total: 0 },
        }}
        categoryArray={[]}
      />
    )
  }
}

