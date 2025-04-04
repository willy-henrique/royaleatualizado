import React from 'react';
import { Sofa, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <Sofa className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Royale Estofados</span>
            </div>
            <p className="text-primary-100 mb-4">
              Sofás de qualidade superior, fabricados com os melhores materiais e acabamento impecável.
            </p>
            <a 
              href="https://instagram.com/royaleestofados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-primary-200 transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span>@royaleestofados</span>
            </a>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a 
                  href="https://wa.me/5562992405408?text=Olá!%20Tenho%20interesse%20nos%20sofás%20da%20Royale%20Estofados." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (62) 99240-5408
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>henriquewilly03@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>
                  Rua GV5 - Bairro Goiânia Viva<br />
                  Cidade Goiânia-Go
                </span>
              </div>

              {/* Botão Ver no Mapa */}
              <a 
                href="https://www.google.com/maps/place/Royale+Estofado/data=!4m2!3m1!1s0x0:0xc312e4de6389619c?sa=X&ved=1t:2428&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 ease-in-out shadow-lg bg-gradient-to-r from-blue-800 to-blue-600 hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver no Mapa
              </a>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 10h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-400 mt-8 pt-8 text-center text-primary-100">
          <p>&copy; {new Date().getFullYear()} Royale Estofados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
