import React from 'react';
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

// Components for Home page
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

// Page components
import BulmogulApp from './components/about us/BulmogulApp';

// Analytics
import ReactGA from "react-ga4";
ReactGA.initialize("AW-16898712872");
ReactGA.send("pageview");

function HomePage() {
  return (
    <div className="app">
      <CenteredNavbar />
      <HeroSection />
      <SpiritualWealthGold />
      <SpiritualCard />
      <LibrarySection />
      <SectionWidget />
      <SpiritualVideoSection />
      <ContactSection />
      <WhatsAppWidget phoneNumber="+358404459079" message="Hello, I have a question!" />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CenteredNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<BulmogulApp />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <SimpleFooter />
      </Router>
    </HelmetProvider>
  );
}

export default App;