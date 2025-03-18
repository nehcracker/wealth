// src/components/WhatsAppWidget/WhatsAppWidget.jsx
import React, { useState, useEffect } from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = ({ phoneNumber = '+358404459079', message = 'Hello, I have a question!' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  

  useEffect(() => {
    // Show the widget after a slight delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Show the message bubble shortly after the widget appears
      setTimeout(() => {
        setIsMessageVisible(true);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCloseMessage = (e) => {
    e.stopPropagation();
    setIsMessageVisible(false);
  };

  return (
    <div className={`whatsapp-widget ${isVisible ? 'visible' : ''}`} onClick={handleClick}>
      {isMessageVisible && (
        <div className="whatsapp-message">
          <p>WhatsApp us now</p>
          <button className="close-btn" onClick={handleCloseMessage}>×</button>
        </div>
      )}
      <div className="whatsapp-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
          <defs><linearGradient id="a" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#57d163"/><stop offset="1" stopColor="#23b33a"/></linearGradient></defs>
          <path fill="url(#a)" d="M87.4 175.5a87.9 87.9 0 0 1-42.3-10.8l-30.7 9.9 10-29.7A88 88 0 0 1 87.4 0c48.6 0 88.2 39.6 88.2 88s-39.7 87.5-88.2 87.5Z"/>
          <path fill="#fff" d="M127.8 47.5c-7.6-7.6-17.8-11.9-28.6-12-22.3 0-40.4 18-40.4 40.3a40 40 0 0 0 6 21.2l-6.3 23.2 23.7-6.2a40 40 0 0 0 19.2 4.9h.1c22.3 0 40.3-18.1 40.4-40.3 0-10.8-4.2-20.9-11.8-28.5l-2.3-2.6zm-40.4 62.1a33.5 33.5 0 0 1-17-4.7l-1.3-.7-12.7 3.3 3.4-12.4-.7-1.3a33.2 33.2 0 0 1-5.1-17.8c0-18.5 15-33.5 33.5-33.5a33.3 33.3 0 0 1 23.7 9.8c6.3 6.3 9.8 14.8 9.8 23.7 0 18.4-15.1 33.5-33.5 33.5-.1.1-.1.1-.1.1z"/>
          <path fill="#fff" d="M120 93.8c-1-.5-6-3-7-3.3-.9-.3-1.6-.5-2.3.5-.7 1-2.6 3.3-3.3 4-.6.7-1.2.7-2.2.2-1-.5-4.3-1.6-8.2-5-3-2.7-5.1-6-5.7-7-.7-1-.1-1.6.5-2.1l1.7-2a5 5 0 0 0 1-1.7l.6-2c.3-1.3-.2-2.5-.5-3.5s-2.3-5.6-3.1-7.7c-.9-2-1.7-1.7-2.3-1.7h-2c-1 0-2 .4-2.6 1.2-1 1.2-3.5 3.5-3.5 8.4 0 5 3.6 9.7 4.1 10.4.5.7 7 10.7 17 15 2.4 1 4.2 1.6 5.7 2.1 2.4.8 4.5.7 6.3.4 1.9-.3 6-2.4 6.8-4.8.9-2.3.9-4.4.6-4.8-.2-.4-.9-.6-2-.9z"/>
        </svg>
      </div>
    </div>
  );
};

export default WhatsAppWidget;