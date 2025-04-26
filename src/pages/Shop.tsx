
import { useState } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Shop = () => {
  const [category, setCategory] = useState('all');
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setCategory('all')}
                className={`px-4 py-2 rounded-full text-sm ${category === 'all' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                All
              </button>
              <button 
                onClick={() => setCategory('clothing')}
                className={`px-4 py-2 rounded-full text-sm ${category === 'clothing' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Clothing
              </button>
              <button 
                onClick={() => setCategory('accessories')}
                className={`px-4 py-2 rounded-full text-sm ${category === 'accessories' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Accessories
              </button>
              <button 
                onClick={() => setCategory('shoes')}
                className={`px-4 py-2 rounded-full text-sm ${category === 'shoes' ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                Shoes
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

export default Shop;
