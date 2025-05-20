import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ReleaseAnnouncement from './components/ReleaseAnnouncement';
import DownloadSection from './components/DownloadSection';
import GameFeatures from './components/GameFeatures';
import BiomesShowcase from './components/BiomesShowcase';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroBanner />
        <ReleaseAnnouncement />
        <DownloadSection />
        <GameFeatures />
        <BiomesShowcase />
        <MediaSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;