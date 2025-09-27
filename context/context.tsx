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

type contextType = {
    cartProduct: productType[]
    setCartProduct: Dispatch<SetStateAction<productType[]>>
}

const myContext = createContext< contextType | undefined>(undefined)


export default function ConxtextComp({children}:{children: ReactNode}){
    const [cartProduct, setCartProduct] = useState<productType[]>([])
    return (
        <myContext.Provider value={{cartProduct,setCartProduct}}>
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