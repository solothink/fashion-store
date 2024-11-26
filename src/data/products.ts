import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "electronics"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    description: "Advanced smartwatch with health tracking features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "electronics"
  },
  {
    id: 3,
    name: "Classic Literature Collection",
    price: 49.99,
    description: "Set of timeless literary masterpieces",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    category: "books"
  },
  {
    id: 4,
    name: "Modern Business Backpack",
    price: 79.99,
    description: "Stylish and functional backpack for professionals",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    category: "accessories"
  }
];