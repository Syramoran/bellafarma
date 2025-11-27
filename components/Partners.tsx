import React from 'react';

const Partners: React.FC = () => {
  // Using placeholder images for logos
  const logos = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    url: `/../assets/mutual${i + 1}.png`,
    name: `Obra Social ${i + 1}`
  }));

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-bellafarma-gray mb-12">
          Obras Sociales
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          {logos.map((logo) => (
            <div key={logo.id} className="w-full h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300">
               {/* In a real app, use real logos here */}
               <div className="text-xs font-bold text-gray-400 border-2 border-dashed border-gray-200 w-full h-full flex items-center justify-center rounded p-2">
                  {/* LOGO {logo.id + 1} */}
                  <img src={logo.url} alt="" className="w-auto h-full" />
               </div>
            </div>
          ))}
        </div>
        
        <p className="mt-10 text-gray-500 text-sm">
          Trabajamos con PAMI, IAPOS, OSDE, Swiss Medical y muchas más. Consultanos por la tuya.
        </p>
      </div>
    </section>
  );
};

export default Partners;