"use client"
import { Button } from '@/components/ui/button'
import { useContextValue } from '@/context/context'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React, {useState } from 'react'
import CartItem from '../component/cart-item'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import OrderSummary from '../component/order-summary'
import {useForm, Controller, SubmitHandler} from "react-hook-form"
import axios from 'axios'
import Loader from '@/components/ui/loader'


type IFormInput = {
    fullName: string,
    email: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    country: string  
}


const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function Page() {
    const {cartProduct, setCartProduct} = useContextValue()
    const {control, handleSubmit, formState: {errors}, watch} = useForm<IFormInput>({
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

    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        setLoading(true)
        const endpoint = `${baseUrl}/user/grocery-finance/generate-address-code`
        const payload = {...data}
        axios.post(endpoint, payload)
        .then((res)=>{
            console.log(res.data.shipbubbleAddressCode)
            setAddressCode(res.data.shipbubbleAddressCode)
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
        const cartArray = cartProduct.map((product) =>{
            return {
                productId : product._id,
                name : product.name,
                price: product.price.selling,
                quantity: product.stock.quantity,
                description: product.description,
                // weight: product.

            }
        })
        const payload = {
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

        console.log(payload)
    }

    const totalItems = cartProduct.reduce((numOfItem, item)=>{
      return item.stock.quantity + numOfItem
    },0)

    const subtotal = cartProduct.reduce((total, item)=>{
      return total + (item.stock.quantity * item.price.selling)
    },0)

//     useEffect(() => {
//     const handleBeforeUnload = (e: BeforeUnloadEvent) => {
//       e.preventDefault();
//       e.returnValue = ""; // Show default browser message
//     };
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [])

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
            <div className='space-y-3 md:space-y-5'>
                <p className='text-xl md:text-2xl font-medium'>Delivery Address</p>
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
                    <Button type='submit' variant={'secondary'} className='min-w-[150px]'>
                        {
                            loading ?
                            <Loader size={4} />
                            : "Verify Address"
                        }
                    </Button>
                </div>
                </form>
            </div>
            <OrderSummary
                totalItems={totalItems}
                subtotal={subtotal}
            >
                <Button onClick={initaiteGuestPurchase} variant={"default"} className="w-[200px]">
                    Pay Now
                </Button>
            </OrderSummary>
        </div>
    </div>
  )
}
