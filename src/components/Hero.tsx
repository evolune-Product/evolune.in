import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-content">
        {/* Main heading with glassmorphic badge */}
        <div className="hero-badge glass rounded-full px-6 py-2">
          <span className="status-dot"></span>
          <span className="text-sm font-medium text-slate-700">Innovation at the Edge of Technology</span>
        </div>

        <h1 className="hero-title">
          <span className="text-gradient">Evolune</span>
          <br />
          <span className="text-slate-800">EdgeTech</span>
        </h1>

        <p className="hero-subtitle">
          Pioneering the future with cutting-edge software solutions.
          Transforming ideas into powerful, scalable products that drive success.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <a href="#products" className="btn btn-glass">
            Explore Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Stats section */}
        <div className="hero-stats">
          <div className="stat-card glass rounded-3xl glass-hover">
            <div className="stat-value text-gradient">5+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-card glass rounded-3xl glass-hover">
            <div className="stat-value text-gradient">10K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-card glass rounded-3xl glass-hover">
            <div className="stat-value text-gradient">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-card glass rounded-3xl glass-hover">
            <div className="stat-value text-gradient">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
