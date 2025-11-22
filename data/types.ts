// Interface for a Product
export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  image: string;
  inStock: boolean;
}

// Interface for a category filter.
export interface Category {
  id: string;
  name: string;
}

// Interface for an item placed in the cart.
export interface CartItem extends Product {
  quantity: number;
  notes: string;
  cartItemId: string;
}
