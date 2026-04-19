import React from 'react';

const features = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Built with the latest frameworks to ensure optimal performance and scalability at every scale.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    gradient: 'gradient-blue',
  },
  {
    title: 'User-Centric Design',
    description: 'Intuitive interfaces designed with users in mind, ensuring seamless experiences across all touchpoints.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    gradient: 'gradient-purple',
  },
  {
    title: 'Cloud-Native Architecture',
    description: 'Scalable, resilient infrastructure that grows with your needs and guarantees 99.9% uptime.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    gradient: 'gradient-blue',
  },
  {
    title: 'AI-Powered Intelligence',
    description: 'Advanced AI and machine learning capabilities to automate tasks and surface intelligent insights.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'gradient-green',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, ensuring your data is always protected.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    gradient: 'gradient-gold',
  },
  {
    title: 'Seamless Integration',
    description: 'Easy integration with your existing tools and workflows through robust APIs and webhooks.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    gradient: 'gradient-pink',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            Built for <span className="text-gradient">Performance</span>
            <br />
            Designed for <span className="text-gradient">Success</span>
          </h2>
          <p className="section-subtitle">
            Experience the difference with features that set us apart from the competition.
          </p>
        </div>

        {/* Features grid — no boxes, just content cells */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-card-icon ${feature.gradient}`}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="features-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Join thousands of satisfied customers who have already discovered
            the power of Evolune EdgeTech solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
