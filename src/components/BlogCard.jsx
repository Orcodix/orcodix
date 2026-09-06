import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="blog-post-card" aria-label={post.title}>
      <div className="blog-card-inner">
        <img
          src={post.image}
          alt={post.title}
          className="blog-card-img"
          loading="lazy"
        />
        <div className="blog-card-overlay"></div>
        
        {/* Center Orange Hover Button */}
        <div className="blog-card-hover-btn">
          <span>Read more</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>

        <div className="blog-card-content">
          <h3 className="blog-card-title">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
