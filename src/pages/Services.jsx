import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import './Services.css';

const servicesList = [
  {
    num: '01',
    title: 'Digital Product Design',
    category: 'Product Strategy & UI/UX',
    desc: 'We design intuitive digital products, SaaS dashboards, and mobile applications that turn complex workflows into seamless, delightful user journeys.',
    tags: ['Design Systems', 'SaaS Dashboards', 'Mobile Apps', 'Interactive Prototyping', 'User Testing'],
    link: '/services/digital-product-design',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Web Design & Development',
    category: 'Engineering & Performance',
    desc: 'High-performing, responsive websites built with modern frameworks, tailored animations, and robust architectures optimized for speed and conversion.',
    tags: ['React & Next.js', 'Custom Frontend', 'Headless CMS', 'SEO Architecture', 'E-Commerce'],
    link: '/services/web-design-development',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    )
  },
  {
    num: '03',
    title: 'UX Research & UI Design',
    category: 'Human-Centered Research',
    desc: 'Data-driven user research, qualitative customer interviews, and usability audits that eliminate friction and maximize product engagement.',
    tags: ['Usability Audits', 'User Journey Mapping', 'Information Architecture', 'Conversion Optimization'],
    link: '/services/ux-research-ui-design',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <path d="M11 8v6M8 11h6"></path>
      </svg>
    )
  },
  {
    num: '04',
    title: 'Brand Identity & Strategy',
    category: 'Brand Systems & Art Direction',
    desc: 'We build distinctive, memorable brand identities with cohesive visual guidelines, bespoke typography, and strategic positioning that stands out.',
    tags: ['Logo Systems', 'Brand Guidelines', 'Typography Systems', 'Art Direction', 'Marketing Collateral'],
    link: '/services/brand-identity',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    num: '05',
    title: 'Creative Development & Motion',
    category: 'Interactive Experience',
    desc: 'Immersive micro-interactions, smooth GSAP animations, and interactive web elements that elevate brand prestige and capture user imagination.',
    tags: ['GSAP Choreography', 'Micro-interactions', 'WebGL & Canvas', 'Fluid Motion Physics'],
    link: '/services/creative-development',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <div className="services-page-wrapper">
      {/* Hero Header */}
      <section className="services-hero-section" aria-labelledby="services-main-title">
        <span className="services-hero-eyebrow">
          <span className="services-eyebrow-dot"></span>
          CAPABILITIES & SOLUTIONS
        </span>

        <h1 id="services-main-title" className="services-hero-title">
          We design with <span className="services-highlight-orange">purpose.</span><br />
          We build for <span className="services-highlight-orange">impact.</span>
        </h1>
      </section>

      {/* Main Services Grid */}
      <section className="services-grid-section" aria-label="Our Services">
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-sub-eyebrow">✦ WHAT WE DELIVER</span>
            <h2 className="services-sub-headline">
              End-to-end digital craft tailored<br />to your business goals
            </h2>
          </div>

          <div className="services-cards-grid">
            {servicesList.map((service) => (
              <div key={service.num} className="service-feature-card">
                <div className="service-card-top-row">
                  <span className="service-badge-num">{service.num}</span>
                  <div className="service-icon-wrap">{service.icon}</div>
                </div>

                <div className="service-card-content-wrap">
                  <span className="service-category-tag">{service.category}</span>
                  <h3 className="service-card-main-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>

                  {/* Feature Tags */}
                  <div className="service-tags-list">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="service-pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="service-card-action">
                    <Link to={service.link} className="service-explore-link">
                      <span>Explore Service Details</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable CTA Section */}
      <CTASection
        eyebrow="Ready to build your next breakthrough digital product?"
        titleLine1="Let’s Build"
        titleLine2="Something"
        highlightWord="Unforgettable."
        buttonText="Start a Project"
        buttonLink="/contact"
      />
    </div>
  );
}
