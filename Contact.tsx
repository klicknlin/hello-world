
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Connect</span>
          <h1 className="serif text-5xl md:text-6xl text-[#4A4A4A] mb-6">Let's Celebrate</h1>
          <p className="max-w-2xl mx-auto text-[#7A7A7A] text-lg font-light leading-relaxed">
            Planning a corporate gala, a dreamy wedding, or an intimate birthday? We offer specialized catering and custom design services for events of all scales.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="serif text-2xl mb-6">Our Studio</h3>
              <p className="text-[#7A7A7A] leading-loose">
                123 Pastry Lane<br />
                Sweetview, CA 90210<br />
                <span className="text-[#4A4A4A] font-bold">T: 555-0192-384</span>
              </p>
            </div>
            <div>
              <h3 className="serif text-2xl mb-6">Events & Inquiries</h3>
              <ul className="space-y-4 text-[#7A7A7A]">
                <li><span className="text-[#4A4A4A] font-medium">Weddings:</span> weddings@timssweets.com</li>
                <li><span className="text-[#4A4A4A] font-medium">Corporate:</span> events@timssweets.com</li>
                <li><span className="text-[#4A4A4A] font-medium">Careers:</span> join@timssweets.com</li>
              </ul>
            </div>
            <div>
              <h3 className="serif text-2xl mb-6">Studio Hours</h3>
              <p className="text-[#7A7A7A] leading-loose">
                Tue – Fri: 10am – 6pm<br />
                Sat: 9am – 5pm<br />
                Sun & Mon: Closed for Celebrations
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFBF7] p-10 shadow-sm border border-[#F2E8DF]">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Name</label>
                <input type="text" className="w-full p-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Email</label>
                <input type="email" className="w-full p-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Inquiry Type</label>
                <select className="w-full p-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]">
                  <option>General Question</option>
                  <option>Corporate Event</option>
                  <option>Special Birthday / Celebration</option>
                  <option>Wedding Cake Consultation</option>
                  <option>Custom Catering Request</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                <textarea className="w-full h-40 p-4 border border-[#F2E8DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-[#4A4A4A] text-white px-10 py-5 uppercase text-xs font-bold tracking-[0.3em] hover:bg-black transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
