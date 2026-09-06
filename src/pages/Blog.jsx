import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, featuredPost } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import './Blog.css';

const categories = ['All', 'UI/UX Design', 'Website Development', 'Website Redesign'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category.toLowerCase().includes(activeCategory.toLowerCase().replace('website', 'web')));

  return (
    <div className="blog-page-container">
      {/* Blog Hero Header */}
      <section className="blog-hero-section">
        <div className="blog-eyebrow-pill">
          <span className="eyebrow-star">✦</span>
          <span>INSIGHTS & IDEAS</span>
        </div>
        <h1 className="blog-hero-title">
          Ideas for building <span className="highlight-orange">better digital experiences.</span>
        </h1>
        <p className="blog-hero-subtitle">
          Practical insights on design, technology, and building digital experiences that help businesses grow.
        </p>
      </section>

      {/* Categories Filter Bar */}
      <div className="blog-filters-container">
        <div className="blog-filters-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Insight Section (Image 2 Big Card - Preserved 100%) */}
      {activeCategory === 'All' && (
        <section className="blog-featured-section">
          <Link to={`/blog/${featuredPost.id}`} className="blog-featured-card" aria-label={featuredPost.title}>
            <div className="blog-featured-img-wrap">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="blog-featured-img"
                loading="lazy"
              />
              <span className="blog-featured-badge">FEATURED INSIGHT</span>
            </div>

            <div className="blog-featured-content">
              <div className="blog-meta-row">
                <span className="blog-tag">{featuredPost.category}</span>
                <span className="blog-meta-sep">•</span>
                <span className="blog-meta-item">{featuredPost.date}</span>
                <span className="blog-meta-sep">•</span>
                <span className="blog-meta-item">{featuredPost.readTime}</span>
              </div>

              <h2 className="blog-featured-title">
                {featuredPost.title}
              </h2>

              <p className="blog-featured-excerpt">
                {featuredPost.excerpt}
              </p>

              <div className="blog-author-row">
                <img
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  className="blog-author-avatar"
                />
                <div className="blog-author-info">
                  <span className="blog-author-name">{featuredPost.author.name}</span>
                  <span className="blog-author-role">{featuredPost.author.role}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Posts Grid (Reusable BlogCard component - 3 equal cards) */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Blog;
