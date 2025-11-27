import React from 'react';
import { Banknote, Users } from 'lucide-react';

const Promotions: React.FC = () => {
  return (
    <section id="promos" className="py-20 bg-bellafarma-blue text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-bellafarma-green opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Promociones exclusivas</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Aprovechá nuestros descuentos semanales pensados para cuidar tu salud y tu&nbsp;bolsillo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Promo 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              <div className="bg-bellafarma-green p-4 rounded-full shadow-lg">
                <Banknote size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">10% OFF</h3>
                <p className="text-xl font-medium text-bellafarma-green mb-2">Martes, jueves y sábados</p>
                <p className="text-blue-100 leading-relaxed">
                  En todos los productos de la farmacia pagando con <strong>efectivo</strong> o <strong>transferencia bancaria</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Promo 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              <div className="bg-yellow-500 p-4 rounded-full shadow-lg">
                <Users size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">15% OFF</h3>
                <p className="text-xl font-medium text-yellow-400 mb-2">Todos los días</p>
                <p className="text-blue-100 leading-relaxed">
                  Descuento exclusivo para <strong>jubilados y pensionados</strong> abonando en&nbsp;efectivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;