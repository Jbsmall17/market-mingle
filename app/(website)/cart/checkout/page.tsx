"use client"
import { Button } from '@/components/ui/button'
import { useContextValue } from '@/context/context'
import { ArrowLeft} from 'lucide-react'
import Link from 'next/link'
import React, {useRef, useState } from 'react'
import CartItem from '../component/cart-item'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import OrderSummary from '../component/order-summary'
import {useForm, Controller, SubmitHandler} from "react-hook-form"
import axios from 'axios'
import Loader from '@/components/ui/loader'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'


type IFormInput = {
    fullName: string,
    email: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    country: string  
}

type courier = {
    courier_id: string,
    courier_name: string,
    service_type: string,
    waybill: false,
    on_demand: true,
    ratings: number,
    connected_account: false,
    rate_card_amount: 591,
    delivery_eta: string,
    delivery_eta_time: string,
    vat: number,
    total: number,
    discount: {
        percentage: number,
        symbol: string,
        discounted: number
    },
}

type CourierCardType = {
    courier : courier,
    selected: boolean,
    onSelect: () => void
}


const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
    const router = useRouter()
    const {cartProduct, setCartProduct} = useContextValue()
    const divRef = useRef<HTMLDivElement>(null)
    const courierRef = useRef<HTMLDivElement>(null)
    const checkoutRef = useRef<HTMLDivElement>(null)
    const {control, handleSubmit, watch} = useForm<IFormInput>({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            country: ""
        }
    })
    const [loading, setLoading] = useState(false)
    const [addressCode, setAddressCode] = useState("")
    const [couriers, setCouriers] = useState<courier[]>([])
    const [selectedCourier, setSelectedCourier] = useState({
        courier_id : "",
        total: 0,
        discount: {
        discounted: 0
    }
    })
    const [isCheckout, setIsCheckout] = useState(false)

    const clearCart = () => {
        setCartProduct([])
    }
    const fullName = watch("fullName")
    const email = watch("email")
    const phone = watch("phone")
    const street = watch("street")
    const city = watch("city")
    const state = watch("state")
    const country = watch("country")

    const cartArray = cartProduct.map((product) =>{
            return {
                productId : product._id,
                name : product.name,
                price: product.price.selling,
                quantity: product.stock.quantity,
                description: product.description,
            }
        })

    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        setLoading(true)
        const endpoint = `${baseUrl}/user/grocery-finance/generate-address-code`
        const payload = {
            ...data,
            items: [...cartArray]
        }
        axios.post(endpoint, payload)
        .then((res)=>{
            setAddressCode(res.data.shipbubbleAddressCode)
            const couriers : courier[] = res.data.shipping.raw.couriers
            setCouriers([...couriers])
            courierRef.current?.scrollIntoView({
                behavior: "smooth"
            })

        })
        .catch((err)=>{
            console.log(err.response ? err.respnse.message : "error generating code")
            setAddressCode("")
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const initaiteGuestPurchase = () => {
        const endpoint = `${baseUrl}/user/grocery-finance/initiate-guest-purchase/paystack`
        if(cartProduct.length === 0) return
        if(addressCode == ""){
            if(divRef.current){
                divRef.current.scrollIntoView({
                    behavior: 'smooth'
                })
            }
            return 
        } 
        const payload = {
            client : "web",
            chosenCourier: {
                ...selectedCourier
            },
            purchaser : {
                fullName : fullName,
                email: email,
                phone : phone,
                address : {
                    street: street,
                    city: city,
                    state: state,
                    country: country
                },
                shipbubbleAddressCode: addressCode 
            },
            items: [
                ...cartArray
            ],
            paymentMethod: "card"
        }
        setIsCheckout(true)
        axios.post(endpoint,payload)
        .then((res)=>{
            router.push(res.data.data.checkoutLink)
        })
        .catch((err)=>{
            console.log(err.respnse ? err.response.message : "error initiating purchase")
        })
        .finally(()=>{
            setIsCheckout(false)
        })
    }

    const totalItems = cartProduct.reduce((numOfItem, item)=>{
      return item.stock.quantity + numOfItem
    },0)

    const subtotal = cartProduct.reduce((total, item)=>{
      return total + (item.stock.quantity * item.price.selling)
    },0)

    const handleSelectCourier = (courier : courier) => {
        setSelectedCourier(courier)
        checkoutRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    const CourierCard = ({courier, selected, onSelect}: CourierCardType) => {
       return (
        <Card
            onClick={onSelect}
            className={cn(
                "flex items-center justify-between gap-3 p-3 mb-2 cursor-pointer border transition-all",
                selected ? "border-primary ring-2 ring-primary bg-primary/5" : "hover:border-primary/60"
        )}>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-base truncate">{courier.courier_name}</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{courier.service_type}</span>
                </div>
                <span className="text-xs text-gray-500 truncate">ETA: {courier.delivery_eta_time} ({courier.delivery_eta})</span>
                <span className="text-xs text-gray-500">Ratings: {courier.ratings} ★</span>
            </div>
            <div className="flex flex-col items-end min-w-[100px]">
                <span className="font-bold text-primary text-lg">₦{courier.total.toLocaleString()}</span>
                {courier.discount.discounted > 0 && (
                    <span className="text-xs text-green-600">-{courier.discount.symbol}{courier.discount.percentage}%</span>
                )}
            </div>
            {selected && <span className="ml-4 text-primary font-medium">Selected</span>}
        </Card>
       ) 
    } 

  return (
    <div className='main-padding'>
        <div className="inner-y-padding">
            <Link href={"/cart"}>
                <Button variant={"outline"}>
                    <ArrowLeft className="inline mr-1" />
                    <span className="leading-none">cart</span>
                </Button>
            </Link>
            <div>
                <p className="title font-bold title-container-margin-bottom text-center">Shopping Cart</p>
                <p className="text-gray-400 sub-title font-medium text-center">
                    Home / Shopping Cart / Checkout
                 </p>
            </div>
            {
                cartProduct.length > 0 ? (
                    <div className='mt-4 md:mt-6 space-y-4'>
                        {cartProduct.map((cartItem) => (
                            <CartItem
                                id={cartItem._id}
                                key={cartItem._id}
                                img={cartItem.image}
                                name={cartItem.name}
                                price={cartItem.price.selling}
                                quantity={cartItem.stock.quantity}
                            />
                        ))}
                    </div>
                ) : (
                   <div className="mt-4 md:mt-6 min-h-[400px] flex justify-center items-center  border border-primary rounded-md">
                        <p className="text-muted-foreground text-xl font-medium">
                            No Item in the Cart
                        </p>
                    </div> 
                )
            }
            <div className="text-end my-2 sm:my-4">
                <span onClick={clearCart} className="text-sm text-black underline hover:no-underline">
                    Clear Shopping Cart
                </span>
            </div>
            <div ref={divRef} className='space-y-3 md:space-y-5'>
                <p className='text-xl md:text-2xl font-medium'>Delivery Information </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                    <div className='space-y-1.5'>
                        <Label htmlFor='fullName' className='text-base md:text-xl'>Full Name</Label>
                        <Controller
                            control={control}
                            name='fullName'
                            rules={{required:true}}
                            render={({field})=>(
                                <Input {...field} id="fullName" type='text' placeholder='John Doe' />
                            )}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='email' className='text-base md:text-xl'>Email</Label>
                        <Controller
                            name='email'
                            control={control}
                            rules={{required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
                            render={({field})=>(
                                <Input {...field} id="email" type='text' placeholder='youremail@example.com' />
                            )}   
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='phone' className='text-base md:text-xl'>Phone Number</Label>
                        <Controller
                            control={control}
                            name='phone'
                            rules={{required: true}}
                            render={({field}) =>(
                                <Input {...field} id="phone" type='text' placeholder='+23470654768' />
                            )}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='street' className='text-base md:text-xl'>Street</Label>
                        <Controller
                            control={control}
                            name="street"
                            rules={{required: true}}
                            render={({field}) => (
                                <Input {...field} id="street" type='text' placeholder='4 street name' />
                            )}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='city' className='text-base md:text-xl'>City</Label>
                        <Controller
                            control={control}
                            name="city"
                            rules={{required: true}}
                            render={({field}) => (
                                <Input {...field} id="city" type='text' placeholder='city' />
                            )}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='state' className='text-base md:text-xl'>State</Label>
                        <Controller
                            control={control}
                            name="state"
                            rules={{required: true}}
                            render={({field}) =>(
                                <Input {...field} id="state" type='text' placeholder='state' />
                            )}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <Label htmlFor='country' className='text-base md:text-xl'>Country</Label>
                        <Controller
                            control={control}
                            name='country'
                            rules={{required: true}}
                            render={({field})=>(
                                <Input {...field} id="country" type='text' placeholder='country' />
                            )}
                        />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button type='submit' variant={'secondary'} className='min-w-[150px] mt-3'>
                        {
                            loading ?
                            <Loader size={4} />
                            : "Verify Address"
                        }
                    </Button>
                </div>
                </form>
            </div>
            <div ref={courierRef} className='space-y-3 md:space-y-5'>
            {
                couriers.length > 0
                &&
                <>
                <p className='text-xl md:text-2xl font-medium'>Couriers</p>
                <div>
                    {
                        couriers.map((courier)=>(
                            <CourierCard
                                key={courier.courier_id}
                                courier={courier}
                                selected={selectedCourier?.courier_id === courier.courier_id}
                                onSelect={() => handleSelectCourier(courier)}
                            />
                        ))
                    }
            </div>
            </>
            }
            </div>
            <div ref={checkoutRef}>
            <OrderSummary
                totalItems={totalItems}
                subtotal={subtotal}
                deliveryFee={selectedCourier.total}
                discount={selectedCourier.discount.discounted}
            >
                <Button onClick={initaiteGuestPurchase} variant={"default"} className="w-[200px] flex justify-center items-center">
                    {
                        isCheckout
                        ?
                        <Loader size={4} />
                        : "Pay Now"
                    }
                </Button>
            </OrderSummary>
            </div>
        </div>
    </div>
  )
}
