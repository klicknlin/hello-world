
import React from 'react';
import { View } from '../types';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (view: View, product?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1535254973040-607b474cb8c2?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful cake table" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg">
              Moments Made <span className="italic">Sweet</span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-10 tracking-wide font-light drop-shadow">
              Handcrafted elegance for your most cherished celebrations. Always face life with a smile and treat yourself with kindness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-[#D4AF37] text-white px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-[#B8962D] transition-all shadow-xl"
              >
                Shop Cakes
              </button>
              <button 
                onClick={() => onNavigate('custom')}
                className="bg-white text-[#4A4A4A] px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-gray-100 transition-all shadow-xl"
              >
                Custom Design
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Art of Celebration</span>
          <h2 className="serif text-4xl md:text-5xl text-[#4A4A4A] mb-8 leading-tight">
            "Always face life with a smile regardless of what it throws at you, and treat your loved ones with sweetness."
          </h2>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-10"></div>
          <p className="text-[#7A7A7A] leading-loose text-lg font-light">
            Founded on the belief that every cake tells a story, Chef Tim brings a decade of culinary excellence from the renowned Blowfish Restaurant to your table. Our designs are inspired by nature, art, and the simple joy of sharing a perfect dessert.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-2 block">Our Favorites</span>
              <h2 className="serif text-4xl md:text-5xl text-[#4A4A4A]">The Collection</h2>
            </div>
            <button 
              onClick={() => onNavigate('shop')}
              className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest border-b-2 border-[#D4AF37] pb-1 hover:text-[#B8962D] hover:border-[#B8962D] transition-all"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map(product => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                onClick={() => onNavigate('product-detail', product)}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <h3 className="serif text-2xl text-[#4A4A4A] mb-2">{product.name}</h3>
                <p className="text-[#9A9A9A] text-sm mb-3 line-clamp-2">{product.description}</p>
                <p className="text-[#D4AF37] font-bold">from ${product.basePrice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram/Grid Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[400px]">
        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sweets" />
        <img src="https://images.unsplash.com/photo-1519340241574-2dec39624d21?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sweets" />
        <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sweets" />
        <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sweets" />
      </section>
    </div>
  );
};

export default Home;
