/*eslint-disable @typescript-eslint/no-explicit-any*/
import React from 'react'
import InventoryList from './component/inventory-list'

const baseUrl = process.env.NEXT_PUBLIC_API_URL
console.log(baseUrl)
export default async function page({
  searchParams
}: {
  searchParams : any
}) {

   const apiUrl = new URL(
    `${baseUrl}/user/grocery-finance/groceries`
  );

  const { page = "1", name = "", category = "" } = searchParams;
  console.log(page, name, category);

  if (name) apiUrl.searchParams.set("name", name);
  if (category) apiUrl.searchParams.set("category", category);
  apiUrl.searchParams.set("page", page);

  try{
    const response = await fetch(apiUrl.toString(), {cache: "no-store"}) 
    if(!response.ok){
      throw new Error("Failed to fetch products")
    }

    const data = await response.json()
    const products = data.products
    return <InventoryList products={products} />
  }catch(error){
    console.log(error)
    return (
      <InventoryList
        products={{
          items: [],
          pagination: { page: 1, pages: 1, total: 0 },
        }}
      />
    )
  }
}

