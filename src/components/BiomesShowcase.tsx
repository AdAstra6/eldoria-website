import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { biomes } from '../data/gameData';

const BiomesShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? biomes.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === biomes.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
  };

  return (
    <section id="biomes" className="py-20 bg-gray-900 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(16,185,129,.5) 50%)`,
        backgroundSize: '16px 16px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400">
              Magical Biomes
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the 5 mystical biomes and the Capital Temple
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-lg border-4 border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <div 
              className="relative aspect-[16/9] transition-all duration-500 ease-in-out"
              style={{ 
                backgroundImage: `url(${biomes[currentIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {biomes[currentIndex].name}
                </h3>
                <p className="text-lg text-gray-200 max-w-2xl">
                  {biomes[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => {
              handlePrev();
              resetInterval();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-emerald-600/80 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous biome"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => {
              handleNext();
              resetInterval();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-emerald-600/80 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next biome"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {biomes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  resetInterval();
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-emerald-400 w-6' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to biome ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomesShowcase;