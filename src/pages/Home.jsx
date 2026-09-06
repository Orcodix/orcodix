import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import ServicesSection from '../components/ServicesSection';
import SelectedWork from '../components/SelectedWork';
import CTASection from '../components/CTASection';

const ROTATING_WORDS = ['Growth', 'Impact', 'Results', 'Scale', 'Success'];

export default function Home({ theme }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordState, setWordState] = useState('is-visible');

  // Animation DOM References
  const heroRef = useRef(null);
  const watermarkRef = useRef(null);
  const glowRef = useRef(null);
  const headlineRef = useRef(null);

  // Refined Rotating Word Animation (every 2.8s, smooth 0.5s transition)
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Slide up and fade out current word
      setWordState('is-exiting');

      // 2. Change word and prepare to enter from bottom
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setWordState('is-entering');

        // 3. Slide up to center and fade in smoothly
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWordState('is-visible');
          });
        });
      }, 450);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Master GSAP Hero Sequence & Scroll Parallax
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 0.30s — Main Hero Heading Line-by-Line Reveal
      tl.fromTo(
        '.hero-line-inner',
        {
          opacity: 0,
          y: '110%',
          clipPath: 'inset(0 0 100% 0)',
        },
        {
          opacity: 1,
          y: '0%',
          clipPath: 'inset(0 0 -20% 0)',
          duration: 1.15,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          stagger: 0.15,
          onComplete: () => {
            gsap.set('.hero-line-inner', { clearProps: 'clipPath' });
          },
        },
        0.3
      );

      // 0.70s — Hero Visual / Watermark enters smoothly
      if (watermarkRef.current) {
        tl.fromTo(
          watermarkRef.current,
          { opacity: 0, scale: 0.94, yPercent: -50 },
          {
            opacity: 1,
            scale: 1,
            yPercent: -50,
            duration: 1.2,
            ease: 'power3.out',
            onComplete: () => {
              // Ultra-subtle continuous floating movement on the image
              gsap.to('.bg-left-watermark', {
                y: -8,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
          },
          0.7
        );
      }

      // 0.90s — Description enters
      tl.fromTo(
        '.hero-description',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        0.9
      );
    }, heroRef);

    // Subtle scroll parallax
    const handleScrollParallax = () => {
      const scrollY = window.scrollY;
      if (scrollY > 750) return;

      const scrollRatio = Math.min(scrollY / 600, 1);

      // Heading: -30px max, opacity: 1 -> 0.85
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translate3d(0, ${-scrollY * 0.07}px, 0)`;
        headlineRef.current.style.opacity = `${1 - scrollRatio * 0.15}`;
      }

      // Watermark visual: preserve exact position & translateY(-50%)
      if (watermarkRef.current) {
        watermarkRef.current.style.transform = `translateY(-50%) translateY(${-scrollY * 0.06}px)`;
      }
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, []);

  return (
    <div className="agency-page" ref={heroRef}>
      {/* Main Hero Section */}
      <section className="agency-hero" id="hero">
        {/* Ambient Atmospheric Background */}
        <div className="bg-canvas" aria-hidden="true">
          {/* Abstract Geometric Brand Watermark on the Left */}
          <div className="watermark-wrapper" ref={watermarkRef}>
            <img
              src="/assets/herotool.png"
              alt=""
              className="bg-left-watermark"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-headline" ref={headlineRef}>
          <span className="hero-line-mask">
            <span className="headline-line-1 hero-line-inner">We Design Digital</span>
          </span>
          <span className="hero-line-mask">
            <span className="headline-line-2 hero-line-inner">Experiences</span>
          </span>
          <span className="hero-line-mask">
            <span className="headline-line-3 hero-line-inner">
              <span className="built-for-text">Built for</span>
              <span className="growth-capsule" aria-live="polite" aria-atomic="true">
                <span className={`capsule-word ${wordState}`}>
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </span>
            </span>
          </span>
        </h1>

        {/* Hero Description */}
        <p className="hero-description">
          ORCODIX helps businesses create modern, high-performing
          digital experiences that engage users and drive results.
        </p>
      </section>

      {/* Premium Award-Winning About Section */}
      <section className="about-section-wrapper" id="about" aria-label="About ORCODIX">
        <div className="about-ambient-glow" aria-hidden="true"></div>

        <div className="about-card-container">
          {/* Left Column: Content */}
          <div className="about-content-col">
            <div className="about-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              <span className="eyebrow-text">ABOUT ORCODIX</span>
            </div>

            <h2 className="about-headline">
              <span className="about-hl-row">We design with <span className="highlight-orange">purpose.</span></span>
              <span className="about-hl-row">We build for <span className="highlight-orange">impact.</span></span>
            </h2>

            <p className="about-paragraph">
              ORCODIX is a digital design and development agency focused on creating
              high-performing websites, meaningful user experiences, and strong digital brands.
            </p>

            <a href="/about" className="about-cta-btn" id="about-learn-more">
              <span>Learn More About Us</span>
            </a>
          </div>

          {/* Right Column: Visual & Floating Mission Card */}
          <div className="about-visual-col">
            <div className="about-sculpture-frame">
              <img
                src="/assets/about-sculpture.jpg"
                alt="ORCODIX 3D Architectural Brand Sculpture"
                className="about-sculpture-img"
              />
              <div className="sculpture-ambient-lighting" aria-hidden="true"></div>
            </div>

            {/* Floating Mission Glass Card */}
            <div className="floating-mission-card">
              <div className="mission-icon-circle" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Bullseye Rings */}
                  <circle cx="16" cy="16" r="10.5" stroke="#FF6A00" strokeWidth="2.4" />
                  <circle cx="16" cy="16" r="5.5" stroke="#FF6A00" strokeWidth="2.2" />
                  <circle cx="16" cy="16" r="2.2" fill="#FF6A00" />
                </svg>
              </div>
              <div className="mission-text-wrap">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-description">
                  To empower businesses with innovative digital solutions that drive measurable growth and create meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <ServicesSection />

      {/* Straight Diagonal Marquee Section */}
      <section className="straight-marquee-section" aria-label="Brand Philosophy Marquee">
        <div className="straight-marquee-strip">
          <div className="straight-marquee-content">
            {Array(4).fill("WE DESIGN WITH PURPOSE ✦ WE BUILD FOR IMPACT ✦ DIGITAL EXPERIENCES ✦ CREATIVE ENGINEERING ✦ ").map((text, i) => (
              <span key={i} className="marquee-text">{text}</span>
            ))}
          </div>
          {/* Duplicate for seamless infinite scroll */}
          <div className="straight-marquee-content" aria-hidden="true">
            {Array(4).fill("WE DESIGN WITH PURPOSE ✦ WE BUILD FOR IMPACT ✦ DIGITAL EXPERIENCES ✦ CREATIVE ENGINEERING ✦ ").map((text, i) => (
              <span key={i} className="marquee-text">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <SelectedWork />

      {/* Premium Call to Action (CTA) Section */}
      <CTASection />

    </div>
  );
}
