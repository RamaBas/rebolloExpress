import React, { useState } from 'react';
import { Package, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Package className="w-10 h-10 text-yellow-400 mr-3" />
          <span className="text-2xl font-bold">Rebollo Express</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-yellow-400 transition duration-300">Servicios</a></li>
            <li><a href="#benefits" className="hover:text-yellow-400 transition duration-300">Beneficios</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contacto</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#services" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="#benefits" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Beneficios</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;