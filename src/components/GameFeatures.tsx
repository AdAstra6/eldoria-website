import React from 'react';
import { Dices, Users, Gamepad2, Sparkles, Braces, Heart } from 'lucide-react';
import { gameFeatures } from '../data/gameData';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 border border-purple-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-700/30 transition-colors">
        <div className="text-emerald-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const GameFeatures: React.FC = () => {
  const icons = [
    <Dices size={28} />,
    <Users size={28} />,
    <Gamepad2 size={28} />,
    <Sparkles size={28} />,
    <Braces size={28} />,
    <Heart size={28} />
  ];

  return (
    <section id="features" className="py-20 bg-gray-800 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(139,92,246,.5) 50%)`,
        backgroundSize: '16px 16px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              Game Features
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the magical gameplay mechanics of Eldoria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gameFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={icons[index % icons.length]}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;