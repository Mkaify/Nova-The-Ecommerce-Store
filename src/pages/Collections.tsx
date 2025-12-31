import { useState } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useProducts } from '@/hooks/useProducts'; // ✅ Use live data
import { Loader2 } from 'lucide-react';

const Collections = () => {
  const [collection, setCollection] = useState('all');
  
  // ✅ Fetch from Supabase
  const { data: products = [], isLoading } = useProducts();
  
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
              {[
                { id: 'all', label: 'All Collections' },
                { id: 'clothing', label: 'Spring/Summer' },
                { id: 'accessories', label: 'Fall/Winter' },
                { id: 'shoes', label: 'Limited Edition' }
              ].map((btn) => (
                <button 
                  key={btn.id}
                  onClick={() => setCollection(btn.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    collection === btn.id ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
            </div>
          ) : filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No products found in this collection.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;