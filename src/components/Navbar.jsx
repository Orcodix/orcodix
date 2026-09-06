import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';
import MobileMenu from './MobileMenu';

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const currentLogo = theme === 'dark' ? '/assets/logo.png' : '/assets/logo-dark.png';

  const navItems = ['Home', 'Services', 'Work', 'About', 'Blog', 'Contact'];

  const getPath = (item) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };

  const isItemActive = (item) => {
    if (item === 'Home') return location.pathname === '/';
    return location.pathname.startsWith(`/${item.toLowerCase()}`);
  };

  return (
    <>
      <header className={`agency-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="unified-navbar-pill">
          {/* Brand Logo - Left */}
          <Link to="/" className="brand-logo-link" aria-label="ORCODIX Home">
            <img
              key={currentLogo}
              src={currentLogo}
              alt="ORCODIX"
              className="brand-logo-img"
              onError={(e) => {
                e.currentTarget.src = '/assets/logo.png';
              }}
            />
          </Link>

          {/* Center Floating Navigation Links */}
          <nav className="nav-links-center" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item}
                to={getPath(item)}
                className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Header Controls: Theme Toggle & CTA Button & Mobile Trigger */}
          <div className="header-actions">
            {/* High-End Light / Dark Mode Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                /* Moon Icon with sleek curvature */
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun Icon with radiating celestial rays */
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
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

            {/* Desktop CTA Button */}
            <Link to="/contact" className="nav-cta-btn desktop-only">
              <span>Start a Project</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <MobileMenu
          theme={theme}
          toggleTheme={toggleTheme}
          currentLogo={currentLogo}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
