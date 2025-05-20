import React from 'react';
import { Mail, Github, Youtube, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* Pixel pattern divider */}
      <div className="absolute inset-x-0 top-0 h-2" style={{
        backgroundImage: `linear-gradient(90deg, transparent 50%, rgba(139,92,246,.3) 50%)`,
        backgroundSize: '8px 8px'
      }}></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
                ✨ Eldoria
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              A 2D Cooperative Fantasy Board Game Adventure
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Discord size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Download', 'Features', 'Media', 'About'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Sign up for our newsletter to receive updates about new releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white rounded-l-md px-4 py-2 flex-1 border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-md px-4 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Eldoria Game. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Version 1.0.0 | Made with ❤️ by the Eldoria Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;