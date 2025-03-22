import React, { useEffect, useState } from 'react';
import SEO from "../SEO";
import './HeroSection.css';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
};


  return (
    <>
      <SEO
        title="Wealth Riches Gurus | Unlock Financial Success & Wealth Growth"
        description="Join Wealth Riches Gurus and discover proven strategies for wealth creation, financial growth, and investment success."
        keywords="wealth, riches, finance, investment, money, business growth, financial freedom"
        image="https://wealthfortune.site/library-background.jpg"
        url="https://wealthfortune.site/"
        type="website"
      />
      
      <section className="hero-section">
        <div className="hero-content">
          <div className={`headline-container ${visible ? 'visible' : ''}`}>
            <div className="inline-headline">
              <h1 className="headline-main">wealth gurus & riches</h1>
              <h2 className="headline-suffix">Restoring Wealth, Power, Spiritual Harmony & Money Activation </h2>
            </div>
          </div>
          
          <p className={`hero-description ${visible ? 'visible' : ''}`}>
            <strong>Join us today and unlock your financial success!</strong>
          </p>
          <button 
            className={`cta-button ${visible ? 'visible' : ''}`} 
            onClick={scrollToContact}
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
