import React from 'react';

interface MaterialsSectionProps {
  title?: string;
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ title = "Materiais de Qualidade Superior" }) => {
  return (
    <div className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilizamos apenas os melhores materiais para garantir conforto, durabilidade e beleza em cada peça.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Madeira */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img 
                src="/img/madeira.png" 
                alt="Madeira de Pinus Tratado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Madeira de Pinus Tratado</h3>
              <p className="text-gray-600">
                Estrutura robusta e durável, com madeira de pinus tratada contra cupins e outros insetos, garantindo maior vida útil ao seu sofá.
              </p>
            </div>
          </div>
          
          {/* Espuma */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img 
                src="/img/espuma1.png" 
                alt="Espuma D33 Selada" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Espuma D33 Selada</h3>
              <p className="text-gray-600">
                Espuma de alta densidade que proporciona o equilíbrio perfeito entre maciez e firmeza, mantendo sua forma por muito mais tempo.
              </p>
            </div>
          </div>
          
          {/* Tecido */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 overflow-hidden">
              <img 
                src="/img/revestimento.png"  
                alt="Revestimento Premium" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Revestimento Premium</h3>
              <p className="text-gray-600">
                Tecidos de alta qualidade, resistentes a manchas e desgaste, disponíveis em diversas cores e texturas para combinar com sua decoração.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsSection;