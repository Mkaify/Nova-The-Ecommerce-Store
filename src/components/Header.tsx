
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            NOVA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-black transition-colors">
              Shop
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-black transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            
            {user ? (
              <>
                <Link to="/account" className="text-gray-700 hover:text-black transition-colors">
                  <User size={20} />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <LogOut size={20} />
                </Button>
              </>
            ) : (
              <Link to="/auth" className="text-gray-700 hover:text-black transition-colors">
                <User size={20} />
              </Link>
            )}
            
            <Link to="/cart" className="text-gray-700 hover:text-black transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute top-16 left-0 w-full shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-black transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-black transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            {user && (
              <Button
                variant="ghost"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="justify-start pl-0"
              >
                <LogOut className="mr-2" size={20} />
                Sign Out
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
