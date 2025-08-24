import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import Image from "next/image";

const Product = ({
    imgPath,
    name,
    rating,
    price,
    weight,
    type,
    actualPrice,
    handleFunc
  }: {
    imgPath: string;
    name: string;
    rating: number;
    price: number;
    weight?: string;
    type: string;
    actualPrice?: number;
    handleFunc?: (num: number) => void
  }) => {
    const ratingArr = [1, 2, 3, 4, 5];

    const handleClick = () => {
        if(!handleFunc) return
        handleFunc(2)
    }

    return (
      <div
        onClick={handleClick}
        className={`cursor-pointer w-[200px] h-[250px] relative rounded-lg bg-white ${
          type === "second" || type=== "third" ? "border border-[#62a643]" : "border-none"
        }`}
      >
        <div
          className={`h-[62.5%] ${
            type === "first" ? "bg-[#a6cf92]": type === "second" ? "bg-white"  : "bg-[#f9fef6]"
          } relative rounded-tl-lg rounded-tr-lg flex justify-center items-center `}
        >
          {type === "second" && (
            <div className="text-white text-sm px-1.5 absolute top-3 left-3 inline rounded-tr-lg rounded-br-lg bg-secondary">
              15% off
            </div>
          )}
          <div className="bg-primary absolute top-2 right-2 size-6 rounded-full flex justify-center items-center">
            <Heart className="size-4 text-white" />
          </div>
          {
            type !== "third"
            ? <Image 
            src={imgPath} 
            alt={`${name}'s image`} 
            width={60} height={80} 
            />
            : 
            <Image 
            src={imgPath} 
            alt={`${name}'s image`} 
            className="h-[120px] object-cover"
            width={60} 
            height={120} 
            />
          }
        </div>
        <div className="px-2 h-auto">
          <p className="text-center mb-2 font-semibold text-xl">Cooking oil</p>
          <p className="flex gap-1 text-[#98905c]">
            {ratingArr.map((fig, idx) => {
              if (fig <= rating) {
                return <Star className="size-4 fill-current" key={idx} />;
              } else if (fig - rating < 1 && fig - rating > 0) {
                return <StarHalf className="size-4" key={idx} />;
              } else {
                return <Star key={idx}  className="size-4"/>;
              }
            })}
          </p>
          <p className="mt-1 text-xl text-primary font-semibold">
            ₦{price.toString()}
            {weight && <span className="text-[#c4c4c4]">/{weight}kg</span>}
            {actualPrice && (
              <span className="text-[#c4c4c4] line-through">
                ₦{actualPrice}
              </span>
            )}
          </p>
          <div className="absolute bottom-0 right-0 bg-secondary size-8 flex justify-center items-center text-white rounded-br-lg">
            <ShoppingCart />
          </div>
        </div>
      </div>
    );
  };

export default Product