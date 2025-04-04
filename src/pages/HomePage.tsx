import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import SofaCard from '../components/SofaCard';
import VideoSection from '../components/VideoSection';

const HomePage = () => {
  const sofas = [
    {
      title: "Sofá Tradicional",
      description: "Design clássico e atemporal, perfeito para ambientes elegantes e sofisticados.",
      imageUrl: "/img/sofatradicional.jpg",
      linkTo: "/sofa-tradicional"
    },
    {
      title: "Sofá Barcelona",
      description: "Inspirado no icônico design de Mies van der Rohe, com linhas modernas e minimalistas.",
      imageUrl: "/img/barcelona.png",
      linkTo: "/sofa-barcelona"
    },
    {
      title: "Sofá Sob Medida",
      description: "Personalizado de acordo com suas necessidades, para se adaptar perfeitamente ao seu espaço.",
      imageUrl: "/img/sofa-trad2.png",
      linkTo: "/sofa-sob-medida"
    }
  ];

  return (
    <div>
      <Hero />
      <Features />
      
      {/* Produtos em destaque */}
      <div id="produtos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Modelos em Destaque</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça nossa seleção de sofás premium, fabricados com os melhores materiais e acabamento impecável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sofas.map((sofa, index) => (
              <SofaCard 
                key={index}
                title={sofa.title}
                description={sofa.description}
                imageUrl={sofa.imageUrl}
                linkTo={sofa.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
      
      <VideoSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;