import { create } from "zustand";
import { Product } from "../data/types";

// Define CartItem
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  notes: string;
}

interface CartStore {
  // State
  cart: CartItem[];

  // Methods to modify state
  addItem: (product: Product, quantity: number, notes: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;

  // Calculations
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  // State
  cart: [],

  addItem: (product, quantity, notes) => {
    const newItem: CartItem = {
      id: Math.random().toString(),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      notes,
    };

    set((state) => ({
      cart: [...state.cart, newItem],
    }));
  },

  removeItem: (itemId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },

  // SubTotal calcuatiions
  getSubtotal: () => {
    const { cart } = get();
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return Math.round(total * 100) / 100;
  },

  getTax: () => {
    const subtotal = get().getSubtotal();
    return Math.round(subtotal * 0.1 * 100) / 100;
  },

  getTotal: () => {
    const subtotal = get().getSubtotal();
    const tax = get().getTax();
    return subtotal + tax;
  },
}));
