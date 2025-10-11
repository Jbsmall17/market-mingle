import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import CarouselComp from "./component/carousel-comp";
import { productType } from "@/context/context";
import ProductList from "./component/product-list";
import Link from "next/link";
import Testimonials from "./component/testimonials";
import ScrollToHashHandler from "@/components/ScrollToHandler";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default async function Home() {
  const Category = ({ imgPath, name }: { imgPath: string; name: string }) => {
    return (
      <div className="flex flex-col items-center py-4 gap-4 px-4 bg-white rounded-tl-full rounded-tr-full">
        <div className="bg-accent w-[125px] h-[125px] rounded-full flex justify-center items-center">
          <Image
            src={imgPath}
            alt={`${name}'s image`}
            width={100}
            height={100}
          />
        </div>
        <p className="font-semibold text-xl text-center whitespace-nowrap">
          {name}
        </p>
      </div>
    );
  };
    
  const page = Math.ceil(Math.random() * 10)
  const endpoint = `${baseUrl}/user/grocery-finance/groceries?page=${page}`
  let productDataArray: productType[] = [];

  try {
    const response = await fetch(endpoint, {next: { revalidate: 60 }});
    if (!response.ok) throw new Error("Failed to fetch products");
    const responseData = await response.json();
    productDataArray = responseData.products.items || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    productDataArray = []; 
  }
  
  

  return (
    <main className="overflow-x-hidden">
      <ScrollToHashHandler />
      <Hero />
      <section className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 bg-[#f5f5f5]">
        <p className="text-base sm:text-xl text-center mb-2">Categories</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Featured <span className="text-secondary">Categories</span>
        </p>
        <div className="place-items-center main-padding grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Category imgPath="/diary-baking.svg" name="Diary & baking" />
          <Category imgPath="/bakery.svg" name="Bakery" />
          <Category imgPath="/household.svg" name="Households" />
          <Category imgPath="/water-drinks.svg" name="Water & Drinks" />
        </div>
        <CarouselComp />
      </section>
      <ProductList products={productDataArray} />
      {/* <section className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
        <p className="text-base sm:text-xl text-center mb-2">
          Today&apos;s Deals
        </p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Deals of the day
        </p>
        <div className="place-items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
          <Product
            imgPath="/cooking-oil.svg"
            name="Cooking oil"
            rating={4}
            price={10000}
            actualPrice={20000}
            type="second"
          />
        </div>
      </section> */}
      <section className="flex justify-center items-center main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-[#f5f5f5]">
        <div className="shadow-sm relative p-6 md:p-8 rounded-lg w-full md:w-[500px] lg:w-[700px] bg-gradient-to-l front-[#62a643] via-[#62A643] to-[#85bf6b]">
          <p className="relative z-10 text-secondary text-base mb-4">
            Weekly Deals
          </p>
          <p className="relative z-10 text-3xl text-white mb-8">
            Unbeatable Offers: Your <br />
            <span className="text-secondary">weekly grocery special</span>
          </p>
          <Button variant={"secondary"} asChild>
            <Link href="/shop">
              Shop Now
            </Link>
          </Button>
          <Image
            src="/offer-img.svg"
            alt="offers image"
            width={300}
            height={300}
            className=" absolute bottom-2 -right-20 md:-right-28 w-[200px] md:w-[250px] object-contain"
          />
        </div>
      </section>
      <section 
        id="testimonials"
        tabIndex={-1}
        className="main-padding py-6 md:py-8 lg:py-10 xl:py-12 bg-white">
        <p className="text-base sm:text-xl text-center mb-2">Testimonials</p>
        <p className="mb-3 md:5 text-xl sm:text-2xl font-semibold text-center">
          Testimonials from our
          <br /> <span className="text-[#62a643]">Loyal Customers</span>
        </p>
        <div className="my-6 md:my-8 lg:my-10 flex flex-row gap-2 md:gap-4 items-center justify-center">
          <Image
            src="/person1.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person2.svg"
            alt="person two image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person3.svg"
            alt="person three image"
            className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px]"
            width={125}
            height={125}
          />
          <Image
            src="/person4.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
          <Image
            src="/person5.svg"
            alt="person one image"
            className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
            width={100}
            height={100}
          />
        </div>
          <Testimonials />
      </section>
    </main>
  );
}
