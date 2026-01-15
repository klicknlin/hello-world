
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Hands Behind the Sugar</span>
            <h1 className="serif text-5xl md:text-6xl text-[#4A4A4A] mb-8 leading-tight">Chef Tim's Culinary Journey</h1>
            <div className="space-y-6 text-[#7A7A7A] text-lg leading-relaxed font-light">
              <p>
                Chef Tim's passion for the culinary arts began in the high-stakes, high-precision kitchens of the legendary <a href="https://www.blowfishrestaurant.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Blowfish Restaurant</a>. It was there, amidst the world-class sushi and innovative pan-Asian cuisine, that he honed his obsession with detail, balance, and visual artistry.
              </p>
              <p>
                Transitioning from savory to the delicate world of pastry, Tim brought with him a unique perspective—where flavor is never sacrificed for form, and every ingredient is treated with absolute respect. His philosophy is simple: "Always face life with a smile, regardless of what it throws at you, and treat yourself with sweetness."
              </p>
              <p>
                Today, Tim's Sweet Creations is more than a bakery; it's a testament to the belief that sweets bring joy, fun, and diverse experiences to our loved ones. Whether it's a towering wedding cake or a single perfect cupcake, Tim pours his soul into every creation.
              </p>
            </div>
            <div className="mt-12 flex space-x-6 grayscale opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Blowfish_logo.svg" alt="Blowfish" className="h-12 w-auto" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                alt="Chef Tim at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 m-4 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#FAF3EF]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="serif text-4xl text-[#4A4A4A] mb-16">Our Secret Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="serif text-6xl text-[#D4AF37]/30 mb-6">01</div>
              <h3 className="serif text-2xl mb-4">Artistic Integrity</h3>
              <p className="text-[#7A7A7A] leading-relaxed">Every decoration is handcrafted, every petal is placed with intent, ensuring your cake is a unique piece of art.</p>
            </div>
            <div>
              <div className="serif text-6xl text-[#D4AF37]/30 mb-6">02</div>
              <h3 className="serif text-2xl mb-4">Seasonal Purity</h3>
              <p className="text-[#7A7A7A] leading-relaxed">We source local organic fruits and premium European butters to create flavors that are as deep as they are delicious.</p>
            </div>
            <div>
              <div className="serif text-6xl text-[#D4AF37]/30 mb-6">03</div>
              <h3 className="serif text-2xl mb-4">Joyful Service</h3>
              <p className="text-[#7A7A7A] leading-relaxed">Kindness is our first ingredient. We aim to bring a smile to your face from the first consultation to the final bite.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
