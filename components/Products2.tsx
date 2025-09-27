import { productType, useContextValue } from "@/context/context";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";



const Product2 = ({
    imgPath,
    name,
    rating,
    price,
    weight,
    actualPrice,
    handleFunc,
    item,
  }: {
    imgPath: string;
    name: string;
    rating: number;
    price: number;
    weight?: string;
    actualPrice?: number;
    handleFunc: (num: number, product: productType) => void,
    item: productType,
  }) => {
    const { setCartProduct } = useContextValue();
    const ratingArr = [1, 2, 3, 4, 5];
    console.log(ratingArr, rating)
    const handleClick = () => {
        handleFunc(2,item)
    }

    const addToCart = () => {
      const product = {
        ...item,
        stock: { quantity: 1 }
      }
    setCartProduct((prev) => {
      const findProduct = prev.find(
        (product) => product._id === item._id
      );
      if (!findProduct) {
        return [...prev, product];
      } else {
        return prev;
      }
    });
  };

    return (
      <div
        className={`w-full h-auto relative rounded-lg bg-white border border-[#62a643]`}
      >
        <div
          onClick={handleClick}
          className={`cursor-pointer h-[62.5%] bg-[#f9fef6] relative rounded-tl-lg rounded-tr-lg flex justify-center items-center `}
        >
          <div className="bg-primary absolute top-2 right-2 size-6 rounded-full flex justify-center items-center">
            <Heart className="size-4 text-white" />
          </div>
            <Image 
            src={imgPath ? imgPath : "/placeholder.svg"} 
            alt={`${name}'s image`} 
            className="h-[120px] object-cover"
            width={60} 
            height={120} 
            />
        </div>
        <div className="px-2 py-1 h-auto space-y-1">
          <p title={name.split("(")[0]} className="font-medium text-base sm:text-xl">{name.split("(")[0].length > 15 ? `${name.split("(")[0].substring(0,15)}...`: name.split("(")[0]}</p>
          {/* <p className="flex gap-1 text-[#98905c]">
            {ratingArr.map((fig, idx) => {
              if (fig <= rating) {
                return <Star className="size-4 fill-current" key={idx} />;
              } else if (fig - rating < 1 && fig - rating > 0) {
                return <StarHalf className="size-4" key={idx} />;
              } else {
                return <Star key={idx}  className="size-4"/>;
              }
            })}
          </p> */}
          <p className="text-xl text-primary font-semibold">
            ₦{price.toLocaleString()}
            {weight && <span className="text-[#c4c4c4]">/{weight}kg</span>}
            {actualPrice && (
              <span className="text-[#c4c4c4] line-through">
                ₦{actualPrice}
              </span>
            )}
          </p>
          <div className="cursor-pointer absolute bottom-0 right-0 bg-secondary size-8 flex justify-center items-center text-white rounded-br-lg">
            <ShoppingCart 
              onClick={addToCart} 
            />
          </div>
        </div>
      </div>
    );
  };

export default Product2