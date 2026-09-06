import React from 'react';

const DigitalProductDesign = () => {
  return (
    <div className="agency-page">
      <section className="agency-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="bg-canvas" aria-hidden="true">
          <div className="bg-orange-glow"></div>
        </div>
        <div style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <h1 className="hero-headline">
            <span className="hero-line-mask">
              <span className="hero-line-inner" style={{ transform: 'none', opacity: 1, clipPath: 'none' }}>Digital Product Design</span>
            </span>
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', opacity: 1, transform: 'none' }}>
            We build intuitive and scalable digital products.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductDesign;
