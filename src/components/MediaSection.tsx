import React, { useState } from 'react';
import { screenshots } from '../data/gameData';

const MediaSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="media" className="py-20 bg-gray-800 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(139,92,246,.5) 50%)`,
        backgroundSize: '16px 16px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              Screenshots & Media
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a glimpse of your adventure in Eldoria
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative group aspect-[4/3] overflow-hidden rounded-lg cursor-pointer border-2 border-purple-500/20 hover:border-emerald-400/50 transition-all duration-300"
              onClick={() => setSelectedImage(screenshot.full)}
            >
              <img 
                src={screenshot.thumbnail} 
                alt={screenshot.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-sm text-white font-medium">{screenshot.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
          <h3 className="text-xl font-bold mb-4 text-center">Gameplay Trailer</h3>
          <div className="aspect-video max-w-3xl mx-auto bg-gray-900/50 rounded-lg flex items-center justify-center border border-purple-500/30">
            <p className="text-gray-400">Video trailer embed would go here</p>
            {/* Actual video embed would replace the text above */}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Screenshot" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-gray-800/80 hover:bg-red-600/80 w-10 h-10 rounded-full flex items-center justify-center text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaSection;