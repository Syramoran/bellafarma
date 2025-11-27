import React from 'react';
import { ModalType } from '../types';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Política de Privacidad",
      body: `
        En Farmacia Bellafarma, valoramos su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.
        
        1. Recopilación de Información: Recopilamos información que usted nos proporciona directamente a través de formularios de contacto, como su nombre, correo electrónico y número de teléfono.
        
        2. Uso de la Información: Utilizamos su información para responder a sus consultas, procesar pedidos y mejorar nuestros servicios.
        
        3. Cookies y Tecnologías de Rastreo: Utilizamos cookies y herramientas similares, como el Píxel de Meta, para analizar el tráfico y mejorar la efectividad de nuestras campañas publicitarias.
        
        4. Protección de Datos: Implementamos medidas de seguridad para proteger sus datos contra el acceso no autorizado.
        
        Si tiene alguna pregunta, contáctenos en contacto@bellafarma.com.ar.
      `
    },
    legal: {
      title: "Aviso Legal",
      body: `
        Farmacia Bellafarma opera en cumplimiento con las regulaciones locales de salud y comercio de la República Argentina.
        
        Responsable Legal: Farmacia Bellafarma S.R.L.
        Dirección: Buenos Aires 156, Crespo, Entre Ríos.
        Director Técnico: Farmacéutico Juan Pérez (Matrícula N° 1234).
        
        El contenido de este sitio web es solo para fines informativos y no sustituye el consejo médico profesional. Consulte siempre a un profesional de la salud antes de comenzar cualquier tratamiento.
      `
    }
  };

  const currentContent = type ? content[type] : { title: '', body: '' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-bellafarma-gray transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-bellafarma-blue mb-6 border-b pb-4">
            {currentContent.title}
          </h2>
          <div className="prose text-bellafarma-gray whitespace-pre-line leading-relaxed">
            {currentContent.body}
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-bellafarma-gray text-white rounded hover:bg-gray-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;