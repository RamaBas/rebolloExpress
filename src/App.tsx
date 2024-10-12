import { useState, useEffect } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact'
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero isVisible={isVisible} />
      <Services />
      <Benefits />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;