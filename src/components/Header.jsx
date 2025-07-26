import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Home, BookOpen } from 'lucide-react'; 
import { X, Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // State untuk menyembunyikan header

  const navItems = [
    { path: '/', label: 'Beranda', icon: Home },
    // { path: '/story', label: 'Web Story', icon: BookOpen }, 
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  ];

  // Listen untuk message dari Dashboard component
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'TOGGLE_HEADER') {
        setIsHidden(event.data.hide);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Jika header disembunyikan, return null
  if (isHidden) {
    return null;
  }

  return (
    <header 
      className="bg-white shadow-sm border-b border-gray-200 sticky top-0"
      style={{ zIndex: 55 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="src/logo-ntt.png"
                    alt="Logo Provinsi Nusa Tenggara Timur"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-lg font-bold text-gray-900 leading-tight block">
                    Dashboard Prevalensi Stunting
                  </span>
                  <span className="text-sm text-gray-600 leading-tight block">
                    Provinsi Nusa Tenggara Timur
                  </span>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Navigasi Desktop */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Buka menu utama</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-red-700 bg-red-100'
                      : 'text-gray-700 hover:text-red-700 hover:bg-red-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;