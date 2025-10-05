import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPagination(current: number, total: number) {
  const delta = 2;
  const range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let last: number | undefined;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (typeof last === "number" && typeof i === "number") {
      if (i - last === 2) {
        rangeWithDots.push(last + 1);
      } else if (i - last > 2) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    last = i;
  }

  return rangeWithDots;
}

export const Category = [
  "Beverages",
  "Toileteries",
  "Soap",
  "Scouring Powder",
  "Fabric Starch",
  "Sanitry Pad",
  "Feminine Product",
  "Air Fresher",
  "Hand Wash",
  "Mouth Wash",
  "Toothpaste",
  "Flour Cleaner",
  "Herbal Tea",
  "Custard",
  "Heair Relaxer",
  "Biscuit",
  "Butter",
  "Cookies",
  "Bathing Soap",
  "Liquid Soap",
  "Chocolates",
  "Facial Wash",
  "Can Food",
  "Body Lotion",
  "Insecticide",
  "Cereal",
  "Sugar",
  "Toothpaste",
  "Body Spray",
  "Perfume",
  "Armpit Spray",
  "Roll On",
  "Bodt Mist",
  "Detergent",
  "Alcohol",
  "Wine",
  "Evaporated Milk",
  "Powdered Milk",
  "Diapers and Wipes",
  "Popcorn",
  "Cake",
  "Drinks",
  "Household",
  "Water",
  "Food Condiments",
  "Seasoning Coooking oil",
  "Plantain Chips",
  "Spices",
  "Cooking Oil",
  "Stationaries",
  "Sweet",
  "Chewing Gum",
  "Food", 
  "Condiments",
  "Seasoning",
  "Tomato Paste",
  "Mayonnaise",
  "Tooth Brush",
  "Juice",
  "Water",
  "Vegetable Oil",
  "Condom"
]

export function scrollToTop(){
  window.scrollTo({
    top: 0,
    left:0,
    behavior: "smooth"
  })
}