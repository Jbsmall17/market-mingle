'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newletter from "@/components/Newletter";
import image from "@/components/img/profilepic.png";
import { useState } from "react";

export default function MyAccountPage() {
  const [gender, setGender] = useState("");
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  
  return (
    <div>
      <Header />
        <main className="container mx-auto p-4 mt-10">
           <div className="text-center">
                <h1 className="text-3xl font-bold mb-5">My Account</h1>
                <h2 className="text-gray-400 text-2xl  font-bold">Home / My Account</h2>
            </div>
            <div className="mt-5 flex flex-col md:flex-row gap-30 justify-around p-10">
                <div className="md:w-1/4">
                    <div className="text-center mb-5 hover:cursor-pointer text-white bg-orange-400 p-5 rounded-lg">
                      Personal Information
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid border-gray-800 p-5 rounded-lg">
                      My Orders
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid border-gray-800 p-5 rounded-lg">
                      Manage Address
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid border-gray-800 p-5 rounded-lg">
                      Payment Method
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid border-gray-800 p-5 rounded-lg">
                      Password Manager
                    </div>
                     <div className=" mb-5 border-1 hover:cursor-pointer border-solid border-gray-800 p-5 rounded-lg">
                      Log Out
                    </div>
                </div>
                <div className=" md:w-3/4 rounded-lg ">
                    <img src={image.src} alt="Profile picture" className="w-30 h-30 mr-5" />
                    <div className="mt-8 flex flex-col md:flex-row gap-10 justify-around ">
                       <div className="md:w-1/2">
                         <h3 className="font-bold">First Name *</h3>
                         <input type="text" className="md:w-full p-2 mt-5 border-1 border-solid border-gray-900 rounded-full"/>
                       </div>
                        <div className="md:w-1/2">
                          <h3 className="font-bold">Last Name *</h3>
                          <input type="text" className="md:w-full p-2 mt-5 border-1 border-solid border-gray-900 rounded-full" />
                       </div>
                    </div>
                    <div className=" mt-10">
                          <h3 className="font-bold">Email Address *</h3>
                          <input type="text" className="w-full mt-5 p-2 border-1 border-solid border-gray-900 rounded-full" />
                    </div>
                    <div className=" mt-10">
                          <h3 className="font-bold">Phone Number *</h3>
                          <input type="text" className=" w-full mt-5 p-2 border-1 border-solid border-gray-900 rounded-full" />
                    </div>
                   <div className="md:w-full mt-10">
                      <h3 className="font-bold">Gender *</h3>
                      {/* Gender Dropdown */}
                      <div className="relative mt-5">
                        <button
                          type="button"
                          className="w-full p-2 hover:cursor-pointer border-1 border-solid border-gray-900 rounded-full flex items-center justify-between bg-white"
                          onClick={() => setShowGenderDropdown((prev) => !prev)}
                        >
                          <span>{gender || "Select Gender"}</span>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {showGenderDropdown && (
                          <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            {["Male", "Female", "Rather not say"].map((option) => (
                              <li
                                key={option}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setGender(option);
                                  setShowGenderDropdown(false);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <button className="mt-10 bg-green-800 text-white p-2 hover:cursor-pointer md:w-90 rounded-full">
                      Update Changes
                    </button>
                </div>
            </div>
        </main>
      <Newletter />
      <Footer />
    </div>
  );
}