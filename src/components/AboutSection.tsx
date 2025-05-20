import React from 'react';
import { Code, Music, Brush, HeartHandshake } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(16,185,129,.5) 50%)`,
        backgroundSize: '16px 16px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400">
              About Eldoria
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The magic behind the scenes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <Code size={24} className="mr-2" />
                Tech Stack
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Unity 2022.3 LTS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>C# for game logic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Custom shader pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>SQLite for save data</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <Brush size={24} className="mr-2" />
                Art & Design
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Aseprite for pixel art</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Custom animation systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Hand-crafted biome designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Unique character designs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <Music size={24} className="mr-2" />
                Audio
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>FL Studio for composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Original soundtrack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Immersive sound effects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Biome-specific ambience</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <HeartHandshake size={24} className="mr-2" />
                Development Team
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Game Design: Eldoria Team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Programming: C# Wizards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Art: Pixel Masters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Music: Magical Composers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-center text-emerald-400">Our Journey</h3>
            <p className="text-gray-300">
              Eldoria began as a passion project to create a digital board game that captures the magic of tabletop gaming while adding the unique possibilities of digital interaction. After two years of development, multiple playtests, and countless iterations, we're thrilled to share the 1.0.0 release with the world!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;