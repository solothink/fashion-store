import { Product, User, Purchase } from '../types';

export const users: User[] = [
  { id: 1, username: 'user1', password: 'password123' },
  { id: 2, username: 'user2', password: 'password123' },
  { id: 3, username: 'user3', password: 'password123' }
];

export const products: Product[] = [
  { id: 101, name: 'Classic White Shirt', category: 'Tops', price: 2399, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id: 102, name: 'Denim Jeans', category: 'Bottoms', price: 3999, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80' },
  { id: 103, name: 'Leather Jacket', category: 'Outerwear', price: 7299, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80' },
  { id: 104, name: 'Black T-Shirt', category: 'Tops', price: 1599, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id: 105, name: 'Chinos', category: 'Bottoms', price: 3199, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80' },
  { id: 106, name: 'Hoodie', category: 'Outerwear', price: 4799, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80' },
  { id: 107, name: 'Striped Shirt', category: 'Tops', price: 2799, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' },
  { id: 108, name: 'Shorts', category: 'Bottoms', price: 1999, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80' },
  { id: 109, name: 'Blazer', category: 'Outerwear', price: 7999, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80' },
  { id: 110, name: 'Graphic Tee', category: 'Tops', price: 1999, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' }
];

export const purchases: Purchase[] = [
  { userId: 1, productId: 101, purchaseDate: '2023-01-15' },
  { userId: 1, productId: 104, purchaseDate: '2023-02-20' },
  { userId: 1, productId: 105, purchaseDate: '2023-03-05' },
  { userId: 2, productId: 102, purchaseDate: '2023-01-25' },
  { userId: 2, productId: 106, purchaseDate: '2023-04-18' },
  { userId: 3, productId: 103, purchaseDate: '2023-02-10' },
  { userId: 3, productId: 107, purchaseDate: '2023-03-22' },
  { userId: 3, productId: 108, purchaseDate: '2023-05-30' }
];