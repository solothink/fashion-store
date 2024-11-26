import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

function ShopContent() {
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Recommended Products
        </h1>
        <ProductGrid />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ShopContent />
    </AuthProvider>
  );
}