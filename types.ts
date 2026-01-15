
export interface CakeOption {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: 'cake' | 'cupcake' | 'pastry';
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  config?: {
    layers: number;
    flavor: string;
    theme: string;
    instructions?: string;
  };
}

export type View = 'home' | 'shop' | 'custom' | 'about' | 'contact' | 'product-detail' | 'cart';
