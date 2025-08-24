'use client';
import tissue from "@/components/img/tissue.png";
import oil from "@/components/img/oil.png";
import rice from "@/components/img/rice.png";
import { useRouter } from "next/navigation";

export default function MyAccountPage() {
  const router = useRouter()

  
  return (
    <div>
        <main className="container mx-auto p-4 mt-10">
           <div className="text-center">
                <h1 className="text-3xl font-bold mb-5">My Account</h1>
                <h2 className="text-gray-400 text-2xl  font-bold">Home / My Account</h2>
            </div>
            <div className="mt-5 flex flex-col md:flex-row gap-16 md:gap-20 lg:gap-24 xl:gap-30 justify-around p-10">
                <div className="w-full md:w-1/4">
                     <div onClick={() => router.push("/myaccount")} className=" mb-5 border-1 hover:cursor-pointer border-solid hover:bg-gray-100 border-gray-800  p-3 md:p-4 rounded-lg">
                        Personal Information
                    </div>
                    <div onClick={() => router.push("/myaccount/myorders")} className=" mb-5 hover:cursor-pointer text-white  hover:opacity-80 bg-orange-400 p-3 md:p-4 rounded-lg">
                      My Orders
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid hover:bg-gray-100 border-gray-800  p-3 md:p-4 rounded-lg">
                      Manage Address
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid hover:bg-gray-100 border-gray-800  p-3 md:p-4 rounded-lg">
                      Payment Method
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid hover:bg-gray-100 border-gray-800  p-3 md:p-4 rounded-lg">
                      Password Manager
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid hover:bg-gray-100 border-gray-800  p-3 md:p-4 rounded-lg">
                      Log Out
                    </div>
                </div>
                <div className="w-full md:w-3/4 rounded-lg ">
                  <div className="md:overflow-x-auto">
                    <table className="
                      w-full
                      text-left table-auto border-separate rounded-lg border bg-[#FFA32D]
                      text-xs p-1
                      sm:text-sm sm:p-2
                      md:w-auto md:text-base md:p-2
                    ">
                      <thead>
                        <tr>
                          <th className="font-normal border-r border-gray-900 p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">Order ID</th>
                          <th className="font-normal border-r border-gray-900 p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">Transaction ID</th>
                          <th className="font-normal p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">Delivered Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-bold border-r border-gray-900 p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">SKU-3457FGSTY</td>
                          <td className="font-bold border-r border-gray-900 p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">TRNS345232</td>
                          <td className="font-bold p-1 text-xs sm:p-2 sm:text-sm md:p-2 md:text-base">29, JULY 2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>                
                  <div className="border-1 border-solid mt-4 border-gray-500 p-6 rounded-lg p-5">
                    <h1 className="font-bold">Order Details</h1>
                    <div className="flex justify-between md:flex-row gap-4 mt-4">
                        <div>
                          <p>Products</p>
                        </div>
                        <div className="hidden md:block">
                          <p>Subtotal</p>
                        </div>
                    </div>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <img src={tissue.src} alt="Tissue paper" className="w-20 h-16 mr-4" />
                          <p className="font-bold">Tissue Paper</p>
                        </div>
                        <div className="flex items-center">
                          <p><span className="inline sm:hidden font-bold">Price: </span>3000NGN/points</p>
                        </div>
                    </div>
                    <hr className="block sm:hidden mt-4 border-gray-500"/>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <img src={oil.src} alt="Cooking Oil" className="w-20 h-16 mr-4" />
                          <p className="font-bold">Cooking Oil</p>
                        </div>
                        <div className="flex items-center">
                          <p><span className="inline sm:hidden font-bold">Price: </span>10000NGN/points</p>
                        </div>
                    </div>
                    <hr className="block sm:hidden mt-4 border-gray-500"/>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <img src={rice.src} alt="MamaGold Rice" className="w-20 h-16 mr-4" />
                          <p className="font-bold">MamaGold Rice</p>
                        </div>
                        <div className="flex items-center">
                          <p><span className="inline sm:hidden font-bold">Price: </span>3000NGN/points</p>
                        </div>
                    </div>
                    <hr className="mt-10 border-gray-900"/>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <p className="font-bold">Delivery Fee:</p>
                        </div>
                        <div className="flex items-center">
                          <p>2500NGN/points</p>
                        </div>
                    </div>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <p className="font-bold">Coupon Discount:</p>
                        </div>
                        <div className="flex items-center">
                          <p>0NGN/points</p>
                        </div>
                    </div>
                    <hr className="mt-10 border-gray-900"/>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                        <div className="flex items-center">
                          <p className="font-bold">Total:</p>
                        </div>
                        <div className="flex items-center">
                          <p>9500NGN/points</p>
                        </div>
                    </div>
                    <div className="flex justify-left md:flex-row flex-wrap gap-4 mt-8">
                      <div className="flex items-center">
                        <p className=" bg-[#F8BD0075] text-black px-8 py-2 rounded-full">Accepted</p>
                      </div>
                      <div className="flex items-center">
                        <p>Your Order has been accepted</p>
                      </div>
                     </div>
                    <div className="flex justify-between md:flex-row flex-wrap gap-4 mt-8">
                      <div className="flex items-center">
                        <button className="bg-[#285521] hover:bg-green-700 transition-all duration-600 text-white px-12 py-2 hover:cursor-pointer rounded-full mt-4">Track Order</button>
                      </div>
                      <div className="flex items-center">
                        <button className="border-[#285521] border-1 border-solid text-[#285521] hover:bg-green-900 transition-all duration-600 hover:text-white hover:cursor-pointer px-12 py-2 rounded-full mt-4">Invoice</button>
                      </div>
                      <div className="flex items-center">
                        <button className="text-[#C80F0F] hover:text-red-500  text-2xl font-bold hover:cursor-pointer mt-4">Cancel Order</button>
                      </div>
                    </div>  
                   
                </div>
                </div>
            </div>
        </main>
    </div>
  );
}