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
        {/* Mobile logo that appears on smaller screens */}
        <div className="mobile-logo-container">
          <a href="/" className="mobile-logo-link">
            <img 
              src="/logo.png" 
              alt="Wealth Gurus Logo" 
              className="mobile-logo" 
            />
          </a>
        </div>
        
        <button 
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li>
            <a href="/" className="logo-link">
              <img 
                src="/logo.png" 
                alt="Wealth Gurus Logo" 
                className="logo-image" 
              />
            </a>
          </li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default CenteredNavbar;