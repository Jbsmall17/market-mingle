import React from 'react'
import InventoryList from './component/inventory-list'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default async function page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const apiUrl = new URL(
    `${baseUrl}/user/grocery-finance/groceries`
  );

  // Ensure searchParams is defined and destructure safely
  const page = typeof searchParams?.page === 'string' ? searchParams.page : Array.isArray(searchParams?.page) ? searchParams?.page[0] : "1";
  const name = typeof searchParams?.name === 'string' ? searchParams.name : Array.isArray(searchParams?.name) ? searchParams?.name[0] : "";
  const category = typeof searchParams?.category === 'string' ? searchParams.category : Array.isArray(searchParams?.category) ? searchParams?.category[0] : "";
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

