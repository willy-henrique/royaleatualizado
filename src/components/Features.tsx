import React from 'react';
import { Award, ThumbsUp, Clock, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: 'Qualidade Superior',
      description: 'Materiais selecionados e acabamento impecável em cada detalhe.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary-500" />,
      title: 'Conforto Garantido',
      description: 'Espumas de alta densidade para maior durabilidade e bem-estar.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-500" />,
      title: 'Produção Sob Medida',
      description: 'Sofás personalizados de acordo com seu espaço e necessidades.'
    },
    {
      icon: <Truck className="h-10 w-10 text-primary-500" />,
      title: 'Entrega Segura',
      description: 'Transporte especializado para garantir a integridade do seu sofá.'
    }
  ];

  return (
    <div className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que escolher a Royale Estofados?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso compromisso é oferecer sofás que combinam design, conforto e durabilidade para transformar seu ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;