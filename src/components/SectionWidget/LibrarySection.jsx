import React, { useEffect, useRef, useState } from 'react';
import './LibrarySection.css';

const LibrarySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentSectionRef = sectionRef.current;
    
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="library-section">
      <div className="library-overlay"></div>
      
      <div className="library-container">
        <div className={`library-image-container ${isVisible ? 'visible' : ''}`}>
          <div className="library-image">
            <div className="image-overlay"></div>
          </div>
        </div>
        
        <div className={`library-content ${isVisible ? 'visible' : ''}`}>
          <h2>DISCOVER THE SPIRITUAL RICHES OF DARKNESS AND RICHNESS THAT ARE BURIED IN OLD WRITINGS.</h2>
          <p>
            In antiquity, I combed through old books and found the mysterious "Wealth Gurus Ancient Wealth" 
            buried in millennia of knowledge. The phrase "Treasures of darkness and wealth concealed in secrecy" 
            was enlightened. This text offers significant, life-changing insights. Here, the focus is on making the 
            invisible visible and claiming the unclaimed, under the direction of the Wealth Gurus Spiritual Wealthy Powers.
          </p>
          <button className="explore-button">EXPLORE ANCIENT WEALTH</button>
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;