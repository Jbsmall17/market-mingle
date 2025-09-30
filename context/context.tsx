"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type productType = {
  _id: string;
  barcode: string;
  category: string;
  description: string;
  name: string;
  image: string;
  price: { selling: number; cost: number };
  stock: { quantity: number };
  type: string;
  salesPrice: { isActive: boolean };
  variantItems: string[];
};

type productsObjType = {
    items : productType[],
    pagination: {
        page: number,
        pages: number,
        total: number,
    }
}

type contextType = {
    cartProduct: productType[]
    setCartProduct: Dispatch<SetStateAction<productType[]>>,
    productsObj: productsObjType, 
    setProductsObj: Dispatch<SetStateAction<productsObjType>>
}

const myContext = createContext< contextType | undefined>(undefined)


export default function ConxtextComp({children}:{children: ReactNode}){
    const [cartProduct, setCartProduct] = useState<productType[]>([])
    const [productsObj, setProductsObj] = useState<productsObjType>({
        items: [],
        pagination: {
          page: 1,
          pages: 1,
          total: 0,
        },
      });
    return (
        <myContext.Provider value={{cartProduct,setCartProduct, productsObj, setProductsObj}}>
            {children}
        </myContext.Provider>
    )
}


export function useContextValue(){
    const contextValue = useContext(myContext)
    if(!contextValue){
        throw new Error("context value is not defined")
    }
    return contextValue
}