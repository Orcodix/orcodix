import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, getProjectBySlug } from '../data/projectsData';
import CTASection from '../components/CTASection';
import './CaseStudy.css';

const CaseStudy = () => {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  useEffect(() => {
    if (project?.title) {
      document.title = `${project.title} — Case Study | ORCODIX`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, project]);

  if (!project) {
    return null;
  }

  return (
    <article className="compact-case-page">
      <div className="compact-case-container">
        
        {/* ==================================================
            1. CENTERED HERO HEADER (Exact Reference Style)
            ================================================== */}
        <header className="case-hero-header">
          <div className="case-badge-pill">
            <span className="case-badge-dot" aria-hidden="true"></span>
            <span>Case Studies Details</span>
          </div>
          <h1 className="case-hero-title">
            {project.title}
          </h1>
          <p className="case-hero-category">
            {project.category || project.industry || 'Technology'}
          </p>
        </header>

        {/* ==================================================
            2. HERO BANNER WITH 3 FLOATING STAT CARDS OVERLAY
            ================================================== */}
        <section className="case-hero-banner-section" aria-label={`${project.title} Showcase`}>
          <div className="case-hero-banner-frame">
            <img
              src={project.heroImage}
              alt={`${project.title} Showcase`}
              className="case-hero-banner-img"
              loading="eager"
            />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-banner-live-btn"
                aria-label={`Visit live site of ${project.title}`}
              >
                <span>Live Site</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            )}

            {/* 3 Dark Frosted Stat Overlay Cards */}
            {project.resultsStats && project.resultsStats.length > 0 && (
              <div className="case-hero-stats-overlay">
                {project.resultsStats.slice(0, 3).map((stat, idx) => (
                  <div key={idx} className="case-stat-overlay-card">
                    <span className="case-stat-overlay-value">{stat.value}</span>
                    <span className="case-stat-overlay-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ==================================================
            3. PROJECT OVERVIEW ROW (Image 2 Exact 100% Match)
            ================================================== */}
        <section className="project-overview-row" aria-label="Project Overview">
          <h2 className="project-overview-title">Project Overview</h2>

          <div className="project-overview-pill">
            {/* Column 1: Category */}
            <div className="overview-item">
              <span className="overview-item-label">Category</span>
              <span className="overview-item-value">{project.category || project.industry || 'Technology'}</span>
            </div>

            {/* Column 2: Platforms */}
            <div className="overview-item">
              <span className="overview-item-label">Platforms</span>
              <div className="overview-platforms-icons">
                <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="overview-platform-link" aria-label="Facebook">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M15 11.5h-1.8V18h-2.5v-6.5h-1.4v-2h1.4V8c0-1.4.9-2.5 2.4-2.5h1.9v2h-1.2c-.3 0-.5.2-.5.5v1.5H15l-.3 2z" fill="currentColor"></path>
                  </svg>
                </a>
                <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="overview-platform-link" aria-label="Instagram">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="overview-platform-link" aria-label="Twitter / X">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="overview-platform-link" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.28 8.28 0 0 0 4.91 1.6V6.73a4.78 4.78 0 0 1-1-.04z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 3: Year */}
            <div className="overview-item">
              <span className="overview-item-label">Year</span>
              <span className="overview-item-value">{project.year || '2025'}</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            5. CHALLENGE + SOLUTION (Two Compact Cards with 4 Points)
            ================================================== */}
        <section className="compact-challenge-solution-row">
          {/* Card 1: Challenge */}
          <div className="compact-cs-card">
            <div className="cs-card-header">
              <div className="cs-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="cs-card-title">Challenge</h3>
            </div>
            
            <p className="cs-card-desc">{project.challenge}</p>

            {project.challengePoints && (
              <ul className="cs-points-list">
                {project.challengePoints.map((point, pIdx) => (
                  <li key={pIdx} className="cs-point-item">
                    <span className="cs-point-bullet" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Card 2: Solution */}
          <div className="compact-cs-card">
            <div className="cs-card-header">
              <div className="cs-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path>
                </svg>
              </div>
              <h3 className="cs-card-title">Solution</h3>
            </div>

            <p className="cs-card-desc">{project.solution}</p>

            {project.solutionPoints && (
              <ul className="cs-points-list">
                {project.solutionPoints.map((point, pIdx) => (
                  <li key={pIdx} className="cs-point-item">
                    <span className="cs-point-bullet" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ==================================================
            5. RESULTS SECTION (Image 2 Exact 100% Match)
            ================================================== */}
        <section className="results-row-section" aria-label="Results">
          <h2 className="results-row-title">Results</h2>

          <div className="results-content-wrap">
            {/* 3 Solid Lime Stat Cards */}
            <div className="results-lime-cards-grid">
              {project.resultsStats && project.resultsStats.slice(0, 3).map((stat, sIdx) => (
                <div key={sIdx} className="result-lime-stat-card">
                  <span className="result-lime-stat-val">{stat.value}</span>
                  <span className="result-lime-stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Results caption */}
            <p className="results-caption-text">
              {project.resultsSummary || `Within 90 days, ${project.title} saw strong growth across all key metrics.`}
            </p>
          </div>
        </section>

        {/* ==================================================
            6. CLIENT FEEDBACK SECTION (Image 2 Exact 100% Match)
            ================================================== */}
        <section className="feedback-row-section" aria-label="Client Feedback">
          <h2 className="feedback-row-title">Client Feedback</h2>

          <div className="feedback-dark-card-container">
            {/* Left Column: White Testimonial Card */}
            <div className="feedback-testimonial-white-card">
              <blockquote className="feedback-quote-text">
                {project.testimonial?.quote || '“We went from inconsistent posting to a structured growth system. Our engagement tripled within weeks.”'}
              </blockquote>

              {/* Bottom Lime Author Box */}
              <div className="feedback-author-lime-box">
                <span className="feedback-author-name">
                  {project.testimonial?.author || 'Olivia Binnet'}
                </span>
                <span className="feedback-author-role">
                  {project.testimonial?.role || 'Marketing Director of Radiance'}
                </span>
                <div className="feedback-author-rating">
                  <span>{project.testimonial?.rating || '4.5 ★★★★★'}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Full Showcase Media Card (No Phone Bezel) */}
            <div className="feedback-media-showcase-card">
              <img
                src={project.heroImage}
                alt={`${project.title} Preview Showcase`}
                className="feedback-full-media-img"
              />
              <div className="feedback-media-overlay" aria-hidden="true" />

              {/* Play Tutorial Pill Button */}
              <button
                type="button"
                className="feedback-play-btn"
                aria-label="Play Tutorial Video"
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <span>Play Tutorial</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Standard Final CTA Section */}
      <CTASection />
    </article>
  );
};

export default CaseStudy;
