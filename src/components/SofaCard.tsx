import React from 'react';
import { Link } from 'react-router-dom';

interface SofaCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

const SofaCard: React.FC<SofaCardProps> = ({ title, description, imageUrl, linkTo }) => {
  const handleClick = () => {
    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={linkTo} 
          onClick={handleClick}
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
};

export default SofaCard;