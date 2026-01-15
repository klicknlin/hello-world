
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FAF3EF] border-t border-[#F2E8DF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="serif text-2xl font-bold text-[#4A4A4A] mb-6">Tim's Sweet Creations</h3>
            <p className="text-[#7A7A7A] leading-relaxed mb-6">
              Handcrafting joy and sweetness with the finest ingredients and artistic precision.
            </p>
            <div className="flex space-x-4">
              {/* Mock Social Icons */}
              <div className="w-8 h-8 rounded-full bg-white border border-[#F2E8DF] flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] hover:text-white transition-all">I</div>
              <div className="w-8 h-8 rounded-full bg-white border border-[#F2E8DF] flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] hover:text-white transition-all">F</div>
              <div className="w-8 h-8 rounded-full bg-white border border-[#F2E8DF] flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] hover:text-white transition-all">P</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#4A4A4A] uppercase tracking-widest text-xs mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('shop')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Wedding Cakes</button></li>
              <li><button onClick={() => onNavigate('shop')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Birthday Cakes</button></li>
              <li><button onClick={() => onNavigate('shop')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Pastries & Sweets</button></li>
              <li><button onClick={() => onNavigate('custom')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Custom Orders</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#4A4A4A] uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('about')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Our Story</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Chef Tim</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-[#7A7A7A] hover:text-[#D4AF37] transition-colors">Corporate Events</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#4A4A4A] uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <p className="text-[#7A7A7A] text-sm mb-4">Join our list for sweet updates and special offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-[#F2E8DF] px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
              <button className="bg-[#D4AF37] text-white px-4 py-2 hover:bg-[#B8962D] transition-colors uppercase text-xs font-bold tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#F2E8DF] pt-8 flex flex-col md:flex-row justify-between items-center text-[#9A9A9A] text-xs uppercase tracking-widest">
          <p>© 2024 Tim's Sweet Creations. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-[#4A4A4A]">Privacy Policy</button>
            <button className="hover:text-[#4A4A4A]">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
