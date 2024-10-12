const benefits = [
  { title: "Experiencia en múltiples mercados", description: "Conocemos las particularidades de diversos mercados internacionales." },
  { title: "Ahorro de tiempo y costos", description: "Optimizamos tus procesos para mejorar la eficiencia y reducir gastos." },
  { title: "Asesoría personalizada", description: "Desarrollamos estrategias adaptadas a las necesidades específicas de tu negocio." },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <p className="text-lg md:text-xl text-center mb-12">Con más de 10 años de experiencia en comercio exterior, te ayudamos a simplificar procesos y maximizar tus oportunidades de negocio.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;