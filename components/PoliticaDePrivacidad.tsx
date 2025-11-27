import React from 'react';

/**
 * Contenido estático de la Política de Privacidad.
 */
const PRIVACY_CONTENT = {
  title: "1. Política de Privacidad",
  body: `
    En Farmacia Bellafarma, valoramos su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.
    
    1.1. Recopilación de Información: Recopilamos información que usted nos proporciona directamente a través de formularios de contacto, como su nombre, correo electrónico y número de teléfono.
    
    1.2. Uso de la Información: Utilizamos su información para responder a sus consultas, procesar pedidos y mejorar nuestros servicios.
    
    1.3. Cookies y Tecnologías de Rastreo: Utilizamos cookies y herramientas similares, como el Píxel de Meta, para analizar el tráfico y mejorar la efectividad de nuestras campañas publicitarias.
    
    1.4. Protección de Datos: Implementamos medidas de seguridad para proteger sus datos contra el acceso no autorizado.
    
    Si tiene alguna pregunta, contáctenos en contacto@bellafarma.com.ar.
  `
};

/**
 * Contenido estático del Aviso Legal.
 */
const LEGAL_CONTENT = {
  title: "2. Aviso Legal",
  body: `
    Farmacia Bellafarma opera en cumplimiento con las regulaciones locales de salud y comercio de la República Argentina.
    
    2.1. Responsable Legal: Farmacia Bellafarma S.R.L.
    2.2. Dirección: Buenos Aires 156, Crespo, Entre Ríos.
    2.3. Director Técnico: Farmacéutico Jorge Ponce (Matrícula N° 736).
    
    Descargo de Responsabilidad: El contenido de este sitio web es solo para fines informativos y no sustituye el consejo médico profesional. Consulte siempre a un profesional de la salud antes de comenzar cualquier tratamiento.
  `
};

/**
 * Componente de Página que combina la Política de Privacidad y el Aviso Legal.
 * Ubicación: 'src/pages/PoliticaDePrivacidad.jsx'.
 */
const PoliticaDePrivacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-bellafarma-blue inline-block pb-2">
          Documentos Legales
        </h1>
      </header>
      
      {/* SECCIÓN 1: POLÍTICA DE PRIVACIDAD */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-bellafarma-blue pl-3">
          {PRIVACY_CONTENT.title}
        </h2>
        <div className="text-gray-700 leading-relaxed text-lg">
          <p className="whitespace-pre-line">
            {PRIVACY_CONTENT.body}
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: AVISO LEGAL */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-bellafarma-blue pl-3">
          {LEGAL_CONTENT.title}
        </h2>
        <div className="text-gray-700 leading-relaxed text-lg">
          <p className="whitespace-pre-line">
            {LEGAL_CONTENT.body}
          </p>
        </div>
      </section>

      <footer className="mt-12 pt-6 border-t text-sm text-gray-500 text-center">
        Última revisión del documento: Noviembre 2025.
      </footer>
    </div>
  );
};

export default PoliticaDePrivacidad;