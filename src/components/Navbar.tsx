import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sofa, Instagram, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <Sofa className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-semibold text-primary-500">Royale Estofados</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Início
            </Link>
            <Link to="/sofa-tradicional" className="text-gray-700 hover:text-primary-500 transition-colors">
              Sofá Tradicional
            </Link>
            <Link to="/sofa-barcelona" className="text-gray-700 hover:text-primary-500 transition-colors">
              Sofá Barcelona
            </Link>
            <Link to="/sofa-sob-medida" className="text-gray-700 hover:text-primary-500 transition-colors">
              Sofá Sob Medida
            </Link>
            <a 
              href="https://instagram.com/royaleestofados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
            >
              <Instagram className="h-5 w-5 mr-1" />
              <span>Instagram</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/sofa-tradicional" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sofá Tradicional
            </Link>
            <Link 
              to="/sofa-barcelona" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sofá Barcelona
            </Link>
            <Link 
              to="/sofa-sob-medida" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sofá Sob Medida
            </Link>
            <a 
              href="https://instagram.com/royaleestofados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;