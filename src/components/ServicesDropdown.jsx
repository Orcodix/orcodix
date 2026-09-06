import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const servicesLinks = [
  { num: '01', title: 'Digital Product Design', path: '/services/digital-product-design' },
  { num: '02', title: 'Web Design & Development', path: '/services/web-design-development' },
  { num: '03', title: 'UX Research & UI Design', path: '/services/ux-research-ui-design' },
  { num: '04', title: 'Brand Identity', path: '/services/brand-identity' },
  { num: '05', title: 'Creative Development', path: '/services/creative-development' },
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine if any service route is active to highlight the parent 'Services' tab
  const isActive = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item-services')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className="nav-item-services"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`nav-link ${isActive ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
      >
        <span className={`nav-link-text ${isActive ? 'active' : ''}`}>Services</span>
        <svg
          className={`nav-dropdown-icon ${isOpen ? 'is-open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div className={`services-dropdown ${isOpen ? 'is-open' : ''}`}>
        <div className="services-dropdown-inner">
          {servicesLinks.map((link) => (
            <Link
              key={link.num}
              to={link.path}
              className="services-dropdown-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="sdl-num">{link.num}</span>
              <span className="sdl-title">{link.title}</span>
              <svg
                className="sdl-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
