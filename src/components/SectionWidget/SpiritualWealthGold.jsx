import React, { useState, useEffect, useRef } from 'react';
import './SpiritualWealthGold.css';

const SpiritualWealthGold = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const totalSlides = 3;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Handle video autoplay issues on various browsers
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Autoplay started successfully
          setIsVideoLoaded(true);
        }).catch(error => {
          // Autoplay was prevented
          console.log("Autoplay prevented:", error);
          setIsVideoLoaded(true); // Still mark as loaded, just not autoplaying
        });
      }
    }
    
    // Add event listeners for different browser states
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(e => console.log("Could not resume video:", e));
        }
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  
  const handleDotClick = (slideNum) => {
    setCurrentSlide(slideNum);
  };
  
  // Fallback for browsers that don't support video
  const renderVideoFallback = () => {
    return (
      <div className="video-fallback">
        <img 
          src={`${process.env.PUBLIC_URL}/spiritual-guidance-poster.jpg`} 
          alt="Spiritual Guidance Visualization" 
          className="fallback-image"
        />
      </div>
    );
  };
  
  return (
    <div className="sw-container">
      <div className="sw-header">
        <h1>The Spiritual Secrets to Wealth Restoration</h1>
        <h2>Unlock Divine Wealth: Restore Abundance Through Spiritual Power & Universal Energy</h2>
      </div>
      
      <div className="sw-video-section">
        <div className="sw-video-container">
          {/* Video with multiple source formats for better compatibility */}
          <video 
            ref={videoRef}
            className="sw-video-player" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            poster={`${process.env.PUBLIC_URL}/spiritual-guidance-poster.jpg`}
            onCanPlay={() => setIsVideoLoaded(true)}
          >
            <source src={`${process.env.PUBLIC_URL}/wealth-spiritual.mp4`} type="video/mp4" />
            <source src={`${process.env.PUBLIC_URL}/spiritual-guidance.webm`} type="video/webm" />
            {renderVideoFallback()}
          </video>
          
          {/* Placeholder while video loads */}
          {!isVideoLoaded && renderVideoFallback()}
        </div>
        
        <div className="sw-content-container">
          <div className={`sw-slide ${currentSlide === 1 ? 'sw-active' : ''}`}>
            <h3>Abundance as Energy</h3>
            <p>Wealth is more than material gain—it is energy that flows when aligned with divine principles. To restore financial prosperity, you must vibrate at the frequency of abundance.</p>
            <div className="sw-slide-actions">
              <a href="/" className="sw-btn">Learn More</a>
            </div>
          </div>
          
          <div className={`sw-slide ${currentSlide === 2 ? 'sw-active' : ''}`}>
            <h3>Clearing Financial Blockages</h3>
            <p>Financial obstacles are often spiritual in nature. Through spiritual cleansing and invoking divine entities like Lakshmi and Archangel Raziel, you can remove barriers to wealth.</p>
            <div className="sw-slide-actions">
              <a href="/" className="sw-btn">Discover Techniques</a>
            </div>
          </div>
          
          <div className={`sw-slide ${currentSlide === 3 ? 'sw-active' : ''}`}>
            <h3>Harnessing Universal Wealth Energy</h3>
            <p>By using manifestation techniques such as affirmations, visualization, and numerology codes, you can align with spiritual forces and attract lasting financial abundance.</p>
            <div className="sw-slide-actions">
              <a href="/" className="sw-btn">Start Your Journey</a>
            </div>
          </div>
          
          <div className="sw-slide-nav">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`sw-slide-dot ${currentSlide === num ? 'sw-active' : ''}`}
                onClick={() => handleDotClick(num)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${num}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleDotClick(num);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualWealthGold;