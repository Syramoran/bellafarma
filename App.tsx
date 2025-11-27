import React, { useState } from 'react';
// 1. Importar componentes de enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MetaPixel from './components/MetaPixel';
import LegalModal from './components/LegalModal';
import { ModalType } from './types';

// 2. Importar los componentes de las páginas
import Home from './components/home'; // Asegúrate de que este archivo exista
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad'; // Asegúrate de que este archivo exista

function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    // 3. Envolver toda la aplicación con BrowserRouter (si no está ya en index.js)
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
        <MetaPixel />
        
        <Header />
        
        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            

            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />

          </Routes>
        </main>
        
        <Footer openModal={openModal} />

        <LegalModal 
          isOpen={!!modalType} 
          type={modalType} 
          onClose={closeModal} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;