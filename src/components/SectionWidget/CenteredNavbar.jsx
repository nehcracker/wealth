import React, { useState, useEffect } from 'react';
import './CenteredNavbar.css';

const CenteredNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar-container') && !e.target.closest('.hamburger-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);
  
  return (
    <nav className={`centered-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button 
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li><a href="/" className="logo-link">
            <div className="logo">
              <img 
                src="/logo.png" 
                alt="Wealth Gurus Logo" 
                className="logo-image" 
              />
            </div>
          </a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default CenteredNavbar;