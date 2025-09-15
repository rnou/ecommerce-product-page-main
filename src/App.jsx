import React, { useState } from 'react';

import {Header} from './components/Header.jsx';
import {MobileMenu} from './components/MobileMenu.jsx';
import {ProductGallery} from './components/ProductGallery.jsx';
import {ProductInfo} from './components/ProductInfo.jsx';
import {Lightbox} from './components/Lightbox.jsx';

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productImages = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ];

  const product = {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
    originalPrice: 250.00,
    discountedPrice: 125.00,
    discount: 50
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const addToCart = () => {
    if (quantity > 0) {
      /* see if we already have this item in the cart */
      const existingItem = cartItems.find(item => item.id === 1);
      if (existingItem) {
        setCartItems(cartItems.map(item => 
          item.id === 1 ? { ...item, quantity: item.quantity + quantity } : item
        ));
      } else {
        setCartItems([...cartItems, {
          id: 1,
          name: product.name,
          price: product.discountedPrice,
          quantity: quantity,
          image: productImages[0]
        }]);
      }
      setQuantity(0);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <ProductGallery
            productImages={productImages}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            setIsLightboxOpen={setIsLightboxOpen}
            nextImage={nextImage}
            prevImage={prevImage}
          />

          <ProductInfo 
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            addToCart={addToCart}
          />
        </div>
      </main>
      
      <Lightbox 
        isLightboxOpen={isLightboxOpen}
        setIsLightboxOpen={setIsLightboxOpen}
        productImages={productImages}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        nextImage={nextImage}
        prevImage={prevImage}
      />
    </div>
  );
};

export default App;