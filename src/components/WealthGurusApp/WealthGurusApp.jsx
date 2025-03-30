import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './WealthGurusApp.module.css';

const WealthGurusApp = () => {
  return (

    <div>
      <Helmet>
        {/* Basic Metadata */}
        <title>Wealth Gurus & Riches</title>
        <meta name="description" content="Restoring Wealth, Power, Spiritual Harmony & Money Activation" />
        <link rel="canonical" href="https://wealthfortune.site/wealthgurus" />

        {/* Open Graph / Facebook Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wealthfortune.site/" />
        <meta property="og:title" content="Wealth Gurus & Riches" />
        <meta property="og:description" content="Restoring Wealth, Power, Spiritual Harmony & Money Activation" />
        <meta property="og:image" content="https://wealthfortune.site/cross.png" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wealthfortune.site/" />
        <meta name="twitter:title" content="Wealth Gurus & Riches" />
        <meta name="twitter:description" content="Restoring Wealth, Power, Spiritual Harmony & Money Activation" />
        <meta name="twitter:image" content="https://wealthfortune.site/cross.png" />
      </Helmet>

    <div className={styles.app}>
      <div 
        className={styles.businessCard}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div className={styles.logoContainer}>
        <img 
            src={`${process.env.PUBLIC_URL}/cross.png`} 
            alt="Wealth Gurus Logo" 
            className={styles.logo} 
          />
          
        </div>
        
        <div className={styles.cardContent}>
          <h1 className={styles.cardTitle}>Business Card</h1>
          <h2 className={styles.cardTitle2}>Wealth Gurus & Riches</h2>
          <p className={styles.cardDescription}>
            We are dedicated to restoring lost wealth, political influence, and divine balance through ancient spiritual wisdom, deep mystical practices, and sacred rituals.
          </p>
          
          <div className={styles.contactSectionsRow}>
            <div className={styles.contactSection}>
              <h3 className={styles.sectionTitle}>Vessel of Divine Wealth - Center Africa</h3>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a className={styles.contactLink} href="mailto:wealth.vessel@wealthfortune.site">wealth.vessel@wealthfortune.site</a>
              </div>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a className={styles.contactLink} href="https://wa.me/254785880072" target="_blank" rel="noopener noreferrer">+254 785 880 072</a>
              </div>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <a className={styles.contactLink} href="https://wealthfortune.site/" target="_blank" rel="noopener noreferrer">wealthfortune.site</a>
              </div>
            </div>
            
            <div className={styles.contactSection}>
              <h3 className={styles.sectionTitle}>Sanctuary of Divine Wealth</h3>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a className={styles.contactLink} href="mailto:santuary.wealth@wealthfortune.site">santuary.wealth@wealthfortune.site</a>
              </div>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a className={styles.contactLink} href="https://wa.me/358404459079" target="_blank" rel="noopener noreferrer">+358 40 445 9079</a>
              </div>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <a className={styles.contactLink} href="https://wealthfortune.site/" target="_blank" rel="noopener noreferrer">wealthfortune.site</a>
              </div>
            </div>
          </div>
          
          <a 
            href="https://wealthfortune.site/" 
            className={styles.ctaButton} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37';
              e.currentTarget.style.color = '#0A1747';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0A1747';
              e.currentTarget.style.color = '#D4AF37';
            }}
          >
            Join Us Today & Unlock Financial Success
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WealthGurusApp;