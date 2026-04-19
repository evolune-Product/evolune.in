import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            <span className="text-gradient">Innovation</span> Meets{' '}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="section-subtitle">
            At Evolune EdgeTech, we're not just building software — we're crafting the future.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md-grid-cols-2 gap-6 mb-6">
          {/* Mission */}
          <div className="about-card">
            <div className="about-icon gradient-blue">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="about-card-body">
              <h3 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.75' }}>
                To empower businesses and individuals with innovative, user-centric software solutions
                that solve real-world problems. We believe in creating products that are not just
                functional, but delightful to use.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="about-card">
            <div className="about-icon gradient-purple">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="about-card-body">
              <h3 className="text-2xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: '1.75' }}>
                To be the leading force in technological innovation, setting new standards in software
                development. We envision a future where our products become indispensable tools that
                transform how people work and live.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-card">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ letterSpacing: '-0.02em' }}>
            Our Core Values
          </h3>
          <div className="values-inner">
            <div className="value-item">
              <div className="value-icon value-icon-violet">
                {/* Atom / Neural — Innovation */}
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                  <ellipse cx="12" cy="12" rx="10" ry="3.5" strokeWidth={1.75} />
                  <ellipse cx="12" cy="12" rx="10" ry="3.5" strokeWidth={1.75} transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="3.5" strokeWidth={1.75} transform="rotate(120 12 12)" />
                </svg>
              </div>
              <span className="value-name">Innovation</span>
              <span className="value-desc">Pushing boundaries</span>
            </div>

            <div className="value-item">
              <div className="value-icon value-icon-green">
                {/* Shield Check — Quality */}
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="value-name">Quality</span>
              <span className="value-desc">Excellence in every detail</span>
            </div>

            <div className="value-item">
              <div className="value-icon value-icon-blue">
                {/* Network Nodes — Collaboration */}
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="4" r="2" strokeWidth={1.75} />
                  <circle cx="4.5" cy="18" r="2" strokeWidth={1.75} />
                  <circle cx="19.5" cy="18" r="2" strokeWidth={1.75} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6v5M12 11L6 16M12 11l6 5" />
                </svg>
              </div>
              <span className="value-name">Collaboration</span>
              <span className="value-desc">Together we grow</span>
            </div>

            <div className="value-item">
              <div className="value-icon value-icon-pink">
                {/* Rocket — Agility */}
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <span className="value-name">Agility</span>
              <span className="value-desc">Adapt and evolve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
