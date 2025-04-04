import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O sofá que comprei da Royale Estofados transformou completamente minha sala de estar. A qualidade é excepcional e o conforto é incomparável.",
      author: "Maria Silva",
      role: "Cliente desde 2022"
    },
    {
      quote: "Encomendei um sofá sob medida e o resultado superou todas as minhas expectativas. O atendimento foi excelente do início ao fim.",
      author: "Carlos Oliveira",
      role: "Cliente desde 2023"
    },
    {
      quote: "Já tive vários sofás, mas nenhum com a qualidade e durabilidade dos da Royale. Recomendo a todos que buscam um produto premium.",
      author: "Ana Santos",
      role: "Cliente desde 2021"
    }
  ];

  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa maior recompensa. Confira alguns depoimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-amber-500">
                {/* Quote icon */}
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;