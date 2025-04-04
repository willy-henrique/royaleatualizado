import React from 'react';
import ProductDetails from '../components/ProductDetails';
import MaterialsSection from '../components/MaterialsSection';

const SofaSobMedida = () => {
  const features = [
    "Totalmente personalizado para seu espaço",
    "Estrutura em madeira de pinus tratado",
    "Espuma D33 selada de alta densidade",
    "Ampla variedade de tecidos e cores",
    "Opções de braços, pés e acabamentos",
    "Possibilidade de módulos e configurações diversas",
    "Projeto desenvolvido de acordo com suas necessidades",
    "Garantia de 1 ano"
  ];

  return (
    <div>
      <div className="bg-primary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sofá Sob Medida</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Personalizado de acordo com suas necessidades, para se adaptar perfeitamente ao seu espaço.
          </p>
        </div>
      </div>
      
      <ProductDetails 
        title="Sofá Sob Medida"
        description="Sofás personalizados sob medida para você! Criamos o modelo ideal no tamanho exato que você deseja, garantindo que se encaixe perfeitamente no seu espaço. Escolha as dimensões, acabamentos e detalhes para ter um sofá exclusivo, feito especialmente para atender às suas necessidades com conforto e estilo."
        imageUrl="/img/sofa-trad2.png"
        features={features}
      />
      
      <MaterialsSection title="Personalize com Materiais Premium" />
    </div>
  );
};

export default SofaSobMedida;