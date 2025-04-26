
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      
      <div className="relative overflow-hidden h-[70vh] max-h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Fashion model in stylish clothing" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-lg">
              <span className="inline-block text-sm uppercase tracking-wide bg-white text-black px-3 py-1 rounded-full mb-6">
                New Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Your Perfect Style
              </h1>
              <p className="text-base md:text-lg mb-8 text-gray-200">
                Elevate your wardrobe with our latest collection of premium fashion essentials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/shop" 
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/collections" 
                  className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
