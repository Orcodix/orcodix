import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import CTASection from '../components/CTASection';
import './WorkPage.css';

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'UI/UX Design', 'Branding', 'Development'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => 
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.services.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <div className="work-page-container">
      <div className="work-page-header">
        <h1 className="work-page-title">Selected <span className="highlight-orange">Projects</span></h1>
        <p className="work-page-subtitle">
          A selection of digital experiences we've designed and built<br/>
          for forward-thinking brands and businesses.
        </p>
      </div>

      <div className="work-page-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'All' ? 'All Projects' : filter}
          </button>
        ))}
      </div>

      <div className="work-page-grid">
        {filteredProjects.map((project) => (
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

      <div style={{ marginTop: '90px' }}>
        <CTASection />
      </div>
    </div>
  );
};

export default WorkPage;
