import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Rebollo Express</h3>
            <p className="text-gray-400">Impulsando negocios globalmente desde 2014</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110">
              <Instagram size={28} />
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">&copy; 2024 Rebollo Express. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;