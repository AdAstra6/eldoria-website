import React from 'react';
import { Download, Monitor, Link as Linux, Apple, Smartphone } from 'lucide-react';
import { downloadLinks } from '../data/gameData';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gray-900 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-4" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(16,185,129,.5) 50%)`,
        backgroundSize: '16px 16px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
              Download Eldoria v1.0.0
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your platform below and start your adventure today!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadLinks.map((download) => (
            <div 
              key={download.platform}
              className="bg-gray-800 rounded-lg p-6 border border-purple-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-emerald-400 mr-3">
                  {download.icon === 'monitor' && <Monitor size={24} />}
                  {download.icon === 'linux' && <Linux size={24} />}
                  {download.icon === 'apple' && <Apple size={24} />}
                  {download.icon === 'smartphone' && <Smartphone size={24} />}
                </span>
                <h3 className="text-xl font-bold">{download.platform}</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm">{download.description}</p>
              <a
                href={download.url}
                className="flex items-center justify-center w-full bg-gray-700 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-md transition-colors group-hover:bg-emerald-600"
              >
                <Download size={18} className="mr-2" />
                Download {download.fileFormat}
              </a>
              <p className="mt-2 text-xs text-gray-500 text-center">
                {download.fileSize}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            By downloading, you agree to our terms of service and privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;