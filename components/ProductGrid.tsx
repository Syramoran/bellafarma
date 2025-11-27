import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Protector Solar FPS 50+',
    category: 'Dermocosmética',
    price: '$12.500',
    imageUrl: '/../assets/solares.jpg',
  },
  {
    id: 2,
    name: 'Crema Hidratante Facial',
    category: 'Cuidado Facial',
    price: '$20.200',
    imageUrl: '/../assets/cremas.jpg',
  },
  {
    id: 3,
    name: 'Perfumes Importados',
    category: 'Fragancias',
    price: '$60.400',
    imageUrl: '/../assets/perfume.jpg',
  },
  {
    id: 4,
    name: 'Kit Bebé Recién Nacido',
    category: 'Maternidad',
    price: '$35.900',
    imageUrl: '/../assets/panales.jpg',
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-4">
          <div>
            <span className="text-bellafarma-green font-semibold tracking-wider uppercase text-sm">Destacados</span>
            <h2 className="text-3xl font-bold text-bellafarma-blue mt-2">Productos y ofertas</h2>
          </div>
          {/* <a href="#" className="text-bellafarma-gray hover:text-bellafarma-green font-medium mt-4 md:mt-0">
            Ver todo el catálogo &rarr;
          </a> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-bellafarma-blue text-white text-xs font-bold px-2 py-1 rounded">
                  NUEVO
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-bold text-bellafarma-gray text-lg mb-2 group-hover:text-bellafarma-blue transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  {/* <span className="text-xl font-bold text-bellafarma-green">{product.price}</span> */}
                  {/* <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-bellafarma-blue hover:bg-bellafarma-green hover:text-white transition-colors">
                    +
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;