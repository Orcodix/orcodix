import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection({
  eyebrow = "Ready to elevate your digital presence?",
  titleLine1 = "Let’s Build",
  titleLine2 = "Something",
  titleLine3 = "",
  highlightWord = "Great.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink
}) {
  const text = secondaryText || buttonText || primaryText || "Contact Us";
  const link = secondaryLink || buttonLink || primaryLink || "/contact";

  return (
    <section className="home-cta-wrapper" aria-label="Call to Action">
      <div className="home-cta-container">
        {/* Main Central Card */}
        <div className="home-cta-card">
          {/* Ambient inner card glow */}
          <div className="cta-card-inner-glow" aria-hidden="true" />

          {/* Floating Top-Left Rotating 8-Point Asterisk Star Badge */}
          <div className="cta-floating-badge" aria-hidden="true">
            <svg
              className="cta-asterisk-icon"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 8-Point Rounded Geometric Asterisk Star matching reference */}
              <rect x="43" y="14" width="14" height="72" rx="7" fill="#FF6A00" />
              <rect x="43" y="14" width="14" height="72" rx="7" fill="#FF6A00" transform="rotate(45 50 50)" />
              <rect x="43" y="14" width="14" height="72" rx="7" fill="#FF6A00" transform="rotate(90 50 50)" />
              <rect x="43" y="14" width="14" height="72" rx="7" fill="#FF6A00" transform="rotate(135 50 50)" />
            </svg>
          </div>

          {/* Floating Bottom-Right Rotating Circular Badge */}
          <div className="cta-rotating-seal-wrapper" aria-hidden="true">
            <div className="cta-rotating-seal">
              <svg viewBox="0 0 160 160" className="cta-seal-svg">
                <path
                  id="ctaSealCirclePath"
                  d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                  fill="none"
                />
                <text className="cta-seal-text">
                  <textPath
                    href="#ctaSealCirclePath"
                    startOffset="0%"
                    textLength="364"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    • AMPLIFIED • ORCODIX • YOUR STORY
                  </textPath>
                </text>
              </svg>
              {/* Center Sparkle Star Icon inside circular seal */}
              <div className="cta-seal-center-dot">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Top Eyebrow / Subtitle */}
          <p className="cta-eyebrow">{eyebrow}</p>

          {/* Big Bold Headline */}
          <h2 className="cta-main-headline">
            <span className="cta-title-row">{titleLine1}</span>
            <span className="cta-title-row">
              {titleLine2} <span className="cta-highlight-word">{highlightWord}</span>
            </span>
          </h2>

          {/* Action Buttons */}
          <div className="cta-action-buttons">
            <Link to={link} className="cta-btn cta-btn-dark" id="cta-contact-btn">
              <span>{text}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
