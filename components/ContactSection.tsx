import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ADDRESS, CONTACT_EMAIL, WHATSAPP_NUMBER } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      // TRACK LEAD EVENT FOR META ADS
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Formulario de Contacto',
          value: 0.00,
          currency: 'ARS'
        });
        console.log('[Meta Pixel] Lead event tracked');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-bellafarma-green font-semibold tracking-wider uppercase text-sm">Ubicación & Contacto</span>
              <h2 className="text-3xl md:text-4xl font-bold text-bellafarma-blue mt-2 mb-4">Estamos para ayudarte</h2>
              <p className="text-bellafarma-gray text-lg">
                Visitanos en nuestro local o escribinos para realizar tus pedidos y consultas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-bellafarma-blue mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bellafarma-gray">Dirección</h4>
                  <p className="text-gray-600">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-lg text-bellafarma-green mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bellafarma-gray">WhatsApp / Teléfono</h4>
                  <p className="text-gray-600">+54 343 5148455</p>
                  <p className="text-sm text-gray-500">Horario: Lun a Sab 7:00 - 21:30 hs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-600 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-bellafarma-gray">Email</h4>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>

            {/* Social Media Buttons Placeholder */}
            <div className="flex gap-4 pt-4">
                <button className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    {/* Facebook Icon SVG */}
                    <a href="https://www.facebook.com/farmabellafarma" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                </button>
                <button className="bg-[#E1306C] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    {/* Instagram Icon SVG */}
                    <a href="https://www.instagram.com/bellafarmafarmacia/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            {status === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center p-6 min-h-[400px]">
                 <div className="bg-green-100 text-bellafarma-green p-4 rounded-full mb-4">
                    <CheckCircle size={64} />
                 </div>
                 <h3 className="text-2xl font-bold text-bellafarma-blue mb-2">¡Mensaje Enviado!</h3>
                 <p className="text-gray-600">
                    Gracias por contactarnos. Nos comunicaremos con vos a la brevedad.
                 </p>
                 <button 
                   onClick={() => setStatus('idle')}
                   className="mt-8 text-bellafarma-green font-semibold hover:underline"
                 >
                   Enviar otro mensaje
                 </button>
               </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-bellafarma-gray mb-4">Envianos un mensaje</h3>
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bellafarma-green focus:border-transparent outline-none transition-all"
                    placeholder="Juan Pérez"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bellafarma-green focus:border-transparent outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bellafarma-green focus:border-transparent outline-none transition-all"
                    placeholder="Cod. Área + Número"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bellafarma-green focus:border-transparent outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte hoy?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-bellafarma-blue text-white rounded-lg font-bold text-lg hover:bg-[#2e2075] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? (
                        'Enviando...'
                    ) : (
                        <>
                         Enviar Mensaje <Send size={20} />
                        </>
                    )}
                </button>
                </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;