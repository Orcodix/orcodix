import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrcoChatbot.css';

const BOT_KNOWLEDGE = [
  {
    keywords: ['service', 'services', 'what do you do', 'offer', 'design', 'development'],
    response: "We offer top-tier digital services:\n• UX Research & UI Design\n• Web Design & Development\n• Brand Identity & Strategy\n• Digital Product Design\n• Creative Engineering\n\nWould you like to explore our work or get a quote?",
    link: '/services/web-design-development',
    linkText: 'View All Services →'
  },
  {
    keywords: ['price', 'pricing', 'cost', 'quote', 'rate', 'budget'],
    response: "Every project is tailored to your unique goals. You can reach out directly via our Contact page or message us on WhatsApp for an instant consultation.",
    link: '/contact',
    linkText: 'Request a Quote →'
  },
  {
    keywords: ['contact', 'email', 'phone', 'call', 'location', 'reach'],
    response: "You can reach Orcodix directly:\n📧 Email: hello@orcodix.com\n📞 Phone: +1 (555) 000-0000\n📍 New York, United States\n💬 Or reach us right here!",
    link: '/contact',
    linkText: 'Go to Contact Page →'
  },
  {
    keywords: ['project', 'start', 'hire', 'work together', 'build'],
    response: "Ready to build something unforgettable? Let's discuss your roadmap, timeline, and deliverables.",
    link: '/contact',
    linkText: 'Start a Project →'
  },
  {
    keywords: ['team', 'founder', 'who', 'about', 'faheem', 'muhammed'],
    response: "ORCODIX is powered by industry-leading creators:\n• Muhammed — Lead Designer & Founder\n• Faheem A V — Creative Director\n• Mohammed Saad M N — MEAN Stack Developer",
    link: '/about',
    linkText: 'Learn More About Us →'
  }
];

export default function OrcoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! 👋 I'm **Orco**, your Orcodix Assistant. How can we help elevate your brand today?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = BOT_KNOWLEDGE.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      let botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: matched
          ? matched.response
          : "Thanks for reaching out! Our team is ready to assist. Would you like to schedule a strategy call or chat directly via WhatsApp?",
        link: matched ? matched.link : '/contact',
        linkText: matched ? matched.linkText : 'Contact Our Team →',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  const handleQuickOption = (optionText) => {
    handleSendMessage(optionText);
  };

  return (
    <div className="orco-widget-root">
      {/* Interactive Chat Window Popover */}
      {isOpen && (
        <div className="orco-chat-window" role="dialog" aria-label="Orco Chat Assistant">
          {/* Header */}
          <div className="orco-header">
            <div className="orco-header-info">
              <div className="orco-avatar-wrap">
                <div className="orco-header-avatar">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="orco-online-dot"></span>
              </div>
              <div>
                <h3 className="orco-header-title">Orco</h3>
                <span className="orco-header-status">ORCODIX AI Assistant • Online</span>
              </div>
            </div>

            <button
              type="button"
              className="orco-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div className="orco-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`orco-msg-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
              >
                <div className={`orco-msg-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                  <p className="orco-msg-text">{msg.text}</p>
                  {msg.link && (
                    <Link
                      to={msg.link}
                      className="orco-action-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {msg.linkText}
                    </Link>
                  )}
                  <span className="orco-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="orco-msg-row bot-row">
                <div className="orco-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="orco-chips-row">
            <button type="button" onClick={() => handleQuickOption('Tell me about your services')}>
              💼 Services
            </button>
            <button type="button" onClick={() => handleQuickOption('How do we start a project?')}>
              🚀 Start Project
            </button>
            <button type="button" onClick={() => handleQuickOption('How to contact you?')}>
              📞 Contact Info
            </button>
            <button type="button" onClick={() => handleQuickOption('Who is on the team?')}>
              👥 Meet Team
            </button>
          </div>

          {/* Chat Input */}
          <form
            className="orco-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Ask Orco anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="orco-text-input"
            />
            <button
              type="submit"
              className="orco-send-btn"
              aria-label="Send message"
              disabled={!inputValue.trim()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="floating-actions-stack">
        {/* ORCO Floating Trigger Button */}
        <button
          type="button"
          className={`orco-float-btn ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Orco AI Chat"
          id="orco-chat-button"
          title="Chat with Orco"
        >
          <div className="orco-icon-inner">
            {/* Orange Orco Mascot SVG */}
            <svg
              className="orco-mascot-svg"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Chat Speech Bubble in Vibrant Orange */}
              <path
                d="M50 14C30.67 14 15 28.33 15 46C15 54 18.2 61.2 23.5 66.5L20 82L36 76C40.3 77.3 45 78 50 78C69.33 78 85 63.67 85 46C85 28.33 69.33 14 50 14Z"
                stroke="#FF6B1A"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Character Face / 'O' & Robot Expression */}
              <circle
                cx="50"
                cy="44"
                r="16"
                stroke="#FF6B1A"
                strokeWidth="4.5"
              />
              {/* Cute Smiling Face inside 'O' */}
              <circle cx="45" cy="42" r="2.2" fill="#FF6B1A" />
              <circle cx="55" cy="42" r="2.2" fill="#FF6B1A" />
              <path
                d="M46 48C48 51 52 51 54 48"
                stroke="#FF6B1A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="orco-label-text">ORCO</span>
          </div>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          aria-label="Chat on WhatsApp"
          id="whatsapp-chat-button"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.29 15.1 13.69 14.87 13.6C14.65 13.52 14.48 13.48 14.32 13.73C14.15 13.98 13.67 14.54 13.52 14.71C13.38 14.88 13.23 14.9 12.98 14.78C12.73 14.65 11.93 14.39 10.98 13.54C10.24 12.88 9.74 12.06 9.6 11.81C9.45 11.56 9.58 11.43 9.71 11.3C9.82 11.19 9.96 11.01 10.08 10.87C10.21 10.72 10.25 10.62 10.33 10.45C10.41 10.29 10.37 10.14 10.31 10.02C10.25 9.9 9.75 8.67 9.54 8.17C9.34 7.68 9.14 7.75 8.98 7.74C8.84 7.73 8.67 7.73 8.5 7.73C8.34 7.73 8.07 7.79 7.84 8.04C7.61 8.29 6.96 8.9 6.96 10.13C6.96 11.36 7.86 12.55 7.98 12.72C8.11 12.88 9.75 15.41 12.26 16.49C12.86 16.75 13.32 16.9 13.69 17.02C14.29 17.21 14.84 17.18 15.28 17.12C15.76 17.05 16.76 16.51 16.97 15.93C17.18 15.36 17.18 14.86 17.12 14.76C17.05 14.65 16.89 14.53 16.57 14.41Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
