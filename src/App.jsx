import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

// Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrcoChatbot from './components/OrcoChatbot';

// Pages
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import Services from './pages/Services';

// Service Pages
import DigitalProductDesign from './pages/services/DigitalProductDesign';
import WebDesignDevelopment from './pages/services/WebDesignDevelopment';
import UXResearchUIDesign from './pages/services/UXResearchUIDesign';
import BrandIdentity from './pages/services/BrandIdentity';
import CreativeDevelopment from './pages/services/CreativeDevelopment';

import './index.css';

export default function App() {
  const location = useLocation();

  // Initialize theme with localStorage and system preference fallback
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orcodix-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('orcodix-theme', theme);
    } catch {
      // Ignore localStorage write failures in private browsing
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.088,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.25,
        infinite: false,
      }}
    >
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="page-transition-wrapper" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-project" element={<Contact />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/digital-product-design" element={<DigitalProductDesign />} />
          <Route path="/services/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/services/ux-research-ui-design" element={<UXResearchUIDesign />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/creative-development" element={<CreativeDevelopment />} />
        </Routes>
      </main>

      <Footer />
      <OrcoChatbot />
    </ReactLenis>
  );
}
