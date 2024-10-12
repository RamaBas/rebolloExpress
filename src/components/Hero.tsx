import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Impulsa tu Negocio Globalmente
        </h1>
        <p className={`text-lg md:text-xl mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Soluciones en Comercio Exterior diseñadas para el éxito de tu empresa
        </p>
        <a 
          href="#contact" 
          className={`inline-flex items-center bg-yellow-400 text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Contáctanos <ArrowRight className="ml-2" />
        </a>
      </div>
    </header>
  );
};

export default Hero;