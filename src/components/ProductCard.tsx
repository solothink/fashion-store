import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isPurchasedCategory: boolean;
}

export default function ProductCard({ product, isPurchasedCategory }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            isPurchasedCategory 
              ? 'bg-blue-100 text-blue-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Tag className="w-4 h-4" />
          <span className="text-sm">{product.category}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            {formatPrice(product.price)}
          </span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition duration-200">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}