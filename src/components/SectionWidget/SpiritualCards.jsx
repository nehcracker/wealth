import React, { useEffect, useRef, useState } from 'react';
import './SpiritualCards.css';

const SpiritualCards = () => {
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
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const cards = [
    {
      id: 1,
      title: "Money Activation",
      description: "By tapping into divine energy, receiving of the sacred symbol, and embracing money rituals, we remove financial blockages and manifest prosperity beyond limitations.",
      image: "/Money-Activation.jpg",
      
      delay: 0
    },
    {
      id: 2,
      title: "Reconnecting Lost Treasure",
      description: "We restore what was once thought lost: wealth, political power, assets, and the bonds of love that transcend time. Through divine alignment, we guide you to reclaim your rightful abundance.",
      image: "/lost-treasure.jpeg",
      delay: 0.2
    },
    {
      id: 3,
      title: "Unearthing Mystery",
      description: "The universe whispers its secrets to those who listen. Embrace the wonder of the unseen, the beauty of divine revelation, and the mysteries that lead to deeper understanding.",
      image: "/mystery.jpeg",
      delay: 0.4
    },
    {
      id: 4,
      title: "Spiritual Compass",
      description: "In the vastness of life's journey, our souls seek direction. Let your inner compass align with divine truth, guiding you toward enlightenment and purpose.",
      image: "/spiritual-compass.jpeg",
      delay: 0.6
    }
  ];
  
  return (
    <div ref={sectionRef} className="spiritual-cards-section">
      <div className="section-headers">
        <h2>Our Foremost Spiritual Path: A Journey of Awakening</h2>
        <div className="decorative-line"></div>
      </div>
      
      <div className="cards-grid">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`card ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${card.delay}s` }}
          >
            <div className="card-image-wrapper">
              <div 
                className="card-image" 
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="card-overlay">
                <div className="card-number">{card.id}</div>
              </div>
            </div>
            
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="read-more-btn">
                Explore
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualCards;