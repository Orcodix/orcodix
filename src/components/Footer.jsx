import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-watermark" aria-hidden="true">ORCODIX</div>
      
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Menus Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Menus</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="footer-column">
            <h3 className="footer-heading">SOCIAL MEDIA</h3>
            <ul className="footer-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column footer-newsletter-col">
            <div className="newsletter-card">
              <span className="newsletter-subtitle">Subscribe to Our</span>
              <h2 className="newsletter-title">Newsletter</h2>
              
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email-input" className="newsletter-label">Email</label>
                <div className="newsletter-input-group">
                  <input type="email" id="email-input" placeholder="contact@orcodix.com" required />
                  <button type="submit" className="newsletter-btn">Subscribe</button>
                </div>
                <p className="newsletter-disclaimer">
                  "Your monthly dose of creativity, delivered straight to your inbox."
                </p>
              </form>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p>©2026 Orcodix. Created by Orcodix in React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
