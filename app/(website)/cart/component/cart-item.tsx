import { useContextValue } from "@/context/context";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

type cartItemType = {
    id: string,
  img: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({ img, name, price, quantity, id }: cartItemType) => {
    const { setCartProduct } = useContextValue();
    const decreaseCount = () =>{
        const newQuantity = Math.max(1, quantity - 1)
        setCartProduct((prev)=>{
            return prev.map((product)=> product._id === id ? {...product, stock: { quantity: newQuantity }} : product)
        })
    } 
    const IncreaseProductCount = () =>{
        const newQuantity = quantity + 1
        setCartProduct((prev)=>{
            return prev.map((product)=> product._id === id ? {...product, stock: { quantity: newQuantity }} : product)
        })
    }

    const handleDelete = () =>{
        setCartProduct((prev)=>{
            return prev.filter((product)=> product._id !== id)
        })
    }

    return (
      <div className="flex flex-row gap-4 items-start sm:items-center mx-auto max-w-screen-lg border border-[#eaeaea] px-3 md:px-5 py-2 md:py-3 lg:py-5 relative rounded-2xl">
        <div onClick={handleDelete} className="absolute top-2 right-2 size-6 bg-white hover:bg-red-200 rounded-full flex flex-row justify-center items-center">
            <Trash className="text-red-500 size-4" />
        </div>
        {/* <div className=""> */}
          <div className="h-auto flex justify-center items-center">
            <Image
              src={img ? img : "/placeholder.svg"}
              alt={`${name}'s image`}
              width={100}
              height={50}
              className="object-cover w-[75px] sm:w-[100px]"
            />
          </div>
        <div className="flex-1 flex flex-col items-start sm:flex-row justify-between">
        <div className="space-y-1 font-medium">
            <p className="text-sm sm:text-base">{name}</p>
            <p className="text-base sm:text-xl text-primary">
              ₦{price.toLocaleString()}/unit
            </p>
          </div>
        <div className="space-y-2">
          <p className="text-sm sm:text-base">Quantity : {quantity}</p>
          <div className="p-1 flex flex-row justify-between rounded-sm border-2 border-primary">
            <div
                onClick={decreaseCount} 
                className={`size-4 sm:size-5 flex justify-center items-center border-2 ${quantity!== 1 ? "border-primary" : "text-[#d0efc2]"} rounded-full`}>
              <Minus className={`size-3 sm:size-4 ${quantity !== 1 ? "text-primary" : "text-[#d0efc2]" }`} />
            </div>
            <span className="font-medium leading-none">{quantity}</span>
            <div
                onClick={IncreaseProductCount} 
                className="size-4 sm:size-5 flex justify-center items-center border-2 border-primary rounded-full">
              <Plus className="size-3 sm:size-4 text-primary fill-current" />
            </div>
          </div>
        </div>
        </div>
        {/* </div> */}
      </div>
    );
  };

export default CartItem