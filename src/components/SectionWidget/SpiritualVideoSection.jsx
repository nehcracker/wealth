import React, { useEffect, useRef, useState } from 'react';
import './SpiritualVideoSection.css';

const SpiritualVideoSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Auto-play video when section becomes visible
          if (videoRef.current) {
            // Small delay to ensure animation completes first
            setTimeout(() => {
              videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => {
                  console.log('Auto-play prevented by browser:', err);
                  // Keep play button visible in case auto-play is prevented
                });
            }, 1000);
          }
          
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.5, // Increased threshold to ensure video is more visible before playing
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
  
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Play prevented by browser:', err));
      }
    }
  };
  
  return (
    <div ref={sectionRef} className="spiritual-video-section">
      <div className="mystical-symbol top-left"></div>
      <div className="mystical-symbol bottom-right"></div>
      
      <div className="video-section-container">
        {/* Left Side - Video */}
        <div className={`video-container ${isVisible ? 'visible' : ''}`}>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src="/spiritual-guidance.mp4"
              poster="/video-poster.jpg"
              preload="metadata"
              muted // Added muted attribute to improve chances of autoplay
              playsInline // Better mobile compatibility
            ></video>
            
            <div className={`play-button ${isPlaying ? 'playing' : ''}`} onClick={handlePlayVideo}>
              {isPlaying ? (
                <span className="pause-icon"></span>
              ) : (
                <span className="play-icon"></span>
              )}
            </div>
            
            <div className="video-overlay">
              <div className="pulse-circle"></div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className={`video-content ${isVisible ? 'visible' : ''}`}>
          <div className="spiritual-emblem"></div>
          
          <h2>Divine Spiritual Authority</h2>
          
          <div className="content-divider">
            <span className="divider-symbol"></span>
          </div>
          
          <p className="main-description">
            Experience the profound connection to ancient spiritual wisdom that transcends time 
            and space. The spirits have bestowed their sacred knowledge upon chosen guides, 
            empowering them with divine authority to illuminate the path for seekers.
          </p>
          
          <ul className="spiritual-benefits">
            <li>
              <span className="benefit-icon"></span>
              <span>Access to ancestral spiritual power</span>
            </li>
            <li>
              <span className="benefit-icon"></span>
              <span>Divine protection against negative energies</span>
            </li>
            <li>
              <span className="benefit-icon"></span>
              <span>Manifestation of abundance and prosperity</span>
            </li>
          </ul>
          
          <div className="action-buttons">
            <button className="primary-button">
              Receive Spiritual Guidance
              <span className="button-aura"></span>
            </button>
            
            <button className="secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualVideoSection;