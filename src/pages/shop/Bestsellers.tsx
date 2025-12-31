import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { useProducts } from '@/hooks/useProducts'; // ✅ Switch to live data hook
import { Loader2 } from 'lucide-react';

const Bestsellers = () => {
  // ✅ Fetch live products from Supabase
  const { data: products = [], isLoading } = useProducts();

  // Show the first 8 products as "Bestsellers" (or your preferred count)
  const bestsellers = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Bestsellers</h1>
            <p className="text-sm text-gray-500">{bestsellers.length} items</p>
          </div>

          {/* ✅ Handle loading and empty states consistently with Index page */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
            </div>
          ) : bestsellers.length > 0 ? (
            <ProductGrid products={bestsellers} />
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No products found. Add some to the store to see them here!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bestsellers;