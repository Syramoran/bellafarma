import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20más%20información%20sobre%20sus%20productos`;

  return (
    <section id="hero" className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-img-AI.jpg" 
          alt="Interior de Farmacia Bellafarma" 
          className="w-full h-full object-cover opacity-40 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bellafarma-green/10 text-bellafarma-green text-sm font-semibold mb-2">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-bellafarma-green"></span>
            Abierto ahora
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-bellafarma-blue leading-tight">
            Salud y belleza <br/>
            <span className="text-bellafarma-green">en un solo lugar.</span>
          </h1>
          
          <div className="flex items-center text-bellafarma-gray text-lg md:text-xl font-medium">
            <MapPin className="mr-2 text-bellafarma-green" size={24} />
            Buenos Aires 156, Crespo (Entre&nbsp;Ríos)
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-lg">
            Atención farmacéutica personalizada. Encontrá medicamentos, perfumería, dermocosmética y todo para el cuidado de tu&nbsp;familia.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-bellafarma-green text-white rounded-lg font-bold text-lg hover:bg-[#63a01a] transition-all transform hover:scale-105 shadow-lg shadow-bellafarma-green/30"
            >
              <MessageCircle className="mr-2" size={24} />
              Contactar por WhatsApp
            </a>
            
            <a 
              href="#promos" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-bellafarma-blue text-bellafarma-blue rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Ver promociones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;