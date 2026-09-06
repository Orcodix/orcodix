import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts, featuredPost, relatedBlogs } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find post from blogPosts, featuredPost, or relatedBlogs
  const allPosts = [featuredPost, ...blogPosts, ...relatedBlogs];
  const postIndex = blogPosts.findIndex((p) => p.id === id);
  const currentPost = allPosts.find((p) => p.id === id) || blogPosts[0];

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : blogPosts[blogPosts.length - 1];
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : blogPosts[0];

  useEffect(() => {
    if (currentPost?.title) {
      document.title = `${currentPost.title} | ORCODIX Insights`;
    }
  }, [id, currentPost]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="article-detail-page">
      <div className="article-container">
        {/* Top Breadcrumb / Back Link */}
        <div className="article-breadcrumb">
          <Link to="/blog" className="article-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-date-badge">
            <svg className="calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{currentPost.date || 'Nov 30, 2026'}</span>
            <span className="meta-dot-sep">•</span>
            <span className="article-read-badge">{currentPost.readTime || '5 MIN READ'}</span>
          </div>

          <h1 className="article-title">
            {currentPost.title}
          </h1>

          <p className="article-lead">
            {currentPost.lead || currentPost.description || currentPost.excerpt}
          </p>

          <div className="article-author-bar">
            <div className="article-author-info">
              <img
                src={currentPost.author?.avatar || 'https://res.cloudinary.com/ddluoarzr/image/upload/v1787471129/faheem_bqv4n3.png'}
                alt={currentPost.author?.name || 'Author'}
                className="article-author-avatar"
              />
              <span className="article-author-text">
                By <strong>{currentPost.author?.name || 'Faheem A V'}</strong> / ORCODIX
              </span>
            </div>

            {/* Social Share Actions */}
            <div className="article-share-actions">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn-round"
                aria-label="Share on X / Twitter"
                title="Share on X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn-round"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="share-btn-round"
                aria-label="Copy Link"
                title="Copy Link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Huge Hero Image */}
        <div className="article-cover-wrap">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="article-cover-img"
          />
        </div>

        {/* Article Body Content */}
        <div className="article-body-content">
          <h2>Introduction</h2>
          <p>
            {currentPost.content?.intro || 'Modern navigation systems in digital architecture are evolving rapidly. Today’s top-tier digital products must deliver seamless micro-interactions, intuitive wayfinding, and lightning-fast responsiveness from the very first frame.'}
          </p>

          <h2>Data-Driven Decisions for Scalable Growth</h2>
          <p>
            Metrics and user testing are becoming the cornerstone of creative digital production. Analyzing user flows, heatmaps, and funnel drop-offs enables design teams to iterate with surgical precision, elevating retention metrics and accelerating product-market fit.
          </p>
          <p>
            Pairing quantitative analytics with empathetic user research ensures that every interaction isn’t just mathematically optimal, but genuinely intuitive and delightful for real human beings. Explore how our <Link to="/services/ux-research-ui-design" className="article-inline-link">UX Research & UI Design services</Link> elevate product conversions.
          </p>

          <h2>The Art of Timing & Friction Reduction</h2>
          <p>
            Timing and pacing dictate cognitive load. When information reveals itself naturally in response to user intent, engagement transitions from passive scrolling into active discovery.
          </p>

          {/* Blockquote Box */}
          <blockquote className="article-pullquote">
            <p>
              “Design is not just what it looks like and feels like. Design is how it works and how effortlessly it solves the user’s primary objective.”
            </p>
          </blockquote>

          <p>
            Engineering teams must maintain high performance standards across every touchpoint. Discover our approach to <Link to="/services/web-design-development" className="article-inline-link">Web Design & Development</Link>:
          </p>

          {/* Bullet points */}
          <ul className="article-bullet-list">
            <li>Phase 01: User journey mapping & wireframe connection quality.</li>
            <li>Real-time rapid prototyping to reduce latency and friction.</li>
            <li>Standardized design tokens to empower cross-platform consistency.</li>
            <li>Optimized information hierarchy tailored to decision-making velocity.</li>
            <li>Continuous metric tracking for performance and conversion efficiency.</li>
          </ul>

          {/* Embedded UI Card / Media Preview */}
          <div className="article-showcase-card">
            <div className="showcase-card-inner">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
                alt="UI Showcase Preview"
                className="showcase-card-img"
              />
            </div>
          </div>

          <h2>The Unfinished Passage & Future Architecture</h2>
          <p>
            Every great digital product is a continuous conversation between the brand and its audience. By treating website architecture as an evolving living document rather than a frozen artifact, modern companies empower their brand to stay resilient and ahead of competition.
          </p>

          <h2>Conclusion</h2>
          <p>
            Investing in world-class design and engineering is the single most leveraged decision a modern business can make. Have a project in mind? Learn more about our <Link to="/services/digital-product-design" className="article-inline-link">Digital Product Design</Link> solutions or <Link to="/contact" className="article-inline-link">get in touch with our team</Link>.
          </p>
        </div>

        {/* Share Row and Pagination */}
        <div className="article-footer-nav">
          <div className="footer-share-group">
            <span className="footer-share-label">Share on:</span>
            <div className="footer-share-icons">
              <button onClick={handleCopyLink} className="footer-share-btn" aria-label="Copy link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="footer-share-btn"
                aria-label="Share on Twitter"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="footer-share-btn"
                aria-label="Share on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="article-pagination">
            <Link to={`/blog/${prevPost.id}`} className="pagination-btn prev-btn">
              <span>← Previous</span>
            </Link>
            <Link to={`/blog/${nextPost.id}`} className="pagination-btn next-btn">
              <span>Next →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Blogs Section (Expanded Width) */}
      <section className="related-blogs-section">
        <div className="related-blogs-container">
          <div className="related-blogs-header">
            <h2 className="related-blogs-title">Related blogs</h2>
            <Link to="/blog" className="view-all-post-btn">
              <span>View all post</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <div className="related-blogs-grid">
            {relatedBlogs.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Final CTA Section */}
      <CTASection />
    </article>
  );
};

export default BlogPostDetail;
