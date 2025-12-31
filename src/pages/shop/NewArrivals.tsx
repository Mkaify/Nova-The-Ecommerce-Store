import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { useProducts } from '@/hooks/useProducts'; // ✅ Use live data
import { Loader2 } from 'lucide-react';

const NewArrivals = () => {
  // ✅ Fetch products from Supabase
  const { data: products = [], isLoading } = useProducts();

  // Sort by most recent if you have a created_at field, otherwise show recent additions
  const newArrivals = products.slice(-8).reverse(); 

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">New Arrivals</h1>
            <p className="text-sm text-gray-500">{newArrivals.length} items</p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
            </div>
          ) : newArrivals.length > 0 ? (
            <ProductGrid products={newArrivals} />
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No new arrivals found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;