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
      name: 'Main Temple',
      address: '1234 Spiritual Way, Serenity Hills, CA 90210',
      phone: '+1 (555) 123-4567',
      email: 'temple@wealthgurus.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.50000000000000!3d34.000000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiTiAxMTjCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1615000000000!5m2!1sen!2sus'
    },
    {
      id: 2,
      name: 'Meditation Center',
      address: '5678 Enlightenment Blvd, Harmony Valley, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'meditation@wealthgurus.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1015489485225!2d-74.00000000000000!3d40.750000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1615000000000!5m2!1sen!2sus'
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