import React from 'react';

const WebDesignDevelopment = () => {
  return (
    <div className="agency-page">
      <section className="agency-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="bg-canvas" aria-hidden="true">
          <div className="bg-orange-glow"></div>
        </div>
        <div style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <h1 className="hero-headline">
            <span className="hero-line-mask">
              <span className="hero-line-inner" style={{ transform: 'none', opacity: 1, clipPath: 'none' }}>Web Design & Development</span>
            </span>
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', opacity: 1, transform: 'none' }}>
            High-performing websites that drive results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WebDesignDevelopment;
