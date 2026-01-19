import React, { useState, useEffect } from 'react';

interface Product {
  name: string;
  tagline: string;
  fullDescription: string;
  features: string[];
  link?: string;
  androidLink?: string;
  iosLink?: string;
  icon: string;
  gradient: string;
  status: string;
}

const products: Product[] = [
  {
    name: 'Cal Coach',
    tagline: 'Smart Calorie Tracking',
    fullDescription: 'Cal Coach is your personal nutrition companion that helps you track calories, monitor macros, and achieve your health goals. With intelligent meal logging, barcode scanning, and personalized insights, staying healthy has never been easier.',
    features: ['Smart calorie tracking', 'Nutritional insights', 'Goal setting & progress tracking', 'Barcode scanning', 'Meal history & analytics'],
    androidLink: 'https://play.google.com/store/apps/details?id=com.calcoach.evolune',
    iosLink: 'https://apps.apple.com/in/app/cal-coach-calorie-tracker/id6754588180',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'gradient-green',
    status: 'Live',
  },
  {
    name: 'FluxTest',
    tagline: '8 Types of Testing in One Unified Platform',
    fullDescription: 'Our premium testing solution that revolutionizes API development. FluxTest combines 8 powerful testing types in a single unified platform - from functional and integration testing to performance, security, load, regression, contract, and end-to-end testing. Built with AI-powered intelligence to catch bugs before production.',
    features: ['Functional Testing', 'Integration Testing', 'Performance Testing', 'Security Testing', 'Load Testing', 'Regression Testing', 'Contract Testing', 'End-to-End Testing'],
    link: 'https://fluxtest.evolune.in/',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'gradient-blue',
    status: 'Beta',
  },
  {
    name: 'DarkPearl',
    tagline: 'Natural Language to Code',
    fullDescription: 'DarkPearl transforms the way you code. Simply describe what you want in plain English, and watch as it generates production-ready code with live preview. Perfect for rapid prototyping and bringing ideas to life instantly.',
    features: ['Natural language input', 'Real-time code generation', 'Live preview', 'Multiple frameworks', 'Export & deploy'],
    link: 'https://darkpearl.evolune.in/',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'gradient-blue',
    status: 'Beta',
  },
  {
    name: 'StyleAI',
    tagline: 'Virtual Fashion & AI Styling',
    fullDescription: 'StyleAI is your revolutionary virtual try-on platform powered by cutting-edge AI. Experience clothes virtually, get personalized style recommendations, analyze fashion trends, and make confident style choices with AI-powered insights.',
    features: ['Virtual try-on technology', 'AI style recommendations', 'Fashion trend analysis', 'Personalized wardrobe', 'Smart outfit suggestions'],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradient: 'gradient-pink',
    status: 'Coming Soon',
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickInsideDropdown = target.closest('.dropdown-catalog-large, .dropdown-simple');
      const isClickOnDropdownLink = target.closest('.nav-item-with-dropdown');

      if (!isClickInsideDropdown && !isClickOnDropdownLink) {
        if (showProductsDropdown) setShowProductsDropdown(false);
        if (showResourcesDropdown) setShowResourcesDropdown(false);
      }
    };

    if (showProductsDropdown || showResourcesDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProductsDropdown, showResourcesDropdown]);

  return (
    <nav className={`navbar-floating ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <span>E</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">Evolune</span>
            <span className="logo-subtitle">EdgeTech</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li
            className="nav-item-with-dropdown"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <a
              href="#products"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setShowProductsDropdown(!showProductsDropdown);
              }}
            >
              Products
              <svg className="w-4 h-4" style={{marginLeft: '4px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Products Dropdown Catalog - Two Column Layout */}
            {showProductsDropdown && (
              <div
                className="dropdown-catalog-large"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
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
                    {/* Show app store buttons and/or website links */}
                    {(selectedProduct.androidLink || selectedProduct.iosLink) ? (
                      <div style={{display: 'flex', gap: '8px'}}>
                        {selectedProduct.androidLink && (
                          <a
                            href={selectedProduct.androidLink}
                            className="catalog-details-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{flex: 1, fontSize: '14px', padding: '8px 16px'}}
                          >
                            <svg style={{width: '18px', height: '18px', marginRight: '6px'}} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z"/>
                            </svg>
                            Android
                          </a>
                        )}
                        {selectedProduct.iosLink && (
                          <a
                            href={selectedProduct.iosLink}
                            className="catalog-details-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{flex: 1, fontSize: '14px', padding: '8px 16px'}}
                          >
                            <svg style={{width: '18px', height: '18px', marginRight: '6px'}} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            iOS
                          </a>
                        )}
                        {selectedProduct.link && !selectedProduct.iosLink && (
                          <a
                            href={selectedProduct.link}
                            className="catalog-details-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{flex: 1, fontSize: '14px', padding: '8px 16px'}}
                          >
                            Website
                            <svg style={{width: '18px', height: '18px', marginLeft: '4px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ) : (
                      <a href={selectedProduct.link} className="catalog-details-cta" target="_blank" rel="noopener noreferrer">
                        Explore
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="catalog-details-description">
                    {selectedProduct.fullDescription}
                  </div>

                  <div className="catalog-details-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx}>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className="nav-item-with-dropdown"
            onMouseEnter={() => setShowResourcesDropdown(true)}
            onMouseLeave={() => setShowResourcesDropdown(false)}
          >
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setShowResourcesDropdown(!showResourcesDropdown);
              }}
            >
              Resources
              <svg className="w-4 h-4" style={{marginLeft: '4px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Resources Dropdown - Simple Menu */}
            {showResourcesDropdown && (
              <div
                className="dropdown-simple"
                onMouseEnter={() => setShowResourcesDropdown(true)}
                onMouseLeave={() => setShowResourcesDropdown(false)}
              >
                <a href="#" className="dropdown-item">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="dropdown-item-title">Careers</div>
                    <div className="dropdown-item-desc">Join our team</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div>
                    <div className="dropdown-item-title">Blog</div>
                    <div className="dropdown-item-desc">Latest insights & updates</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <div>
                    <div className="dropdown-item-title">Newsroom</div>
                    <div className="dropdown-item-desc">Press releases & media</div>
                  </div>
                </a>
              </div>
            )}
          </li>

          <li>
            <a href="#" className="nav-link">
              Docs
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
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
                      /* For products with app store links, show buttons */
                      <div style={{marginBottom: '12px'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px', padding: '8px 12px'}}>
                          <div className={`mobile-product-icon ${product.gradient}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                            </svg>
                          </div>
                          <span style={{fontWeight: 500}}>{product.name}</span>
                          <span className={`catalog-badge badge-${product.status.toLowerCase()}`} style={{marginLeft: 'auto'}}>
                            {product.status}
                          </span>
                        </div>
                        <div style={{display: 'flex', gap: '8px', paddingLeft: '12px', paddingRight: '12px'}}>
                          {product.androidLink && (
                            <a
                              href={product.androidLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="catalog-details-cta"
                              style={{flex: 1, fontSize: '13px', padding: '8px 12px', textAlign: 'center'}}
                            >
                              <svg style={{width: '16px', height: '16px', marginRight: '4px', display: 'inline-block'}} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z"/>
                              </svg>
                              Android
                            </a>
                          )}
                          {product.iosLink && (
                            <a
                              href={product.iosLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="catalog-details-cta"
                              style={{flex: 1, fontSize: '13px', padding: '8px 12px', textAlign: 'center'}}
                            >
                              <svg style={{width: '16px', height: '16px', marginRight: '4px', display: 'inline-block'}} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                              </svg>
                              iOS
                            </a>
                          )}
                          {product.link && !product.iosLink && (
                            <a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="catalog-details-cta"
                              style={{flex: 1, fontSize: '13px', padding: '8px 12px', textAlign: 'center'}}
                            >
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* For regular web products, show single link */
                      <a
                        href={product.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mobile-product-link"
                      >
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
                    )}
                  </div>
                ))}
              </div>

              <div className="mobile-products-section">
                <span className="mobile-section-title">Resources</span>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{paddingLeft: '1rem'}}>
                  Careers
                </a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{paddingLeft: '1rem'}}>
                  Blog
                </a>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{paddingLeft: '1rem'}}>
                  Newsroom
                </a>
              </div>

              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">
                Docs
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary"
              >
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
