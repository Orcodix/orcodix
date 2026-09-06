import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <main className="contact-section-page">
      <div className="contact-main-container">
        
        {/* ==================================================
            LEFT COLUMN: HEADING, DESCRIPTION & CONTACT PILLS
            ================================================== */}
        <div className="contact-info-column">
          {/* Main Headline */}
          <h1 className="contact-heading-title">
            Contact Us
          </h1>

          {/* Descriptive Subtitle */}
          <p className="contact-lead-desc">
            For inquiries or support related to Orcodix, please contact us using the form on this page or use the provided email address and phone number to contact us directly.
          </p>

          {/* 3 Stacked Rounded Pill Info Cards */}
          <div className="contact-info-pills-list">
            {/* Pill 1: Email */}
            <a href="mailto:hello@orcodix.com" className="contact-info-pill-item">
              <div className="contact-pill-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-pill-text-wrap">
                <span className="contact-pill-title">Email</span>
                <span className="contact-pill-value">hello@orcodix.com</span>
              </div>
            </a>

            {/* Pill 2: Phone / Support */}
            <a href="tel:+15550000000" className="contact-info-pill-item">
              <div className="contact-pill-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-pill-text-wrap">
                <span className="contact-pill-title">Get support</span>
                <span className="contact-pill-value">+1 (555) 000-0000</span>
              </div>
            </a>

            {/* Pill 3: Address */}
            <div className="contact-info-pill-item">
              <div className="contact-pill-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-pill-text-wrap">
                <span className="contact-pill-title">Address</span>
                <span className="contact-pill-value">New York, United State</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            RIGHT COLUMN: BEIGE CARD WITH 2-COLUMN FORM
            ================================================== */}
        <div className="contact-form-column">
          <div className="contact-form-box-card">
            <form className="contact-grid-form" onSubmit={handleSubmit}>
              
              {/* Row 1: First Name & Last Name */}
              <div className="contact-form-row">
                <div className="contact-input-field-group">
                  <label htmlFor="firstName" className="contact-form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="contact-custom-input"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>

                <div className="contact-input-field-group">
                  <label htmlFor="lastName" className="contact-form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="contact-custom-input"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="contact-form-row">
                <div className="contact-input-field-group">
                  <label htmlFor="email" className="contact-form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="contact-custom-input"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="contact-input-field-group">
                  <label htmlFor="phone" className="contact-form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="contact-custom-input"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="contact-input-field-group full-width">
                <label htmlFor="message" className="contact-form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="contact-custom-textarea"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Row 4: Orange Full Width Submit Button */}
              <div className="contact-submit-row">
                <button
                  type="submit"
                  className={`contact-orange-submit-btn ${isSubmitted ? 'is-sent' : ''}`}
                >
                  {isSubmitted ? 'Message Sent Successfully ✓' : 'Submit'}
                </button>
              </div>

              {/* Row 5: Privacy Disclaimer */}
              <p className="contact-privacy-caption">
                By submitting this form you agree to our friendly <a href="#privacy" className="privacy-link">Privacy Policy</a>
              </p>

            </form>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;
