import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    // { name: 'Inicio', href: '#hero' },
    { name: 'Promociones', href: '#promos' },
    // { name: 'Productos', href: '#products' },
    { name: 'Obras Sociales', href: '#partners' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 h-full">
            <Link to="/" className="h-full w-auto">
            <img 
              src="/../assets/logo-horizontal.png" 
              alt="BellaFarma Logo" 
              className="h-full w-auto" 
            />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-bellafarma-gray hover:text-bellafarma-green font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Icons (Desktop) */}
          {/* <div className="hidden md:flex items-center space-x-4">
             <a href="#contact" className="p-2 text-bellafarma-blue hover:text-bellafarma-green transition-colors">
                <Phone size={20} />
             </a>
             <div className="p-2 text-bellafarma-blue hover:text-bellafarma-green transition-colors cursor-pointer">
                <ShoppingCart size={20} />
             </div>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-bellafarma-blue focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-bellafarma-gray hover:text-bellafarma-green font-medium text-lg border-b border-gray-50 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;