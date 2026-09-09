import React, { Suspense, lazy } from 'react';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

interface HeroProps {
  onOpenCertificate?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCertificate }) => {
  return (
    <section className="hero-section">
      {/* Ambient background glows */}
      <div className="ambient-glow hero-glow-1" />
      <div className="ambient-glow hero-glow-2" />
      <div className="ambient-glow hero-glow-3" />

      {/* WebGL particle / wireframe backdrop */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <div className="hero-canvas-fade" />

      <div className="container">
        <div className="hero-content reveal-up">
          {/* Top Credibility Pill */}
          <a
            href="#company"
            className="hero-pill"
            title="Learn more about our awards and recognition"
          >
            <span className="pill-dot" />
            <span>Winner, I-Summit IIT Madras 2026 · PitchArena Finalist</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>DPIIT Recognised</span>
            <span>→</span>
          </a>

          {/* Headline */}
          <h1 className="hero-headline">
            Autonomous Systems for the{' '}
            <span className="text-gradient">Next Era of Software.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subhead">
            Evolune EdgeTech builds intelligent platforms that redefine the modern tech stack:
            an autonomous agentic SDLC engine and a 13-in-1 unified API reliability platform.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#products" className="btn btn-primary">
              Explore Flagship Products
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="#company" className="btn btn-secondary">
              View Verified Credentials
            </a>
            {onOpenCertificate && (
              <button
                type="button"
                onClick={onOpenCertificate}
                className="btn btn-outline"
                style={{ fontSize: '0.875rem' }}
              >
                Inspect DPIIT Certificate
              </button>
            )}
          </div>

          {/* Trust Telemetry Bar */}
          <div className="trust-bar">
            <div className="trust-item">
              <span className="trust-metric" style={{ color: 'var(--accent-amber)' }}>IIT Madras '26</span>
              <span className="trust-label">I-Summit Winner</span>
            </div>
            <div className="trust-item">
              <span className="trust-metric" style={{ color: 'var(--accent-indigo-light)' }}>DIPP238722</span>
              <span className="trust-label">Govt. of India Certified</span>
            </div>
            <div className="trust-item">
              <span className="trust-metric" style={{ color: 'var(--accent-emerald)' }}>IIM Bangalore</span>
              <span className="trust-label">NSRCEL Shortlisted</span>
            </div>
            <div className="trust-item">
              <span className="trust-metric" style={{ color: 'var(--accent-cyan-light)' }}>13 Engines</span>
              <span className="trust-label">Unified in Flasqo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
