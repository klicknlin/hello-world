
import React, { useState } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Shop', view: 'shop' },
    { label: 'Create Your Own', view: 'custom' },
    { label: 'Our Story', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#FFFBF7]/90 backdrop-blur-md border-b border-[#F2E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="serif text-2xl lg:text-3xl font-bold tracking-tight text-[#D4AF37]">
              Tim's <span className="text-[#4A4A4A]">Sweet Creations</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map(link => (
              <button
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#D4AF37] ${
                  currentView === link.view ? 'text-[#D4AF37]' : 'text-[#4A4A4A]'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#E6A4B4] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-[#4A4A4A] mr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#E6A4B4] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#4A4A4A]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFBF7] border-b border-[#F2E8DF] py-4">
          <div className="flex flex-col space-y-4 px-4">
            {links.map(link => (
              <button
                key={link.view}
                onClick={() => {
                  onNavigate(link.view);
                  setIsMenuOpen(false);
                }}
                className={`text-sm font-medium tracking-wide uppercase ${
                  currentView === link.view ? 'text-[#D4AF37]' : 'text-[#4A4A4A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
