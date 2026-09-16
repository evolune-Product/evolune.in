import React from 'react';

interface FooterProps {
  onOpenCertificate?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenCertificate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="brand-link" style={{ marginBottom: '0.5rem' }}>
              <div className="brand-icon">
                <img src="/logo.png" alt="Evolune EdgeTech" />
              </div>
              <div className="brand-name">
                <span>EVOLUNE</span>
                <span className="brand-badge">EDGETECH</span>
              </div>
            </a>

            <p className="footer-desc">
              Pioneering autonomous agentic platforms, unified API testing engines, and contactless edge health intelligence from India to the world.
            </p>

            {/* DPIIT Badge */}
            {onOpenCertificate && (
              <button
                type="button"
                onClick={onOpenCertificate}
                className="btn btn-secondary btn-sm"
                style={{ alignSelf: 'flex-start', marginBottom: '1.5rem', gap: '0.5rem' }}
              >
                <span style={{ color: '#f59e0b' }}>★</span>
                <span>DPIIT Certified • DIPP238722</span>
              </button>
            )}

            {/* Social Links */}
            <div className="social-links-row">
              <a
                href="https://www.linkedin.com/in/evolune-edgetech-546640389/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/evolune.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://github.com/evolune-Product"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Col */}
          <div>
            <h4 className="footer-col-title">Flagship Products</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#products" className="footer-link">Evolune OS (Agentic SDLC)</a>
              </li>
              <li>
                <a href="https://flasqo.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Flasqo (API Testing) ↗
                </a>
              </li>
              <li>
                <a href="https://spendveto.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  SpendVeto (Agent Payment Governance) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about" className="footer-link">Engineering Philosophy</a>
              </li>
              <li>
                <a href="#company" className="footer-link">Awards & Accreditations</a>
              </li>
              <li>
                <a href="#features" className="footer-link">Architecture Pillars</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Direct Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Resources & Publications */}
          <div>
            <h4 className="footer-col-title">Publications & Trust</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#blog" className="footer-link">Engineering Insights</a>
              </li>
              {onOpenCertificate && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenCertificate}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                  >
                    DPIIT Official Certificate
                  </button>
                </li>
              )}
              <li>
                <a href="mailto:business@evolune.in" className="footer-link">business@evolune.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Evolune EdgeTech. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>DPIIT Recognised Startup</span>
            <span style={{ color: 'var(--text-muted)' }}>I-Summit Winner, IIT Madras</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
