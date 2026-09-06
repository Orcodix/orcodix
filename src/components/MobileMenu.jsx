import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const servicesLinks = [
  { num: '01', title: 'Digital Product Design', path: '/services/digital-product-design' },
  { num: '02', title: 'Web Design & Development', path: '/services/web-design-development' },
  { num: '03', title: 'UX Research & UI Design', path: '/services/ux-research-ui-design' },
  { num: '04', title: 'Brand Identity', path: '/services/brand-identity' },
  { num: '05', title: 'Creative Development', path: '/services/creative-development' },
];

const MobileMenu = ({ theme, toggleTheme, currentLogo, onClose }) => {
  const navItems = ['Home', 'Services', 'Work', 'About', 'Blog', 'Contact'];

  const getPath = (item) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };

  return (
    <div className="mobile-nav-overlay" role="dialog" aria-modal="true">
      <div className="mobile-overlay-header">
        <img src={currentLogo} alt="ORCODIX" className="brand-logo-img" />
        <button
          type="button"
          className="mobile-close-btn"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Theme Switcher Row */}
      <div className="mobile-theme-row">
        <span className="mobile-theme-label">
          {theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}
        </span>
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
        >
          {theme === 'light' ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </div>

      <nav className="mobile-nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={getPath(item)}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            {item}
          </NavLink>
        ))}
      </nav>

      <div className="mobile-nav-cta">
        <Link to="/contact" className="nav-cta-btn" onClick={onClose}>
          <span>Start a Project</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
