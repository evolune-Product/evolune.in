import React, { useState } from 'react';

interface VisualStat {
  emoji: string;
  label: string;
  value: string;
}

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  bgAccent: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  link?: string;
  androidLink?: string;
  iosLink?: string;
  visualStats: VisualStat[];
  visualTag: string;
}

const products: Product[] = [
  {
    name: 'Cal Coach',
    tagline: 'Your Personal Nutrition Guide',
    description:
      'An intelligent calorie tracking companion that helps you hit your health goals with precision. Smart meal logging, AI-powered nutrition insights, and beautiful progress analytics — all in one app.',
    features: [
      'AI-powered calorie tracking',
      'Macro & micro nutrient breakdown',
      'Personalized meal plans',
      'Barcode food scanner',
      'Progress charts & analytics',
    ],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    bgAccent: 'rgba(16, 185, 129, 0.05)',
    status: 'Live',
    androidLink: 'https://play.google.com/store/apps/details?id=com.calcoach.evolune',
    iosLink: 'https://apps.apple.com/in/app/cal-coach-calorie-tracker/id6754588180',
    visualTag: 'Health & Wellness',
    visualStats: [
      { emoji: '🔥', label: 'Calories Today', value: '1,847' },
      { emoji: '💪', label: 'Protein', value: '92g' },
      { emoji: '📊', label: 'Goal Progress', value: '78%' },
      { emoji: '🥗', label: 'Meals Logged', value: '3 / day' },
    ],
  },
  {
    name: 'FluxTest',
    tagline: '8 Types of Testing in One Unified Platform',
    description:
      'The premium API testing platform that unifies everything — functional, integration, performance, security, load, regression, contract, and end-to-end testing — all powered by AI intelligence to catch bugs before production.',
    features: [
      '8 testing types in one dashboard',
      'AI-powered test generation',
      'Real-time performance monitoring',
      'Automated regression suites',
      'Security vulnerability scanning',
    ],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradientFrom: '#3b82f6',
    gradientTo: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    bgAccent: 'rgba(59, 130, 246, 0.05)',
    status: 'Beta',
    link: 'https://fluxtest.evolune.in/',
    visualTag: 'Developer Tools',
    visualStats: [
      { emoji: '✅', label: 'Tests Passed', value: '2,841' },
      { emoji: '⚡', label: 'Avg Response', value: '142ms' },
      { emoji: '🛡️', label: 'Vulnerabilities', value: '0 found' },
      { emoji: '🔄', label: 'Test Types', value: '8 unified' },
    ],
  },
  {
    name: 'DarkPearl',
    tagline: 'Code in Natural Language',
    description:
      'Stop writing boilerplate. Describe what you want in plain English and watch DarkPearl generate production-ready code with a live preview — then export to any framework in seconds.',
    features: [
      'Natural language to code',
      'Live real-time preview',
      'Multi-framework export',
      'AI auto-completion engine',
      'One-click deployment',
    ],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradientFrom: '#7c3aed',
    gradientTo: '#4f46e5',
    glowColor: 'rgba(124, 58, 237, 0.25)',
    bgAccent: 'rgba(124, 58, 237, 0.05)',
    status: 'Beta',
    link: 'https://darkpearl.evolune.in/',
    visualTag: 'AI Development',
    visualStats: [
      { emoji: '💬', label: 'Prompt', value: '"Build a login form"' },
      { emoji: '⚡', label: 'Generated in', value: '0.8 seconds' },
      { emoji: '📦', label: 'Frameworks', value: 'React, Vue, Next' },
      { emoji: '🚀', label: 'Deploy time', value: '< 30 seconds' },
    ],
  },
  {
    name: 'StyleSense AI',
    tagline: 'Virtual Fashion & AI Styling',
    description:
      'The future of fashion is here. Try on clothes virtually, get AI-curated outfit recommendations, and shop with confidence — powered by cutting-edge computer vision and style intelligence.',
    features: [
      'Virtual try-on technology',
      'AI outfit recommendations',
      'Trend & season analysis',
      'Personalized wardrobe AI',
      'Smart size prediction',
    ],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradientFrom: '#ec4899',
    gradientTo: '#f97316',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    bgAccent: 'rgba(236, 72, 153, 0.05)',
    status: 'Live',
    androidLink: 'https://play.google.com/store/apps/details?id=com.styleai.aifashionapp',
    iosLink: 'https://apps.apple.com/us/app/stylesense-ai-outfit-analyzer/id6757631101',
    visualTag: 'Fashion & AI',
    visualStats: [
      { emoji: '👗', label: 'Outfits Tried', value: '50K+' },
      { emoji: '📥', label: 'Downloads in 1 Week', value: '100+' },
      { emoji: '✨', label: 'Style Score', value: '9.4 / 10' },
      { emoji: '👍', label: 'User Rating', value: '4.8 stars' },
    ],
  },
  {
    name: 'Evo-MedX',
    tagline: 'Contactless Vitals from Your Camera',
    description:
      'The future of personal health monitoring. Evo-MedX uses remote photoplethysmography (rPPG) to measure your heart rate, SpO2, stress levels, and more — entirely contactless, just through your device camera.',
    features: [
      'Contactless heart rate via rPPG',
      'Blood oxygen (SpO₂) estimation',
      'Stress & HRV analysis',
      'Respiratory rate detection',
      'Real-time vitals dashboard',
    ],
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradientFrom: '#06b6d4',
    gradientTo: '#0ea5e9',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    bgAccent: 'rgba(6, 182, 212, 0.05)',
    status: 'Coming Soon',
    visualTag: 'MedTech & AI',
    visualStats: [
      { emoji: '❤️', label: 'Heart Rate', value: 'Via Camera' },
      { emoji: '🩸', label: 'SpO₂', value: 'Contactless' },
      { emoji: '🧠', label: 'Stress Level', value: 'HRV-based' },
      { emoji: '🌬️', label: 'Resp. Rate', value: 'Real-time' },
    ],
  },
];

const Products: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const product = products[activeIndex];

  const gradient = `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`;

  return (
    <section id="products" className="section pe-section">
      <div className="pe-container">
        {/* Header */}
        <div className="pe-header">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">
            A Suite of <span className="text-gradient">Intelligent</span> Products
          </h2>
          <p className="section-subtitle">
            Each product is crafted to solve a real problem with precision, elegance, and scale.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="pe-tabs" role="tablist">
          {products.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={i === activeIndex}
              className={`pe-tab ${i === activeIndex ? 'pe-tab-active' : ''}`}
              onClick={() => setActiveIndex(i)}
              style={i === activeIndex ? {
                background: `linear-gradient(135deg, ${p.gradientFrom}22, ${p.gradientTo}22)`,
                borderColor: `${p.gradientFrom}55`,
                color: p.gradientFrom,
              } : {}}
            >
              <div
                className="pe-tab-icon"
                style={i === activeIndex ? { background: gradient } : {}}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                </svg>
              </div>
              <span className="pe-tab-name">{p.name}</span>
              <span className={`pe-tab-badge ${p.status === 'Live' ? 'badge-live' : p.status === 'Beta' ? 'badge-beta' : 'badge-coming'}`}>
                {p.status}
              </span>
            </button>
          ))}
        </div>

        {/* Showcase Panel */}
        <div
          className="pe-showcase"
          key={activeIndex}
          style={{ '--pe-glow': product.glowColor, '--pe-bg-accent': product.bgAccent } as React.CSSProperties}
        >
          {/* Ambient glow */}
          <div className="pe-glow-orb" style={{ background: product.glowColor }} />

          {/* Left — Product Info */}
          <div className="pe-info">
            <div className="pe-meta">
              <span className={`product-badge-inline ${product.status === 'Live' ? 'badge-live' : product.status === 'Beta' ? 'badge-beta' : 'badge-coming'}`}>
                {product.status === 'Live' ? '● Live' : product.status === 'Beta' ? '◐ Beta' : '◌ Coming Soon'}
              </span>
              <span className="pe-category">{product.visualTag}</span>
            </div>

            <h3 className="pe-product-name" style={{
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {product.name}
            </h3>
            <p className="pe-tagline">{product.tagline}</p>
            <p className="pe-description">{product.description}</p>

            {/* Features */}
            <ul className="pe-features">
              {product.features.map((feat, i) => (
                <li key={i} className="pe-feature">
                  <svg
                    className="pe-feature-check"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: product.gradientFrom }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="pe-cta-row">
              {product.status === 'Coming Soon' ? (
                <span className="pe-cta-coming-soon">
                  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Launching Soon
                </span>
              ) : (product.androidLink || product.iosLink) ? (
                <>
                  {product.androidLink && (
                    <a
                      href={product.androidLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pe-store-btn"
                    >
                      <svg className="pe-store-btn-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z"/>
                      </svg>
                      <div className="pe-store-btn-text">
                        <span className="pe-store-btn-sub">GET IT ON</span>
                        <span className="pe-store-btn-name">Google Play</span>
                      </div>
                    </a>
                  )}
                  {product.iosLink && (
                    <a
                      href={product.iosLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pe-store-btn"
                    >
                      <svg className="pe-store-btn-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="pe-store-btn-text">
                        <span className="pe-store-btn-sub">Download on the</span>
                        <span className="pe-store-btn-name">App Store</span>
                      </div>
                    </a>
                  )}
                </>
              ) : (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pe-cta-btn"
                  style={{ background: gradient }}
                >
                  {product.status === 'Beta' ? 'Try Beta' : 'Open App'}
                  <svg style={{ width: 16, height: 16, marginLeft: 8 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
              <a href="#contact" className="pe-cta-ghost">
                Learn More
              </a>
            </div>
          </div>

          {/* Right — Visual Showcase */}
          <div className="pe-visual">
            {/* Central icon orb */}
            <div className="pe-visual-orb" style={{ background: gradient }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 52, height: 52, color: 'white' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
              </svg>
            </div>

            {/* Floating stat cards */}
            <div className="pe-stat-grid">
              {product.visualStats.map((stat, i) => (
                <div
                  key={i}
                  className="pe-stat-card"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="pe-stat-emoji">{stat.emoji}</span>
                  <div className="pe-stat-content">
                    <span className="pe-stat-label">{stat.label}</span>
                    <span className="pe-stat-value" style={{ color: product.gradientFrom }}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative ring */}
            <div className="pe-visual-ring" style={{ borderColor: `${product.gradientFrom}22` }} />
          </div>
        </div>

        {/* Product navigation dots */}
        <div className="pe-dots">
          {products.map((p, i) => (
            <button
              key={i}
              className={`pe-dot ${i === activeIndex ? 'pe-dot-active' : ''}`}
              onClick={() => setActiveIndex(i)}
              style={i === activeIndex ? { background: p.gradientFrom } : {}}
              aria-label={`Switch to ${p.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
