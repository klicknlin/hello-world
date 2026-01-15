
import React, { useState, useEffect } from 'react';
import { View, Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Custom from './pages/Custom';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(i => 
        i.productId === item.productId && 
        JSON.stringify(i.config) === JSON.stringify(item.config)
      );
      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += item.quantity;
        return newCart;
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const navigateTo = (view: View, product?: Product) => {
    setCurrentView(view);
    if (product) setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView} 
        onNavigate={navigateTo} 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow pt-20">
        {currentView === 'home' && <Home onNavigate={navigateTo} />}
        {currentView === 'shop' && <Shop onNavigate={navigateTo} />}
        {currentView === 'custom' && <Custom onAddToCart={addToCart} />}
        {currentView === 'about' && <About />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'product-detail' && selectedProduct && (
          <ProductDetail product={selectedProduct} onAddToCart={addToCart} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      {isCartOpen && (
        <Cart 
          items={cart} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
