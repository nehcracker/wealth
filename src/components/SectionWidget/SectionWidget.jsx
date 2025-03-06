import React, { useEffect, useRef, useState } from 'react';
import './SectionWidget.css';

const SectionWidget = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Create Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point
      }
    );
    
    const currentSectionRef = sectionRef.current;
    
    // Start observing the section
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    
    // Cleanup observer on component unmount
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="section-widget">
      {/* Mission heading with crown icon */}
      <div className="mission-icon">
        <span className="crown-icon">👑</span> MISION
      </div>
      
      <div className="widget-content">
        {/* Left content - slides from bottom */}
        <div className={`left-content ${isVisible ? 'visible' : ''}`}>
          <h2>THE RICH IN UNCHARTED LIFE ARE FOUND IN THE DEEP OCEAN.</h2>
          <p>
            The lost treasures from the deep sea that the jinnis had gotten have just been rediscovered by 
            Wealth Gurus Spiritual wealth, who has made enormous efforts in accordance with the spirits' 
            directives to return the wealth to the beneficial owners.
          </p>
        </div>
        
        {/* Right image - slides from right */}
        <div className={`right-image ${isVisible ? 'visible' : ''}`}>
          <img src="/shipwreck-2.jpg" alt="Shipwreck treasure" />
        </div>
      </div>
    </div>
  );
};

export default SectionWidget;