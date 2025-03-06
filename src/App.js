import React from 'react';
import './App.css';
import CenteredNavbar from './components/SectionWidget/CenteredNavbar';
import HeroSection from './components/HeroSection/HeroSection';
import SectionWidget from './components/SectionWidget/SectionWidget';
import LibrarySection from './components/SectionWidget/LibrarySection';
import SpiritualCard from './components/SectionWidget/SpiritualCards';
import SpiritualVideoSection from './components/SectionWidget/SpiritualVideoSection';
import ContactSection from './components/SectionWidget/ContactSection';
import SimpleFooter from './components/SectionWidget/SimpleFooter';

function App() {
  return (
    <div className="app">
      <CenteredNavbar />
      <HeroSection />
      <SpiritualCard />
      <LibrarySection />
      <SectionWidget />
      <SpiritualVideoSection />
      <ContactSection />
      <SimpleFooter />
      
      
      
    </div>
  );
}

export default App;