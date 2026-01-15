
import React from 'react';
import { View, Product } from '../types';
import { PRODUCTS } from '../constants';

interface ShopProps {
  onNavigate: (view: View, product?: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 bg-[#FFFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Selection</span>
          <h1 className="serif text-5xl md:text-6xl text-[#4A4A4A] mb-6">Sweet Shop</h1>
          <p className="max-w-2xl mx-auto text-[#7A7A7A] text-lg leading-relaxed">
            Browse our signature collections of tiered cakes, artisanal cupcakes, and delicate pastries. Each item is made-to-order for peak freshness.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map(product => (
            <div 
              key={product.id} 
              className="group cursor-pointer bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => onNavigate('product-detail', product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center px-4 pb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-2 block">{product.category}</span>
                <h3 className="serif text-2xl text-[#4A4A4A] mb-2">{product.name}</h3>
                <p className="text-[#D4AF37] font-bold text-lg mb-4">${product.basePrice}</p>
                <button className="w-full py-3 border border-[#F2E8DF] text-xs uppercase tracking-widest font-bold group-hover:bg-[#4A4A4A] group-hover:text-white group-hover:border-[#4A4A4A] transition-all">
                  Configure & Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
