import React from 'react';
import { ModalType } from '../types';
import { Link } from 'react-router-dom';

interface FooterProps {
  openModal: (type: ModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return (
    <footer className="bg-bellafarma-gray text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-bellafarma-green">✚</span> Farmacia Bellafarma
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Tu salud es nuestra prioridad. Ofrecemos atención profesional y productos de calidad para el bienestar de tu familia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#hero" className="hover:text-bellafarma-green transition-colors">Inicio</a></li>
                <li><a href="#promos" className="hover:text-bellafarma-green transition-colors">Promociones</a></li>
                <li><a href="#products" className="hover:text-bellafarma-green transition-colors">Productos</a></li>
                <li><a href="#contact" className="hover:text-bellafarma-green transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white"><Link to="/politica-de-privacidad">Legales</Link></h4>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                    <button onClick={() => openModal('privacy')} className="hover:text-bellafarma-green transition-colors text-left">
                        Política de Privacidad
                    </button>
                </li>
                <li>
                    <button onClick={() => openModal('legal')} className="hover:text-bellafarma-green transition-colors text-left">
                        Aviso Legal
                    </button>
                </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Farmacia Bellafarma. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado para tu bienestar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;