import { Product, Category } from "./types";

// Unsplashed image URLs
const placeholderImage = (text: string) =>
  `https://unsplash.com/photos/${encodeURIComponent(text)}`;

export const CATEGORIES: Category[] = [
  { id: "appetizers", name: "Appetizers" },
  { id: "main_course", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Truffle Fries",
    price: 12.99,
    categoryId: "appetizers",
    image: placeholderImage("bowl-of-food-qdOAjvKsYFQ"),
    inStock: true,
  },
  {
    id: "p2",
    name: "Rice & Curry Combo",
    price: 34.5,
    categoryId: "main_course",
    image: placeholderImage(
      "rice-and-fried-meat-with-egg-in-plate-szQFiGZH8wU",
    ),
    inStock: true,
  },
  {
    id: "p3",
    name: "Chocolate Lava Cake",
    price: 9.99,
    categoryId: "desserts",
    image: placeholderImage(
      "a-white-plate-topped-with-a-piece-of-cake-and-ice-cream-8lPKzLSWNgM",
    ),
    inStock: true,
  },
  {
    id: "p4",
    name: "Soda",
    price: 2.5,
    categoryId: "drinks",
    image: placeholderImage("clear-glass-cup-with-water-Cu3LwxsKpvw"),
    inStock: true,
  },
  {
    id: "p5",
    name: "Caesar Salad",
    price: 14.0,
    categoryId: "appetizers",
    image: placeholderImage("vegetable-salad-pCxJvSeSB5A"),
    inStock: true,
  },
  {
    id: "p6",
    name: "Seared Salmon",
    price: 28.75,
    categoryId: "main_course",
    image: placeholderImage("sliced-bread-on-white-ceramic-plate-Co-T6odt0es"),
    inStock: true,
  },
  {
    id: "p7",
    name: "Creme Brulee",
    price: 10.5,
    categoryId: "desserts",
    image: placeholderImage(
      "a-bowl-of-pudding-with-a-raspberry-on-top-xQFLBRdch_k",
    ),
    inStock: false,
  },
  {
    id: "p8",
    name: "Iced Coffee",
    price: 4.0,
    categoryId: "drinks",
    image: placeholderImage("clear-glass-filled-ice-coffee-vZOZJH_xkUk"),
    inStock: true,
  },
];
