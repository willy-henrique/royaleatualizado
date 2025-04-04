import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-primary-500 text-white">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image with overlay */}
        <img 
           src="/img/primaria.png" 
           alt="Sofá elegante em sala de estar" 
           className="w-full h-full object-cover opacity-30" 
           />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sofás que transformam seu ambiente
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Conforto, elegância e qualidade superior para sua casa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#produtos" 
              className="inline-block bg-white text-primary-500 hover:bg-primary-100 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver Produtos
            </a>
            <a 
                href="https://wa.me/5562992405408?text=Olá!%20Tenho%20interesse%20nos%20sofás%20da%20Royale%20Estofados." 
               target="_blank" 
               rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;