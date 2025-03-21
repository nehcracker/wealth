import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import './App.css';
import CenteredNavbar from './components/SectionWidget/CenteredNavbar';
import HeroSection from './components/HeroSection/HeroSection';
import SectionWidget from './components/SectionWidget/SectionWidget';
import LibrarySection from './components/SectionWidget/LibrarySection';
import SpiritualCard from './components/SectionWidget/SpiritualCards';
import SpiritualVideoSection from './components/SectionWidget/SpiritualVideoSection';
import ContactSection from './components/SectionWidget/ContactSection';
import SimpleFooter from './components/SectionWidget/SimpleFooter';
import SpiritualWealthGold from './components/SectionWidget/SpiritualWealthGold';
import WhatsAppWidget from './components/WhatsAppWidget';
import ReactGA from "react-ga4";
ReactGA.initialize("AW-16898712872");
ReactGA.send("pageview");



function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <CenteredNavbar />
        <HeroSection />
        <SpiritualWealthGold />
        <SpiritualCard />
        <LibrarySection />
        <SectionWidget />
        <SpiritualVideoSection />
        <ContactSection />
        <SimpleFooter />
        <WhatsAppWidget phoneNumber="+358404459079" message="Hello, I have a question!" />
      </div>
    </HelmetProvider>

  );
}

export default App;
