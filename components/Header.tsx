"use client"
import { ChevronDown, MapPin, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const NavItem = ({ name, path }: { name: string; path: string }) => {
    const location = usePathname()

    const isActive = (path: string) =>{
      return location == path ? "font-light" : "font-semibold" 
    }
    return (
      <li className="w-[120px]">
        <Link className={`w-full block text-center p-2 ${isActive(path)} hover:font-light transition-all duration-300 ease-linear`} href={path}>
          {name}
        </Link>
      </li>
    );
  };

  return (
    <header>
      <div className="main-padding py-2 bg-secondary flex justify-end">
        <p className="flex flex-row gap-2 items-center">
          <MapPin />
          <span>Maryland, Lagos</span>
        </p>
      </div>
      <div className="py-3 main-padding bg-accent flex flex-row justify-between">
        <Image src="/logo.svg" alt="logo image" height={60} width={80} />
        <div className="w-1/2 h-10 hidden md:flex gap-2 self-center">
          <div className="flex-1  relative">
            <Search className="absolute top-1/2 left-4 lg:left-6 -translate-y-1/2" />
            <Input className="py-2 bg-white w-full h-full pl-10 lg:pl-14" />
          </div>
          <div
            style={{ aspectRatio: "1/1" }}
            className=" h-full bg-primary text-white rounded-lg flex justify-center items-center"
          >
            <Search className="size-5" />
          </div>
        </div>
        <div className="flex flex-row item-center gap-4">
          <Link href={"/myaccount"} className="flex flex-row gap-2 items-center">
            <User />
            <span className="text-xs hidden lg:block">John Kush</span>
            <ChevronDown className="hidden lg:block" />
          </Link>
          <div className="flex gap-2 items-center">
            <ShoppingCart />
            <span className="hidden lg:block">Cart</span>
          </div>
        </div>
      </div>
      <div className="bg-accent main-padding w-full h-10 flex md:hidden gap-2 self-center">
        <div className="flex-1 relative">
          <Search className="absolute top-1/2 left-4 lg:left-6 -translate-y-1/2" />
          <Input className="py-2 bg-white w-full h-full pl-10 lg:pl-14" />
        </div>
        <div
          style={{ aspectRatio: "1/1" }}
          className=" h-full bg-primary text-white rounded-lg flex justify-center items-center"
        >
          <Search className="size-5" />
        </div>
      </div>
      <nav className="bg-accent main-padding">
        <ul className="py-5 flex flex-col md:flex-row  items-center md:justify-around">
          <NavItem name="Home" path="/home" />
          <NavItem name="Shop" path="/shop" />
          <NavItem name="About Us" path="/aboutus" />
          <NavItem name="Testimonials" path="/testimonials" />
        </ul>
      </nav>
    </header>
  );
}
