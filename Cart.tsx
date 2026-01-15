
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onClose, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slideLeft">
        <div className="p-8 flex justify-between items-center border-b border-[#F2E8DF]">
          <h2 className="serif text-3xl text-[#4A4A4A]">Your Basket</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-[#9A9A9A] mb-8">Your basket is currently empty.</p>
              <button 
                onClick={onClose}
                className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs border-b border-[#D4AF37] pb-1"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex space-x-6">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-[#FFFBF7]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="serif text-xl text-[#4A4A4A]">{item.name}</h3>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#9A9A9A] mb-2">
                    {item.config?.layers} Tiers • {item.config?.flavor} • {item.config?.theme}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm">Qty: {item.quantity}</span>
                    <span className="font-bold text-[#D4AF37]">${item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-[#F2E8DF] bg-[#FFFBF7]">
            <div className="flex justify-between items-center mb-8">
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#4A4A4A]">Subtotal</span>
              <span className="serif text-3xl text-[#D4AF37]">${total}</span>
            </div>
            <p className="text-[10px] text-[#9A9A9A] uppercase tracking-widest text-center mb-6">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="w-full bg-[#4A4A4A] text-white py-5 uppercase text-xs font-bold tracking-[0.3em] hover:bg-black transition-all shadow-xl">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
