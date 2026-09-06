import React from 'react';
import { Link } from 'react-router-dom';
import AccordionGallery from '../components/AccordionGallery';
import CTASection from '../components/CTASection';
import './About.css';

export default function About() {
  const stats = [
    { number: '50+', label: 'Digital Projects Delivered' },
    { number: '99%', label: 'Client Satisfaction Rate' },
    { number: '6+', label: 'Years of Digital Craft' },
    { number: '100%', label: 'Custom Tailored Execution' },
  ];

  const teamMembers = [
    {
      image: 'https://profilemuhammed.vercel.app/assets/profile-img.jpg',
      label: 'Muhammed',
      role: 'Lead Designer & Founder',
      link: '#'
    },
    {
      image: 'https://res.cloudinary.com/ddluoarzr/image/upload/v1787471129/faheem_bqv4n3.png',
      label: 'Faheem A V',
      role: 'Creative Director',
      link: '#'
    },
    {
      image: 'https://res.cloudinary.com/ddluoarzr/image/upload/v1788541140/WhatsApp_Image_2026-09-04_at_10.27.51_PM_j4btka.jpg',
      label: 'Mohammed Saad M N',
      role: 'MEAN Stack Developer',
      link: '#'
    }
  ];

  const steps = [
    {
      num: '01',
      label: 'STEP 01',
      title: 'Discovery & Strategy',
      desc: 'We analyze your business, audience, and goals to build a clear roadmap aligned with measurable growth.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <polygon points="11 8 13 12 9 12" fill="currentColor" stroke="none" />
        </svg>
      ),
      active: true
    },
    {
      num: '02',
      label: 'STEP 02',
      title: 'UX & Architecture',
      desc: 'We map out intuitive user journeys, wireframes, and conversion flows designed for maximum engagement.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      active: false
    },
    {
      num: '03',
      label: 'STEP 03',
      title: 'Brand & Visual Design',
      desc: 'We craft bespoke design systems, high-fidelity interfaces, and art direction that makes your brand unforgettable.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
      active: false
    },
    {
      num: '04',
      label: 'STEP 04',
      title: 'Engineering & Launch',
      desc: 'We develop high-performance, fluid code with micro-interactions, SEO optimization, and flawless deployment.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      active: false
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section" aria-labelledby="about-main-title">
        <span className="about-hero-eyebrow">About ORCODIX Agency</span>
        
        <h1 id="about-main-title" className="about-hero-title">
          Where brands become <span className="about-highlight-orange">unforgettable</span>
        </h1>

        <p className="about-hero-lead">
          ORCODIX is the digital design and web development agency built on one standard — that every project should be remembered. We work with startups, established companies, and ambitious founders across Europe, the US, and globally to build brands and websites that are 100% custom.
        </p>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="about-stat-card">
              <div className="about-stat-number">{item.number}</div>
              <div className="about-stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Redesigned World-Class "Our Process" Section */}
      <section className="about-process-section" id="process" aria-label="Our Process">
        <div className="about-process-header">
          <span className="process-eyebrow">✦ OUR PROCESS</span>
          <h2 className="process-main-headline">
            How we turn extraordinary<br />ideas into life
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="process-timeline-container">
          <div className="process-grid-row">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`process-card-item ${step.active ? 'is-active' : ''}`}
              >
                {/* Large Low-Opacity Step Number in Background */}
                <span className="process-bg-num" aria-hidden="true">
                  {step.num}
                </span>

                {/* Card Top Header: Step Badge & Minimal Icon */}
                <div className="process-card-top">
                  <span className="process-step-badge">{step.label}</span>
                  <div className="process-step-icon-wrap">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team Section with Accordion Gallery */}
      <section className="about-team-section" aria-label="Meet Our Team">
        <div className="about-team-container">
          {/* Left Column: Context & Stats */}
          <div className="about-team-info-col">
            <div className="about-team-eyebrow">
              <span className="team-eyebrow-icon">✦</span>
              <span>MEET THE EXPERTS</span>
            </div>

            <h2 className="about-team-headline">
              Meet Our Expert<br />Minds
            </h2>

            <p className="about-team-desc">
              Our team consists of experienced designers and creative professionals who guide projects with practical knowledge, real-world execution, and industry insights to help brands scale globally.
            </p>

            {/* Sub Stats Row */}
            <div className="about-team-stats-row">
              <div className="team-sub-stat">
                <div className="team-stat-num">300<span className="team-plus">+</span></div>
                <div className="team-stat-label">SUCCESSFUL PROJECTS</div>
              </div>
              <div className="team-sub-stat">
                <div className="team-stat-num">200<span className="team-plus">+</span></div>
                <div className="team-stat-label">BRANDS GROWN GLOBALLY</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Gallery */}
          <div className="about-team-gallery-col">
            <AccordionGallery
              items={teamMembers}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
              height={480}
              radius={20}
              accentColor="#FF6B1A"
            />
          </div>
        </div>
      </section>

      {/* Reusable Premium CTA Section above Footer */}
      <CTASection
        eyebrow="Ready to build something extraordinary together?"
        titleLine1="Let’s Build"
        titleLine2="Something"
        highlightWord="Great."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
