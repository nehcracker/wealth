import React, { useEffect, useState } from 'react';
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
  );
};

export default HeroSection;