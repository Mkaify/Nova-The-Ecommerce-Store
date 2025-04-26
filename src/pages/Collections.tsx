
import { useState } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Collections = () => {
  const [collection, setCollection] = useState('all');
  
  // Filter products based on collection type
  const filteredProducts = collection === 'all' 
    ? products 
    : products.filter(product => product.category === collection);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Our Collections</h1>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setCollection('all')}
                className={`px-4 py-2 rounded-full text-sm ${collection === 'all' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                All Collections
              </button>
              <button 
                onClick={() => setCollection('clothing')}
                className={`px-4 py-2 rounded-full text-sm ${collection === 'clothing' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Spring/Summer
              </button>
              <button 
                onClick={() => setCollection('accessories')}
                className={`px-4 py-2 rounded-full text-sm ${collection === 'accessories' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Fall/Winter
              </button>
              <button 
                onClick={() => setCollection('shoes')}
                className={`px-4 py-2 rounded-full text-sm ${collection === 'shoes' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Limited Edition
              </button>
            </div>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
