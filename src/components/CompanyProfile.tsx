import React, { useState } from 'react';

type Tab = 'overview' | 'achievements' | 'products';

const CompanyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const stats = [
    { value: 'Feb 2025', label: 'Founded' },
    { value: '4', label: 'Products' },
    { value: '2', label: 'On App Stores' },
    { value: 'DPIIT', label: 'Recognised' },
  ];

  const highlights = [
    { icon: '🏛️', title: 'IIT Madras', desc: 'Selected for E-Summit & I-Summit 2026' },
    { icon: '🏆', title: 'PitchArena Winner', desc: 'Flasqo secured top place at I-Summit 2026' },
    { icon: '🎓', title: 'NSRCEL Shortlist', desc: 'Shortlisted by IIM Bangalore for incubation' },
    { icon: '🚀', title: 'IIT Madras Pitch', desc: 'Opportunity to pitch at IIT Madras campus' },
  ];

  const achievements = [
    {
      emoji: '🏛️',
      badge: 'E-Summit & I-Summit 2026',
      title: 'IIT Madras Selection',
      description:
        'Evolune EdgeTech was selected to participate at IIT Madras E-Summit and I-Summit 2026 — one of the most prestigious startup events in India, bringing together the nation\'s top innovators and investors.',
      gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      glow: 'rgba(99, 102, 241, 0.18)',
    },
    {
      emoji: '🏆',
      badge: 'PitchArena Champion',
      title: 'Flasqo Wins PitchArena',
      description:
        'Flasqo sealed the top position at PitchArena — the flagship startup pitching competition at I-Summit 2026, IIT Madras. Recognised as a best-in-class solution in the developer tools space.',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      glow: 'rgba(245, 158, 11, 0.18)',
    },
    {
      emoji: '🎓',
      badge: 'Incubation Shortlist',
      title: 'NSRCEL — IIM Bangalore',
      description:
        'Shortlisted by NSRCEL (N.S. Raghavan Centre for Entrepreneurial Learning) at IIM Bangalore for incubation consideration — one of India\'s premier incubation programmes for high-potential startups.',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      glow: 'rgba(16, 185, 129, 0.18)',
    },
    {
      emoji: '🎤',
      badge: 'Campus Pitch',
      title: 'IIT Madras Pitch Opportunity',
      description:
        'Earned the opportunity to pitch directly at IIT Madras — opening doors to mentorship, funding networks, and collaboration with one of India\'s leading centres for technology and innovation.',
      gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
      glow: 'rgba(236, 72, 153, 0.18)',
    },
  ];

  const products = [
    {
      name: 'Cal Coach',
      tagline: 'Your Personal Nutrition Guide',
      status: 'Live',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      tag: 'Health & Wellness',
    },
    {
      name: 'Flasqo',
      tagline: '13 Types of Testing in One Unified Platform',
      status: 'Beta',
      gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      tag: 'Developer Tools',
    },
    {
      name: 'StyleSense AI',
      tagline: 'Virtual Fashion & AI Styling',
      status: 'Live',
      gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      tag: 'Fashion & AI',
    },
    {
      name: 'Evo-MedX',
      tagline: 'Contactless Vitals from Your Camera',
      status: 'Coming Soon',
      gradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      tag: 'MedTech & AI',
    },
  ];

  return (
    <section id="company" className="section cp-section">
      <div className="cp-container">

        {/* Header */}
        <div className="cp-header">
          <span className="section-label">Company Profile</span>
          <h2 className="section-title">
            Building the <span className="text-gradient">Future</span> of Tech
          </h2>
          <p className="section-subtitle">
            A DPIIT-recognised startup from India, shipping intelligent products that matter.
          </p>
        </div>

        {/* Stat Chips Row */}
        <div className="cp-stats-row">
          {stats.map((s, i) => (
            <div key={i} className="cp-stat-chip">
              <span className="cp-stat-chip-value">{s.value}</span>
              <span className="cp-stat-chip-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* iOS Segmented Control Tabs */}
        <div className="cp-seg-control" role="tablist">
          {(['overview', 'achievements', 'products'] as Tab[]).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`cp-seg-btn ${activeTab === tab ? 'cp-seg-btn-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'overview' && '🏢 '}
              {tab === 'achievements' && '🏆 '}
              {tab === 'products' && '📦 '}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Overview Tab ── */}
        {activeTab === 'overview' && (
          <div className="cp-tab-content">
            {/* About Card */}
            <div className="cp-about-card">
              <div className="cp-about-badge">
                <div className="cp-about-logo" />
                <div>
                  <div className="cp-about-name">Evolune EdgeTech</div>
                  <div className="cp-about-sub">DPIIT Recognised Startup · Est. February 26, 2025</div>
                </div>
              </div>
              <p className="cp-about-body">
                Evolune EdgeTech is a next-generation software company building intelligent products across
                health, developer tools, AI, fashion, and medtech. Founded in February 2025, we've shipped
                5 products in under a year — two live on app stores globally — and have been recognised by
                some of India's most prestigious institutions.
              </p>
              <div className="cp-highlights-grid">
                {highlights.map((h, i) => (
                  <div key={i} className="cp-highlight-item">
                    <span className="cp-highlight-icon">{h.icon}</span>
                    <div>
                      <div className="cp-highlight-title">{h.title}</div>
                      <div className="cp-highlight-desc">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Achievements Tab ── */}
        {activeTab === 'achievements' && (
          <div className="cp-tab-content">
            <div className="cp-achieve-grid">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="cp-achieve-card"
                  style={{ '--cp-glow': a.glow } as React.CSSProperties}
                >
                  <div className="cp-achieve-glow" style={{ background: a.glow }} />
                  <div className="cp-achieve-icon-wrap" style={{ background: a.gradient }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{a.emoji}</span>
                  </div>
                  <span className="cp-achieve-badge">{a.badge}</span>
                  <h3 className="cp-achieve-title">{a.title}</h3>
                  <p className="cp-achieve-desc">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Products Tab ── */}
        {activeTab === 'products' && (
          <div className="cp-tab-content">
            <div className="cp-products-grid">
              {products.map((p, i) => (
                <div key={i} className="cp-product-card">
                  <div className="cp-product-orb" style={{ background: p.gradient }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      style={{ width: 28, height: 28, color: 'white' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={p.icon} />
                    </svg>
                  </div>
                  <div className="cp-product-info">
                    <div className="cp-product-top">
                      <span className="cp-product-name">{p.name}</span>
                      <span className={`cp-product-badge ${p.status === 'Live' ? 'badge-live' : p.status === 'Beta' ? 'badge-beta' : 'badge-coming'}`}>
                        {p.status === 'Live' ? '● Live' : p.status === 'Beta' ? '◐ Beta' : '◌ Soon'}
                      </span>
                    </div>
                    <span className="cp-product-tagline">{p.tagline}</span>
                    <span className="cp-product-tag">{p.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CompanyProfile;
