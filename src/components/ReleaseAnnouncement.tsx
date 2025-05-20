import React from 'react';
import { Check } from 'lucide-react';

const ReleaseAnnouncement: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 border-t-4 border-emerald-500 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-700 rounded-lg p-8 shadow-xl relative overflow-hidden">
          {/* Decorative corner pixel patterns */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-emerald-500/50" style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)'
          }}></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-emerald-500/50" style={{
            clipPath: 'polygon(100% 100%, 0 100%, 100% 0)'
          }}></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400">
              Release 1.0.0 – Now Available!
            </span>
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 text-center">
            We're excited to announce the official Release 1.0.0 of Eldoria – your gateway to a mystical cooperative board game adventure!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                ✅ Platforms Supported:
              </h3>
              <ul className="space-y-2">
                {['Windows 64-bit', 'Linux 64-bit', 'macOS 64-bit (Intel)', 'macOS Apple Silicon (M1/M2/M3)', 'Android (phones & tablets)'].map((platform) => (
                  <li key={platform} className="flex items-start">
                    <Check size={20} className="text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                💡 Highlights:
              </h3>
              <ul className="space-y-2">
                {[
                  'Complete Kids & Adults game modes',
                  'Fully playable across all 5 biomes + Capital',
                  'Functional inventory and health systems',
                  'Local multiplayer for up to 4 players',
                  'Polished UI, audio, puzzles',
                  'Save/load support for player progress'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check size={20} className="text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-amber-900/30 border border-amber-500/50 rounded-lg">
            <p className="text-amber-200 font-medium">
              ⚠️ Note: Online multiplayer not yet supported. Best Android experience on tablets or large phones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleaseAnnouncement;