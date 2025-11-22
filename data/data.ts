import { Product, Category } from "./types";

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
    image:
      "https://images.unsplash.com/photo-1579065934361-0a0c8771812a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    inStock: true,
  },
  {
    id: "p2",
    name: "Rice & Curry Combo",
    price: 34.5,
    categoryId: "main_course",
    image:
      "https://images.unsplash.com/photo-1652021979353-2288f1835b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGFuZCUyMGN1cnJ5fGVufDB8fDB8fHwy",
    inStock: true,
  },
  {
    id: "p3",
    name: "Chocolate Lava Cake",
    price: 9.99,
    categoryId: "desserts",
    image:
      "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF2YSUyMGNha2V8ZW58MHx8MHx8fDI%3D",
    inStock: true,
  },
  {
    id: "p4",
    name: "Soda",
    price: 2.5,
    categoryId: "drinks",
    image:
      "https://images.unsplash.com/photo-1603968070333-58761fa00853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29kYXxlbnwwfHwwfHx8Mg%3D%3D",
    inStock: true,
  },
  {
    id: "p5",
    name: "Caesar Salad",
    price: 14.0,
    categoryId: "appetizers",
    image:
      "https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDI%3D",
    inStock: true,
  },
  {
    id: "p6",
    name: "Seared Salmon",
    price: 28.75,
    categoryId: "main_course",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhcmVkJTIwc2FsbW9ufGVufDB8fDB8fHwy",
    inStock: true,
  },
  {
    id: "p7",
    name: "Creme Brulee",
    price: 10.5,
    categoryId: "desserts",
    image:
      "https://images.unsplash.com/photo-1676300184943-09b2a08319a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlbWUlMjBicnVsZWV8ZW58MHx8MHx8fDI%3D",
    inStock: false,
  },
  {
    id: "p8",
    name: "Iced Coffee",
    price: 4.0,
    categoryId: "drinks",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8Mg%3D%3D",
    inStock: true,
  },
];
