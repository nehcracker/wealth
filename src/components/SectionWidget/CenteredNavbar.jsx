import React, { useState, useEffect } from 'react';
import './CenteredNavbar.css';

const CenteredNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`centered-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo-container">
          <div className="logo">
            <img 
              src="/logo.png" 
              alt="Wealth Gurus Logo" 
              className="logo-image" 
            />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default CenteredNavbar;