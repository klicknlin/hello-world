
import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { FLAVORS, THEMES, LAYERS } from '../constants';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  const [layers, setLayers] = useState(1);
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [theme, setTheme] = useState(THEMES[0]);
  const [instructions, setInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  const calculatePrice = () => {
    let price = product.basePrice;
    if (layers === 2) price += 50;
    if (layers === 3) price += 110;
    return price * quantity;
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      name: product.name,
      image: product.image,
      price: calculatePrice() / quantity,
      quantity: quantity,
      config: {
        layers,
        flavor,
        theme,
        instructions
      }
    });
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-[#FFFBF7]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-[#FFFBF7] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=300" alt="detail" className="w-full h-full object-cover opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
              <div className="aspect-square bg-[#FFFBF7] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=300" alt="detail" className="w-full h-full object-cover opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
              <div className="aspect-square bg-[#FFFBF7] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&q=80&w=300" alt="detail" className="w-full h-full object-cover opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="flex flex-col">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4">{product.category}</span>
            <h1 className="serif text-5xl text-[#4A4A4A] mb-4">{product.name}</h1>
            <p className="text-2xl text-[#D4AF37] mb-8">${calculatePrice()}</p>
            
            <p className="text-[#7A7A7A] leading-relaxed mb-10 pb-10 border-b border-[#F2E8DF]">
              {product.description}
            </p>

            <div className="space-y-8">
              {/* Layers */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-4">Number of Tiers</label>
                <div className="flex space-x-4">
                  {LAYERS.map(l => (
                    <button
                      key={l}
                      onClick={() => setLayers(l)}
                      className={`flex-1 py-3 border text-sm transition-all ${
                        layers === l 
                        ? 'bg-[#4A4A4A] text-white border-[#4A4A4A]' 
                        : 'border-[#F2E8DF] hover:border-[#4A4A4A]'
                      }`}
                    >
                      {l} {l === 1 ? 'Tier' : 'Tiers'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-4">Inner Flavor</label>
                <select 
                  value={flavor}
                  onChange={(e) => setFlavor(e.target.value)}
                  className="w-full py-3 px-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                >
                  {FLAVORS.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Theme */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-4">Cake Theme</label>
                <select 
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full py-3 px-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                >
                  {THEMES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-4">Personal Note / Special Instructions</label>
                <textarea 
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Tell us about any specific details or writing you'd like on the cake..."
                  className="w-full h-32 py-3 px-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none"
                />
              </div>

              {/* Add to Cart Footer */}
              <div className="pt-8 flex space-x-4">
                <div className="flex items-center border border-[#F2E8DF]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-[#D4AF37] text-white py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#B8962D] transition-all shadow-lg"
                >
                  Add to Cart — ${calculatePrice()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
