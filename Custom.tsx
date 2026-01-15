
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CustomProps {
  onAddToCart: (item: CartItem) => void;
}

const Custom: React.FC<CustomProps> = ({ onAddToCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    vision: '',
    budget: '',
    flavor: 'Vanilla Bean'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an inquiry or add a placeholder item to cart
    console.log('Custom order submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="py-40 text-center bg-[#FFFBF7]">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="serif text-5xl text-[#4A4A4A] mb-6">Inquiry Received!</h1>
          <p className="text-[#7A7A7A] text-lg mb-10 leading-relaxed">
            Thank you for sharing your vision with us. Chef Tim and our design team will review your request and get back to you within 48 hours to discuss the details.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs border-b border-[#D4AF37] pb-1"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-[#FFFBF7]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white p-10 md:p-20 shadow-sm border border-[#F2E8DF]">
          <header className="text-center mb-16">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Bespoke Design</span>
            <h1 className="serif text-5xl text-[#4A4A4A] mb-6">Create Your Own</h1>
            <p className="text-[#7A7A7A] max-w-xl mx-auto">
              Dreaming of something truly unique? Tell us your story, and we'll translate it into a sugar masterpiece.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Event Date</label>
              <input 
                required
                type="date" 
                className="w-full p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Guest Count</label>
              <input 
                required
                type="number" 
                className="w-full p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Your Vision & Instructions</label>
              <textarea 
                required
                placeholder="Themes, colors, inspirations, specific florals..."
                className="w-full h-40 p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none"
                value={formData.vision}
                onChange={(e) => setFormData({...formData, vision: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Estimated Budget Range</label>
              <select 
                className="w-full p-4 border border-[#F2E8DF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
              >
                <option value="">Select a range</option>
                <option value="200-500">$200 - $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000+">$1,000+</option>
              </select>
            </div>
            <div className="md:col-span-2 pt-6">
              <button 
                type="submit"
                className="w-full bg-[#4A4A4A] text-white py-5 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#333] transition-all"
              >
                Submit Design Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Custom;
