import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with pixel pattern */}
      <div className="absolute inset-0 bg-gray-900/70"></div>
      
      {/* Pixel border effect */}
      <div className="absolute inset-x-0 top-0 h-4 bg-emerald-500" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(0,0,0,.5) 50%)`,
        backgroundSize: '10px 10px'
      }}></div>
      
      <div className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <span className="text-emerald-400">✨</span> Eldoria
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          A 2D Cooperative Fantasy Board Game Adventure
        </p>
        
        <a 
          href="#download" 
          className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Play Now – Free Download
        </a>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown size={32} className="mx-auto text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;