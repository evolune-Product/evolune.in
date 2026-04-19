import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="status-dot"></span>
          <span className="text-sm font-medium">Products Launching — Explore Now</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          <span className="text-gradient">Evolune</span>
          <br />
          <span style={{ color: 'var(--text-1)' }}>EdgeTech</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          We build software that matters — intelligent, scalable products that put
          a dent in the way people work, learn, and live.
        </p>

        {/* CTAs */}
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">
            Explore Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-value text-gradient">5+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-value text-gradient">10K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value text-gradient">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-card">
            <div className="stat-value text-gradient">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
