import React, { useEffect, useState, useRef } from 'react';
import './BulmogulApp.css';

const BulmogulApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef(null);
  
  // Service slides data
  const serviceSlides = [
    {
      icon: '💰',
      title: 'Spiritual Wealth Restoration',
      description: 'We assist in reclaiming lost financial prosperity, family assets, and generational wealth that may have been taken by unseen forces. Through ancient rituals and spiritual guidance, we help you recover what rightfully belongs to you.'
    },
    {
      icon: '👑',
      title: 'Leadership & Influence Reinstatement',
      description: 'Through sacred prayers and spiritual alignment, we help reinstate individuals into positions of leadership, political power, and authority. Reclaim your destined role in society with our spiritual support.'
    },
    {
      icon: '🛡️',
      title: 'Protection & Healing Rituals',
      description: 'We conduct spectacular protection rituals for family restoration and unity, resolving inner conflicts, restoring lost treasures and inheritance, individual star restoration for personal success, and financial empowerment.'
    },
    {
      icon: '🔮',
      title: 'Spiritual Consultations',
      description: 'Our expert spiritual guides provide deep spiritual insights to help you overcome personal, financial, and existential challenges. Gain clarity and direction in your life journey with our guidance.'
    },
    {
      icon: '💎',
      title: 'Divine Wealth & Financial Empowerment',
      description: 'We offer funding solutions with low interest rates, no collateral, and no guarantees required, ensuring that individuals and businesses receive the financial boost they need for growth and success.'
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      quote: "After years of financial struggle, Bulmogul's wealth restoration rituals helped me recover my family's lost inheritance. Now my business is thriving, and I've regained my rightful position in society.",
      author: "Emmanuel K., Ghana"
    },
    {
      quote: "The protection rituals conducted by Bulmogul's spiritual masters have brought peace and harmony to my family. The dark forces that were causing conflict have been banished, and we are now united in prosperity.",
      author: "Sarah M., Kenya"
    },
    {
      quote: "I was skeptical at first, but after the star restoration ritual, opportunities began flowing into my life. I've been promoted to a leadership position and my financial situation has improved dramatically.",
      author: "Johnathan T., Nigeria"
    },
    {
      quote: "The spiritual consultations provided clarity on my life path. With their guidance, I was able to identify and overcome the invisible barriers that were holding me back from achieving my full potential.",
      author: "Rebecca O., South Africa"
    }
  ];

  // Handle smooth scrolling for navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  };

  // Handle carousel navigation
  const nextSlide = React.useCallback(() => {
    setCurrentSlide(prev => (prev < serviceSlides.length - 1 ? prev + 1 : 0));
  }, [serviceSlides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : serviceSlides.length - 1));
  };

  // Set up automatic carousel and testimonial rotation
  useEffect(() => {
    // Auto-slide carousel every 5 seconds
    const carouselInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Auto-rotate testimonials every 4 seconds
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 4000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(carouselInterval);
      clearInterval(testimonialInterval);
    };
  }, [nextSlide, testimonials.length]);

  // Update carousel transform when currentSlide changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="bulmogul-app">
      {/* Header */}
      <header>
        <h1>Bulmogul Wealthy Gurus</h1>
        <p>Restoring Wealth, Power & Spiritual Harmony</p>
      </header>

      {/* Navigation */}
      <nav>
        <div className="container">
          <ul>
            <li><a href="#our-story" onClick={(e) => handleNavClick(e, "our-story")}>Our Story</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>What We Offer</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, "testimonials")}>Testimonials</a></li>
            <li><a href="#membership" onClick={(e) => handleNavClick(e, "membership")}>Join Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Our Story Section */}
      <section id="our-story" className="our-story">
        <div className="container">
          <h2 className="section-title">Our Sacred Heritage</h2>
          <div className="story-content">
            <div className="story-text">
              <h2>Ancient Wisdom, Modern Restoration</h2>
              <p>Bulmogul Wealthy Gurus is an esteemed organization rooted in deep spiritual traditions, tracing its origins to the 16th-century spiritual movements of Alumbrados in Spain and Rosicrucians in Italy.</p>
              <p>Since our formation, we have expanded globally, now uniting millions of members, including a strong presence in Africa.</p>
              <p>We are dedicated to restoring lost wealth, political influence, and divine balance through ancient spiritual wisdom, deep mystical practices, and sacred rituals. Our mission is to recover and reinstate stolen wealth that has been hidden by invisible forces—including black spirits, Djinns, Marid, Ifrit, Shaitan, and Sila—and restore it to its rightful owners through powerful spiritual interventions.</p>
            </div>
            <div className="story-stats">
              <div className="stat-box">
                <div className="stat-number">36M+</div>
                <div className="stat-label">Global Members</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">Years of Wisdom</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">127</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">∞</div>
                <div className="stat-label">Spiritual Power</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
              {serviceSlides.map((service, index) => (
                <div key={index} className="carousel-slide">
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Spiritual Transformations</h2>
          <div className="testimonial-container">
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <p className="quote">"{testimonial.quote}"</p>
                  <p className="author">- {testimonial.author}</p>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`} 
                  onClick={() => setCurrentTestimonial(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership">
        <div className="container">
          <h2 className="section-title">Join Our Sacred Membership</h2>
          <div className="membership-content">
            <div className="membership-text">
              <h2>Unlock Divine Abundance</h2>
              <p>Bulmogul Wealthy Gurus welcomes all regardless of religion or historical background. Our divine network of spiritual masters is ready to guide you on your journey to prosperity and spiritual fulfillment.</p>
              <p>Membership grants access to life-changing prayers, wealth restoration, and financial empowerment opportunities that can transform your existence on this earthly plane.</p>
              <p>If you seek spiritual abundance, protection, and success, securing your membership ticket is your first step towards unlocking the hidden treasures of the universe.</p>
            </div>
            <div className="membership-cta">
              <h3>Step into the Realm of Wealth</h3>
              <p>Reclaim what is rightfully yours. Join thousands who have discovered their true potential and divine birthright through our spiritual guidance.</p>
              <a href="/" className="btn">Secure Your Membership</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulmogulApp;