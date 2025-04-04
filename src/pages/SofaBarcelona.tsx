import React from 'react';
import ProductDetails from '../components/ProductDetails';
import MaterialsSection from '../components/MaterialsSection';

const SofaBarcelona = () => {
  const features = [
    "Design inspirado no icônico modelo Barcelona",
    "Estrutura em madeira de pinus tratado",
    "Espuma D33 selada de alta densidade",
    "Revestimento em couro sintético ou tecido premium",
    "Base em aço inoxidável",
    "Acabamento capitonê",
    "Disponível em diversas cores",
    "Garantia de 1 ano"
  ];

  return (
    <div>
      <div className="bg-primary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sofá Barcelona</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Elegância atemporal com conforto excepcional, perfeito para qualquer ambiente sofisticado.
          </p>
        </div>
      </div>
      
      <ProductDetails 
        title="Sofá Barcelona"
        description="O Sofá Barcelona é a combinação perfeita entre elegância e conforto. Seu design sofisticado e moderno adiciona um toque de requinte a qualquer ambiente, tornando-o a escolha ideal para quem busca estilo e aconchego sem abrir mão da qualidade."
        imageUrl="/img/barcelona.png"
        features={features}
      />
      
      <MaterialsSection />
    </div>
  );
};

export default SofaBarcelona;