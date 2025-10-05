import Image from 'next/image'
import React from 'react'

const Item = ({image, name, price, unit_price}:{image: string, name: string, price: number, unit_price: number}) =>{
    return (
      <div className="flex flex-row gap-3 md:gap-5 lg:gap-7">
        <div className="w-[100px] lg:w-[125px] h-[100px] lg:h-[125px] rounded-sm border border-black flex justify-center items-center">
          <Image
            src={image}
            alt={`${name}'s image`}
            className="object-contain w-[85%]"
            width={75}
            height={75}
          />
        </div>
        <div className="text-base md:text-xl flex-1 flex flex-col sm:flex-row  justify-center sm:justify-between items-end sm:items-center">
          <p className="font-medium capitalize">{name}</p>
          <div>
            <p className="text-primary">
              ₦{price.toLocaleString()}
            </p>
            <p className='text-end text-xs text-muted-foreground'>
              (₦{unit_price.toLocaleString()}/unit)
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default Item