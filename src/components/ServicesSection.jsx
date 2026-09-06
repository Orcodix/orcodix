import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Scroll reveal animations for each card
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.97
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out", // similar to cubic-bezier(0.16, 1, 0.3, 1)
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="premium-services-section" id="services" ref={sectionRef}>
      <div className="ps-container">
        
        {/* LEFT COLUMN: Sticky Context */}
        <div className="ps-left-col">
          <div className="ps-sticky-wrap">
            <div className="ps-eyebrow">
              <span className="ps-dot"></span>
              03 — SERVICES
            </div>
            <h2 className="ps-headline">Our Services</h2>
            <p className="ps-subtext">
              We create thoughtful digital experiences that combine strategy, design and technology to help brands grow and create meaningful impact.
            </p>
            
            <Link to="/contact" className="ps-cta-btn" id="services-start-project-btn">
              <div className="ps-cta-icon-block">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#111113" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ps-cta-text">Start a Project</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Cards */}
        <div className="ps-right-col">
          
          {/* Card 01: UI/UX Design */}
          <ServiceCard
            number="01"
            title="UI/UX Design"
            description="We design intuitive digital experiences built around real user needs, clear journeys and measurable business goals."
            visualRef={el => cardsRef.current[0] = el}
            id="service-01"
          >
            <div className="sv-uiux">
              <img
                src="/assets/service-uiux.jpg"
                alt="UI/UX Design 3D Interface Visual"
                className="sv-uiux-img"
              />
              <div className="sv-uiux-overlay" aria-hidden="true"></div>
            </div>
          </ServiceCard>

          {/* Card 02: Web Design & Development */}
          <ServiceCard
            number="02"
            title="Web Design & Development"
            description="We create high-performing websites that combine strong visual design, responsive experiences and modern technology."
            visualRef={el => cardsRef.current[1] = el}
            id="service-02"
          >
            <div className="sv-web">
              {/* Desktop Browser */}
              <div className="sv-browser">
                <div className="sv-browser-bar">
                  <div className="sv-dot"></div><div className="sv-dot"></div><div className="sv-dot"></div>
                </div>
                <div className="sv-browser-content">
                  <div className="sv-wire-hero"></div>
                  <div className="sv-wire-grid">
                    <div className="sv-wire-box"></div>
                    <div className="sv-wire-box"></div>
                    <div className="sv-wire-box"></div>
                  </div>
                </div>
              </div>
              {/* Mobile Screen overlapping */}
              <div className="sv-mobile">
                <div className="sv-mobile-nav"></div>
                <div className="sv-mobile-hero sv-orange-accent"></div>
                <div className="sv-mobile-card"></div>
                <div className="sv-mobile-card"></div>
              </div>
            </div>
          </ServiceCard>

          {/* Card 03: Brand Identity */}
          <ServiceCard
            number="03"
            title="Brand Identity"
            description="We build distinctive brand systems that create consistency, recognition and meaningful connections."
            visualRef={el => cardsRef.current[2] = el}
            id="service-03"
          >
            <div className="sv-brand">
              <div className="sv-brand-grid">
                {/* Logo Mark Construction */}
                <div className="sv-brand-cell sv-cell-main">
                  <div className="sv-logo-mark">
                    <div className="sv-logo-arc"></div>
                    <div className="sv-logo-chevron"></div>
                  </div>
                </div>
                {/* Typography & Colors */}
                <div className="sv-brand-cell sv-cell-type">
                  <div className="sv-type-line w-full"></div>
                  <div className="sv-type-line w-3-4"></div>
                  <div className="sv-type-line w-1-2"></div>
                </div>
                <div className="sv-brand-cell sv-cell-color sv-color-dark"></div>
                <div className="sv-brand-cell sv-cell-color sv-color-orange"></div>
              </div>
            </div>
          </ServiceCard>

          {/* Card 04: Creative Development */}
          <ServiceCard
            number="04"
            title="Creative Development"
            description="We bring digital ideas to life through creative technology, motion and interactive experiences."
            visualRef={el => cardsRef.current[3] = el}
            id="service-04"
          >
            <div className="sv-creative">
              <div className="sv-creative-glow"></div>
              <div className="sv-creative-scene">
                {/* Abstract geometric forms simulating 3D */}
                <div className="sv-geo sv-geo-sphere"></div>
                <div className="sv-geo sv-geo-torus"></div>
                <div className="sv-geo sv-geo-pyramid"></div>
              </div>
            </div>
          </ServiceCard>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
