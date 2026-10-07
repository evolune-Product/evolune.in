import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenCertificate?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCertificate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar-floating ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <a href="#" className="brand-link" onClick={closeMobileMenu}>
            <div className="brand-icon">
              <img src="/logo.png" alt="Evolune EdgeTech" />
            </div>
            <div className="brand-text">
              <div className="brand-name">
                <span>EVOLUNE</span>
                <span className="brand-badge">EDGETECH</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li>
                <a href="#products" className="nav-link">Products</a>
              </li>
              <li>
                <a href="#features" className="nav-link">Architecture</a>
              </li>
              <li>
                <a href="#company" className="nav-link">Credentials</a>
              </li>
              <li>
                <a href="#about" className="nav-link">Philosophy</a>
              </li>
              <li>
                <a href="#blog" className="nav-link">Insights</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              className="nvidia-badge-link nvidia-badge-link--nav"
              title="Evolune EdgeTech, an NVIDIA Inception program member"
            >
              <img
                src="/nvidia-inception-badge.svg"
                alt="NVIDIA Inception Program Member"
                className="nvidia-badge-img"
              />
            </a>
            {onOpenCertificate && (
              <button
                type="button"
                onClick={onOpenCertificate}
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.75rem', gap: '0.35rem', padding: '0.4rem 0.75rem' }}
                title="View DPIIT Certificate"
              >
                <span style={{ color: '#f59e0b' }}>★</span>
                <span>DPIIT Certified</span>
              </button>
            )}
            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#products" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Products</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>
          <a href="#features" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Architecture</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>
          <a href="#company" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Credentials & Awards</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>
          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Philosophy</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>
          <a href="#blog" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Insights</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span>Contact</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
          </a>

          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              className="nvidia-badge-link"
              style={{ alignSelf: 'flex-start' }}
              title="Evolune EdgeTech, an NVIDIA Inception program member"
            >
              <img
                src="/nvidia-inception-badge.svg"
                alt="NVIDIA Inception Program Member"
                className="nvidia-badge-img"
              />
            </a>
            {onOpenCertificate && (
              <button
                type="button"
                onClick={() => { closeMobileMenu(); onOpenCertificate(); }}
                className="btn btn-secondary w-full"
                style={{ fontSize: '0.875rem' }}
              >
                ★ View DPIIT Recognition
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
