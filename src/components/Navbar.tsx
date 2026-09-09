import React, { useState, useEffect, useRef } from 'react';

interface Product {
  name: string;
  tagline: string;
  fullDescription: string;
  features: string[];
  featureColumns?: number;
  link?: string;
  androidLink?: string;
  iosLink?: string;
  icon: string;
  gradient: string;
  status: string;
}

const products: Product[] = [
  {
    name: 'Evolune OS',
    tagline: 'The Agentic Software Development Platform',
    fullDescription: 'Evolune OS is an agentic SDLC platform that runs a full team of AI agents — planning, building, reviewing, and shipping software end-to-end. From idea to production, Evolune OS orchestrates the entire development lifecycle autonomously.',
    features: ['Autonomous agent team for full SDLC', 'End-to-end planning to deployment', 'AI code review & quality gates', 'Continuous shipping pipeline', 'Human-in-the-loop oversight'],
    link: 'https://evoluneos.com',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'gradient-purple',
    status: 'Live',
  },
  {
    name: 'Flasqo',
    tagline: '13 Types of Testing in One Unified Platform',
    fullDescription: 'The AI-powered API testing platform built for teams that ship fast. Flasqo combines 13 powerful testing types in a single unified platform — from smoke and regression to GraphQL, contract, chaos, and full end-to-end browser execution. Catch bugs before your users do.',
    features: ['Smoke Testing', 'GraphQL Testing', 'Load Testing', 'Chaos Testing', 'Regression Testing', 'Contract Testing', 'Integration Testing', 'FullSend (E2E)'],
    featureColumns: 2,
    link: 'https://flasqo.com/',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'gradient-blue',
    status: 'Beta',
  },
  {
    name: 'Evo-MedX',
    tagline: 'Contactless Vitals from Your Camera',
    fullDescription: 'Evo-MedX uses remote photoplethysmography (rPPG) to measure heart rate, SpO₂, stress levels, and respiratory rate — entirely contactless through your device camera. The future of personal health monitoring is here.',
    features: ['Contactless heart rate via rPPG', 'Blood oxygen (SpO₂) estimation', 'Stress & HRV analysis', 'Respiratory rate detection', 'Real-time vitals dashboard'],
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradient: 'gradient-blue',
    status: 'Coming Soon',
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  const productsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProducts = () => {
    if (productsTimeout.current) clearTimeout(productsTimeout.current);
    setShowProductsDropdown(true);
  };
  const closeProducts = () => {
    productsTimeout.current = setTimeout(() => setShowProductsDropdown(false), 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickInsideDropdown = target.closest('.dropdown-catalog-large');
      const isClickOnDropdownLink = target.closest('.nav-item-with-dropdown');
      if (!isClickInsideDropdown && !isClickOnDropdownLink) {
        if (showProductsDropdown) setShowProductsDropdown(false);
      }
    };
    if (showProductsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProductsDropdown]);

  const renderFeatures = (product: Product) => {
    if (product.featureColumns === 2) {
      const mid = Math.ceil(product.features.length / 2);
      const left = product.features.slice(0, mid);
      const right = product.features.slice(mid);
      return (
        <div className="features-two-col">
          <ul>
            {left.map((feat, idx) => (
              <li key={idx}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feat}
              </li>
            ))}
          </ul>
          <ul>
            {right.map((feat, idx) => (
              <li key={idx}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <ul>
        {product.features.map((feat, idx) => (
          <li key={idx}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={`navbar-floating ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Evolune EdgeTech" className="logo-img" />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li
            className="nav-item-with-dropdown"
            onMouseEnter={openProducts}
            onMouseLeave={closeProducts}
          >
            <a
              href="#products"
              className={`nav-link${showProductsDropdown ? ' nav-link--open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setShowProductsDropdown(!showProductsDropdown);
              }}
            >
              Products
              <svg className="w-4 h-4 nav-chevron" style={{ marginLeft: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Products Dropdown Catalog */}
            {showProductsDropdown && (
              <div
                className="dropdown-catalog-large"
                onMouseEnter={openProducts}
                onMouseLeave={closeProducts}
              >
                {/* Left Side - Product List */}
                <div className="catalog-sidebar">
                  <div className="catalog-sidebar-header">
                    <h3>Our Products</h3>
                    <p>Innovative solutions for modern challenges</p>
                  </div>
                  <div className="product-list">
                    {products.map((product, index) => (
                      <button
                        key={index}
                        className={`product-list-item ${selectedProduct.name === product.name ? 'active' : ''}`}
                        onMouseEnter={() => setSelectedProduct(product)}
                      >
                        <div className="product-list-info">
                          <div className="product-list-name">
                            {product.name}
                            <span className={`catalog-badge badge-${product.status.toLowerCase().replace(/\s+/g, '-')}`}>
                              {product.status}
                            </span>
                          </div>
                          <div className="product-list-tagline">{product.tagline}</div>
                        </div>
                        <svg className="product-list-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="catalog-details">
                  <div className="catalog-details-header">
                    <div className="catalog-details-header-left">
                      <div>
                        <h3>{selectedProduct.name}</h3>
                        <p>{selectedProduct.tagline}</p>
                      </div>
                    </div>
                    {(selectedProduct.androidLink || selectedProduct.iosLink) ? (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {selectedProduct.androidLink && (
                          <a href={selectedProduct.androidLink} className="catalog-details-cta" target="_blank" rel="noopener noreferrer" style={{ flex: 1, fontSize: '14px', padding: '8px 16px' }}>
                            <svg style={{ width: '18px', height: '18px', marginRight: '6px' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z" />
                            </svg>
                            Android
                          </a>
                        )}
                        {selectedProduct.iosLink && (
                          <a href={selectedProduct.iosLink} className="catalog-details-cta" target="_blank" rel="noopener noreferrer" style={{ flex: 1, fontSize: '14px', padding: '8px 16px' }}>
                            <svg style={{ width: '18px', height: '18px', marginRight: '6px' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            iOS
                          </a>
                        )}
                      </div>
                    ) : selectedProduct.link ? (
                      <a href={selectedProduct.link} className="catalog-details-cta" target="_blank" rel="noopener noreferrer">
                        Explore
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="catalog-badge badge-coming-soon" style={{ padding: '6px 14px', fontSize: '13px' }}>
                        Launching Soon
                      </span>
                    )}
                  </div>

                  <div className="catalog-details-description">
                    {selectedProduct.fullDescription}
                  </div>

                  <div className="catalog-details-features">
                    <h4>Key Features</h4>
                    {renderFeatures(selectedProduct)}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <a href="#company" className="nav-link">
              Company
            </a>
          </li>

          <li>
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="btn btn-primary nav-cta">
          Contact us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <div className="mobile-products-section">
                <span className="mobile-section-title">Products</span>
                {products.map((product, index) => (
                  <div key={index}>
                    {(product.androidLink || product.iosLink) ? (
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', padding: '8px 12px' }}>
                          <div className={`mobile-product-icon ${product.gradient}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                            </svg>
                          </div>
                          <span style={{ fontWeight: 500 }}>{product.name}</span>
                          <span className={`catalog-badge badge-${product.status.toLowerCase()}`} style={{ marginLeft: 'auto' }}>
                            {product.status}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', paddingLeft: '12px', paddingRight: '12px' }}>
                          {product.androidLink && (
                            <a href={product.androidLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="catalog-details-cta" style={{ flex: 1, fontSize: '13px', padding: '8px 12px', textAlign: 'center' }}>
                              <svg style={{ width: '16px', height: '16px', marginRight: '4px', display: 'inline-block' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z" />
                              </svg>
                              Android
                            </a>
                          )}
                          {product.iosLink && (
                            <a href={product.iosLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="catalog-details-cta" style={{ flex: 1, fontSize: '13px', padding: '8px 12px', textAlign: 'center' }}>
                              <svg style={{ width: '16px', height: '16px', marginRight: '4px', display: 'inline-block' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                              </svg>
                              iOS
                            </a>
                          )}
                        </div>
                      </div>
                    ) : product.link ? (
                      <a href={product.link} onClick={() => setIsMobileMenuOpen(false)} className="mobile-product-link">
                        <div className={`mobile-product-icon ${product.gradient}`}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                          </svg>
                        </div>
                        <span>{product.name}</span>
                        <span className={`catalog-badge badge-${product.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {product.status}
                        </span>
                      </a>
                    ) : (
                      <div className="mobile-product-link" style={{ cursor: 'default', opacity: 0.75 }}>
                        <div className={`mobile-product-icon ${product.gradient}`}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                          </svg>
                        </div>
                        <span>{product.name}</span>
                        <span className="catalog-badge badge-coming-soon" style={{ marginLeft: 'auto' }}>
                          {product.status}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a href="#company" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">
                Company
              </a>

              <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">
                Blog
              </a>

              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary">
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
