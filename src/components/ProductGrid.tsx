import React from 'react';
import { products, purchases } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import ProductCard from './ProductCard';
import { Product } from '../types';

export default function ProductGrid() {
  const { user } = useAuth();

  // Get user's purchased categories
  const purchasedCategories = new Set(
    purchases
      .filter(p => p.userId === user?.id)
      .map(p => products.find(prod => prod.id === p.productId)?.category)
  );

  // Split products into purchased and non-purchased categories
  const categorizeAndSortProducts = () => {
    const nonPurchasedProducts: Product[] = [];
    const purchasedProducts: Product[] = [];

    products.forEach(product => {
      if (purchasedCategories.has(product.category)) {
        purchasedProducts.push(product);
      } else {
        nonPurchasedProducts.push(product);
      }
    });

    // Sort both arrays alphabetically by product name
    return [
      ...nonPurchasedProducts.sort((a, b) => a.name.localeCompare(b.name)),
      ...purchasedProducts.sort((a, b) => a.name.localeCompare(b.name))
    ];
  };

  const sortedProducts = categorizeAndSortProducts();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            isPurchasedCategory={purchasedCategories.has(product.category)}
          />
        ))}
      </div>
    </div>
  );
}