import React, { useState } from 'react';
import CertificateViewer from './CertificateViewer';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const footerLinks = {
    Products: [
      { name: 'Cal Coach', href: '#products' },
      { name: 'FluxTest', href: '#products' },
      { name: 'NextPost', href: '#products' },
      { name: 'DarkPearl', href: '#products' },
      { name: 'StyleAI', href: '#products' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
      name: 'GitHub',
      href: '#',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
    },
    {
      name: 'YouTube',
      href: '#',
      icon: 'M23 9s-.2-1.4-.8-2A3 3 0 0020 6c-2.3-.2-6-.2-8-.2s-5.7 0-8 .2a3 3 0 00-2.2 1A12 12 0 001 9a50 50 0 00-.2 6 50 50 0 00.2 6c.1.7.4 1.3.8 1.8a3 3 0 002.2 1.2c2.3.2 6 .2 8 .2s5.7 0 8-.2a3 3 0 002.2-1.2c.4-.5.7-1.1.8-1.8.2-2 .2-4 .2-6s0-4-.2-6zM9.5 15.5v-7l6 3.5-6 3.5z',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="logo mb-4">
              <div className="logo-icon" style={{width: '48px', height: '48px'}}>
                <span style={{fontSize: '1.5rem'}}>E</span>
              </div>
              <div className="logo-text">
                <span className="logo-title" style={{fontSize: '1.25rem'}}>Evolune</span>
                <span className="logo-subtitle">EdgeTech</span>
              </div>
            </a>
            <p className="footer-description">
              Pioneering the future with innovative software solutions that transform businesses and empower individuals.
            </p>

            {/* Startup India Badge */}
            <button
              className="startup-india-footer-badge"
              onClick={() => setIsCertificateOpen(true)}
              title="Click to view certificate"
            >
              <svg className="startup-india-footer-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#FF9933" strokeWidth="1.5" fill="rgba(255,153,51,0.1)"/>
                <path d="M12 6l6 3v6l-6 3-6-3V9l6-3z" stroke="#138808" strokeWidth="1" fill="rgba(19,136,8,0.1)"/>
                <path d="M9 12l2 2 4-4" stroke="#138808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="startup-india-footer-text">
                <span className="startup-india-footer-label">Startup India</span>
                <span className="startup-india-footer-sublabel">DPIIT Recognised</span>
              </div>
            </button>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h3>{category}</h3>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter glass rounded-3xl">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3 className="newsletter-title">
                Stay Updated
              </h3>
              <p className="newsletter-subtitle">
                Subscribe to our newsletter for the latest updates and exclusive offers.
              </p>
            </div>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Evolune EdgeTech. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateViewer
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </footer>
  );
};

export default Footer;
