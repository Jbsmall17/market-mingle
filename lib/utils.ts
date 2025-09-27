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

//  const mockData = [
//     {
//       imgPath: "/peak-milk.svg",
//       name: "Can peak milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/almond-milk.svg",
//       name: "Almond milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/nido-milk.svg",
//       name: "Nido",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/peak-milk.svg",
//       name: "Can peak milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/almond-milk.svg",
//       name: "Almond milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/nido-milk.svg",
//       name: "Nido",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/peak-milk.svg",
//       name: "Can peak milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/almond-milk.svg",
//       name: "Almond milk",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//     {
//       imgPath: "/nido-milk.svg",
//       name: "Nido",
//       price: 10000,
//       weight: "5",
//       rating: 4,
//     },
//   ];