import React from 'react';
import './SimpleFooter.css';

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Wealth Gurus</h3>
        </div>
        
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook">
            <span className="social-icon facebook-icon"></span>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <span className="social-icon instagram-icon"></span>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <span className="social-icon twitter-icon"></span>
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {currentYear} Wealth Gurus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;