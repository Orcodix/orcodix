import React from 'react';

const ServiceCard = ({ number, title, description, visualRef, children, id }) => {
  return (
    <div className="premium-service-card" ref={visualRef} id={id}>
      <div className="service-card-visual">
        {children}
      </div>
      
      <div className="service-card-footer">
        <div className="service-card-num">//{number}</div>
        <div className="service-card-content">
          <h4 className="service-card-title">{title}</h4>
          <p className="service-card-desc">{description}</p>
          <a href="#contact" className="service-card-link">
            View Service
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-arrow">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
