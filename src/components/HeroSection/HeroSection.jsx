import React, { useEffect, useState } from 'react';
import SEO from "../SEO";

import './HeroSection.css';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount with a slight delay
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <div>
   
    <SEO
        title="Wealth Riches Gurus | Unlock Financial Success & Wealth Growth"
        description="Join Wealth Riches Gurus and discover proven strategies for wealth creation, financial growth, and investment success."
        keywords="wealth, riches, finance, investment, money, business growth, financial freedom"
        image="https://wealthfortune.site/library-background.jpg"
        url="https://wealthfortune.site/"
        type="website"
      />
      
    <div className="hero-section">
      <div className="hero-content">
        <h1 className={`hero-title ${visible ? 'visible' : ''}`}>WEALTH</h1>
        <h2 className={`hero-subtitle ${visible ? 'visible' : ''}`}>RICHES</h2>
        <h1 className={`hero-title ${visible ? 'visible' : ''}`}>GURUS</h1>
        <p className={`hero-description ${visible ? 'visible' : ''}`}>
          By embracing the Realm of our Wealth organization, 
          you become part of the WRG Spiritual Wealth Manifestation, 
          reconnecting with a global family of 36 million prosperous members, 
          united in abundance and spiritual growth.
        </p>
      </div>
    </div>
  
     
    </div>
  );
};

export default HeroSection;
