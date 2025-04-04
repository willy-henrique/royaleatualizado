import React from 'react';
import ProductDetails from '../components/ProductDetails';
import MaterialsSection from '../components/MaterialsSection';

const SofaTradicional = () => {
  const features = [
    "Estrutura em madeira de pinus tratado",
    "Espuma D33 selada de alta densidade",
    "Revestimento em tecido premium",
    "Pés em madeira maciça",
    "Almofadas removíveis para fácil limpeza",
    "Disponível em diversas cores e tamanhos",
    "Garantia de 1 ano"
  ];

  return (
    <div>
      <div className="bg-primary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sofá Tradicional</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Design clássico e atemporal, perfeito para ambientes elegantes e sofisticados.
          </p>
        </div>
      </div>
      
      <ProductDetails 
        title="Sofá Tradicional"
        description="Nosso Sofá Tradicional combina elegância atemporal com o máximo conforto. Com linhas clássicas e acabamento impecável, este modelo se adapta perfeitamente a qualquer ambiente, trazendo sofisticação e aconchego para sua casa."
        imageUrl="/img/sofatradicional.jpg"
        features={features}
    />
      <MaterialsSection />
    </div>
  );
};

export default SofaTradicional;