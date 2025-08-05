import Image from "next/image";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-row">
      <section className="hidden sm:flex sm:w-[300px] lg:w-[400px] bg-[#62a643] p-4 md:p-6 justify-center items-center">
        <div>
          <Image
            src="/cart-image.svg"
            alt="cart image"
            className="w-[90%] h-auto"
            width={250}
            height={400}
          />
          <p className="text-black text-xl font-medium">
            Your One-Stop Shop
            <br />
            for <span className="text-primary">Quality Groceries</span>
          </p>
        </div>
      </section>
      <section className="flex-1">
        {children}
      </section>
    </main>
  );
}
