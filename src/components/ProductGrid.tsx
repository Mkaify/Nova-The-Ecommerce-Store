
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link 
          to={`/product/${product.id}`}
          key={product.id}
          className="group"
        >
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                // Add to wishlist functionality would go here
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors"
            >
              <Heart size={18} />
            </button>
          </div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
