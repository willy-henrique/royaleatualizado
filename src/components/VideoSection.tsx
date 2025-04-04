import React from 'react';

const VideoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Como fazemos os nossos sofás?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nosso processo artesanal de fabricação, onde cada detalhe é cuidadosamente pensado para criar sofás excepcionais.
          </p>
        </div>
        
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/7M7TYcj2ckk"
            title="Como fazemos os nossos sofás"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada sofá é produzido com dedicação e expertise por nossa equipe de artesãos experientes, 
            garantindo um produto final de qualidade excepcional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;