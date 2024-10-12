import React from 'react';
import { Globe, Truck, FileText, BarChart3, DollarSign, Ship, ClipboardCheck } from 'lucide-react';

const services = [
  { icon: Globe, title: "Gestión de Importaciones y Exportaciones" },
  { icon: Truck, title: "Asesoría en Logística Internacional" },
  { icon: FileText, title: "Tramitación de Documentación Aduanera" },
  { icon: BarChart3, title: "Análisis de Mercados Internacionales" },
  { icon: DollarSign, title: "Optimización de Costos en Comercio Exterior" },
  { icon: Ship, title: "Soluciones de Transporte Multimodal" },
  { icon: ClipboardCheck, title: "Auditoría de Procesos de Importación/Exportación" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">Optimizamos tus operaciones de comercio exterior con soluciones personalizadas.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;