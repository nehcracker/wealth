import React, { useEffect, useRef, useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeLocation, setActiveLocation] = useState(1);
  
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
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message or other feedback
    alert('Your message has been sent. We will contact you shortly.');
  };
  
  const switchLocation = (locationId) => {
    setActiveLocation(locationId);
  };
  
  const locations = [
    {
      id: 1,
      name: 'Sanctuary of Divine Wealth',
      address: 'Kasarmikatu 16 D, 00130 Helsinki, Finland',
      phone: '+358 (404) 459-079',
      email: 'santuary.wealth@wealthfortune.site',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.142935015046!2d24.945499776684667!3d60.161812575028144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc86d1452eb%3A0x3d6cd4b793d2d7fd!2sKasarmikatu%2016d%2C%2000130%20Helsinki%2C%20Finland!5e0!3m2!1sen!2ske!4v1741298984196!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      id: 2,
      name: 'Vessel of Divine Wealth - Center Africa',
      address: 'Unga House, Muthithi Rd, Nairobi, Kenya',
      phone: '+254 785 88 00 72',
      email: 'wealth.vessel@wealthfortune.site',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.848928338891!2d36.80473579999999!3d-1.2630472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173b871a4741%3A0xd26b273294db1e04!2sUnga%20House!5e0!3m2!1sen!2ske!4v1741298847605!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ];
  
  return (
    <div ref={sectionRef} className="contact-section">
      <div className="contact-section-inner">
        <div className="section-header">
          <h2>Connect With Us</h2>
          <div className="decorative-line"></div>
        </div>
        
        {/* Top Row - Location Addresses */}
        <div className={`locations-container ${isVisible ? 'visible' : ''}`}>
          {locations.map((location) => (
            <div 
              key={location.id}
              className={`location-card ${activeLocation === location.id ? 'active' : ''}`}
              onClick={() => switchLocation(location.id)}
            >
              <div className="location-icon">
                <i className="temple-icon"></i>
              </div>
              
              <div className="location-details">
                <h3>{location.name}</h3>
                <p className="location-address">{location.address}</p>
                <div className="location-contact">
                  <p><span>Phone:</span> {location.phone}</p>
                  <p><span>Email:</span> {location.email}</p>
                </div>
              </div>
              
              {activeLocation === location.id && (
                <div className="location-indicator"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom Row - Contact Form and Map */}
        <div className="contact-map-container">
          {/* Left Side - Contact Form */}
          <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
            <h3>Send Us a Message</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
                <span className="button-icon">→</span>
              </button>
            </form>
          </div>
          
          {/* Right Side - Map */}
          <div className={`map-container ${isVisible ? 'visible' : ''}`}>
            <div className="map-wrapper">
              <iframe
                src={locations.find(loc => loc.id === activeLocation).mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
            
            <div className="map-overlay">
              <div className="directions-button">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locations.find(loc => loc.id === activeLocation).address)}`} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;