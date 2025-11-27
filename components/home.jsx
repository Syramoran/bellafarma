import React from 'react';

// Importa todos los subcomponentes necesarios
import Hero from '../components/Hero';
import Promotions from '../components/Promotions';
import ProductGrid from '../components/ProductGrid';
import Partners from '../components/Partners';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">

      <Hero />
      

      <Promotions />
      

      <ProductGrid />
      

      <Partners />
      

      <ContactSection />
    </div>
  );
};

export default Home;