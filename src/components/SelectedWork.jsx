import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const SelectedWork = () => {
  return (
    <section id="work" className="selected-work-section" aria-labelledby="selected-work-heading">
      <div className="work-container">
        <div className="work-header">
          <div className="work-header-left">
            <h2 id="selected-work-heading" className="work-heading">
              Selected Work<span className="dot">.</span>
            </h2>
          </div>
        </div>

        <div className="work-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="work-card group">
              <div className="work-card-image-wrap">
                <img src={project.heroImage} alt={project.title} className="work-card-image" loading="lazy" />
                <div className="work-card-overlay">
                  <Link to={`/work/${project.slug}`} className="work-btn-primary">Case Study</Link>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="work-btn-secondary">Live Site</a>
                </div>
              </div>
              <div className="work-card-content">
                <h3 className="work-card-title">
                  <Link to={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <span className="work-card-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
