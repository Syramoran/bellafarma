import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import ProductGrid from './components/ProductGrid';
import Partners from './components/Partners';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MetaPixel from './components/MetaPixel';
import LegalModal from './components/LegalModal';
import { ModalType } from './types';

function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <MetaPixel />
      
      <Header />
      
      <main>
        <Hero />
        <Promotions />
        <ProductGrid />
        <Partners />
        <ContactSection />
      </main>
      
      <Footer openModal={openModal} />

      <LegalModal 
        isOpen={!!modalType} 
        type={modalType} 
        onClose={closeModal} 
      />
    </div>
  );
}

export default App;