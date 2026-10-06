import React, { useState } from 'react';

type ProductKey = 'evolune-os' | 'flasqo' | 'spendveto';

interface ProductData {
  id: ProductKey;
  name: string;
  tagline: string;
  category: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  badgeClass: string;
  description: string;
  features: string[];
  primaryLink?: string;
  primaryActionText?: string;
}

const productsData: Record<ProductKey, ProductData> = {
  'evolune-os': {
    id: 'evolune-os',
    name: 'Evolune OS',
    tagline: 'An Autonomous AI Engineering Team That Ships End-to-End',
    category: 'Agentic SDLC Platform',
    status: 'Live',
    badgeClass: 'badge-live',
    description:
      'Evolune OS orchestrates specialized autonomous agents (Architect, Coder, Reviewer, DevOps Engineer) across the entire software development lifecycle. From issue intake to production deployment, it automates testing, code review, and CI/CD with human-in-the-loop governance.',
    features: [
      'Autonomous multi-agent task planning & execution',
      'Automated architectural design & spec verification',
      'Strict AI code reviews with deterministic quality gates',
      'Continuous autonomous deployment pipelines',
      'Granular human-in-the-loop oversight & approvals',
    ],
    primaryLink: 'https://evoluneos.com',
    primaryActionText: 'Explore Evolune OS',
  },
  'flasqo': {
    id: 'flasqo',
    name: 'Flasqo',
    tagline: '13 Types of API Testing Unified in One Intelligent Engine',
    category: 'Developer Tools & Reliability',
    status: 'Beta',
    badgeClass: 'badge-beta',
    description:
      'PitchArena finalist at IIT Madras I-Summit 2026. Flasqo replaces fragmented testing silos with a single unified platform. Execute smoke, regression, load, chaos, GraphQL, contract, and full-send end-to-end browser tests in milliseconds before bugs ever reach production.',
    features: [
      '13 unified testing types in a single dashboard',
      'Autonomous regression & contract drift detection',
      'High-concurrency load & chaos injection testing',
      'Zero-configuration GraphQL & REST schema validation',
      'Sub-second test feedback loop for high-velocity teams',
    ],
    primaryLink: 'https://flasqo.com',
    primaryActionText: 'Launch Flasqo Beta',
  },
  'spendveto': {
    id: 'spendveto',
    name: 'SpendVeto',
    tagline: 'Your Agents Can Spend. SpendVeto Decides.',
    category: 'AI Agent Payment Governance',
    status: 'Live',
    badgeClass: 'badge-live',
    description:
      'SpendVeto is an open-source, buyer-side policy layer that governs autonomous AI agent spending. It sits above payment rails like x402, Stripe, and Coinbase, enforcing hard spending controls before agents ever transfer funds — closing the gap between payment infrastructure and spending safety for autonomous systems.',
    features: [
      'Policy engine with per-call caps, hourly budgets & rate limits',
      'Human approval workflows that fail closed after 30 seconds',
      'Hierarchical budget delegation with binding parent-to-child caps',
      'Tool & chain scoping restricts which APIs and blockchains agents reach',
      'Automatic wallet freeze on burst detection, ECDSA-signed audit receipts',
    ],
    primaryLink: 'https://spendveto.com',
    primaryActionText: 'Explore SpendVeto',
  },
};

const productImages: Record<ProductKey, { src: string; caption: string }> = {
  'evolune-os': {
    src: '/images/evolune-os-preview.jpg',
    caption: 'Evolune OS — Agentic SDLC & Autonomous Team Interface',
  },
  'flasqo': {
    src: '/images/flasqo-preview.jpg',
    caption: 'Flasqo — 13 API Engines & Real-Time Telemetry Dashboard',
  },
  'spendveto': {
    src: '/images/spendveto-preview.jpg',
    caption: 'SpendVeto — Agent Spend Policy Engine & Audit Console',
  },
};

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductKey>('evolune-os');
  const [activeStage, setActiveStage] = useState<number>(2);
  const [canvasMode, setCanvasMode] = useState<'console' | 'mockup'>('console');
  const [failedImages, setFailedImages] = useState<Set<ProductKey>>(new Set());

  const activeProduct = productsData[activeTab];

  return (
    <section id="products" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <span className="section-label">Flagship Engineering</span>
          <h2 className="section-title">
            Intelligent Systems. <span className="text-gradient">Zero Compromise.</span>
          </h2>
          <p className="section-subtitle">
            Every Evolune product is built to eliminate fundamental engineering bottlenecks with autonomous intelligence, mathematical precision, and edge computing.
          </p>
        </div>

        {/* Product Studio Showcase */}
        <div className="product-studio">
          {/* Studio Tab Navigation */}
          <div className="studio-tabs" role="tablist">
            {(Object.keys(productsData) as ProductKey[]).map((key) => {
              const item = productsData[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`studio-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <span>{item.name}</span>
                  <span className={`tab-badge ${item.badgeClass}`}>{item.status}</span>
                </button>
              );
            })}
          </div>

          {/* Studio Body */}
          <div className="studio-body">
            {/* Left: Product Editorial Info */}
            <div className="studio-info">
              <div>
                <div className="studio-category">
                  <span>●</span>
                  <span>{activeProduct.category}</span>
                </div>
                <h3 className="studio-product-title">{activeProduct.name}</h3>
                <p className="studio-tagline">{activeProduct.tagline}</p>
                <p className="studio-desc">{activeProduct.description}</p>

                {/* Features list */}
                <ul className="studio-features-list">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="studio-feature-item">
                      <svg className="feature-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="studio-actions">
                {activeProduct.primaryLink ? (
                  <a
                    href={activeProduct.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {activeProduct.primaryActionText}
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <a href="#contact" className="btn btn-primary">
                    {activeProduct.primaryActionText}
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
                <a href="#contact" className="btn btn-secondary">
                  Discuss Integration
                </a>
              </div>
            </div>

            {/* Right: Interactive Live Simulator Canvas / Mockup */}
            <div className="studio-canvas">
              {/* Canvas Toolbar with View Switcher */}
              <div className="canvas-toolbar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 8px var(--accent-emerald)' }} />
                  <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    {canvasMode === 'console' ? 'Interactive Telemetry' : 'High-Resolution UI Mockup'}
                  </span>
                </div>
                <div className="canvas-mode-switch">
                  <button
                    type="button"
                    className={`canvas-mode-btn ${canvasMode === 'console' ? 'active' : ''}`}
                    onClick={() => setCanvasMode('console')}
                  >
                    Console
                  </button>
                  <button
                    type="button"
                    className={`canvas-mode-btn ${canvasMode === 'mockup' ? 'active' : ''}`}
                    onClick={() => setCanvasMode('mockup')}
                  >
                    UI Mockup
                  </button>
                </div>
              </div>

              {/* Mode 1: High-Res UI Mockup Render */}
              {canvasMode === 'mockup' && (
                <div className="canvas-mockup-wrapper">
                  {failedImages.has(activeTab) ? (
                    <div className="canvas-mockup-placeholder">
                      <span>Preview coming soon</span>
                    </div>
                  ) : (
                    <img
                      src={productImages[activeTab].src}
                      alt={activeProduct.name}
                      className="canvas-mockup-img"
                      loading="lazy"
                      onError={() =>
                        setFailedImages((prev) => new Set(prev).add(activeTab))
                      }
                    />
                  )}
                  <div className="canvas-mockup-caption">
                    <span>{productImages[activeTab].caption}</span>
                    <span className="mono-chip">4K Render</span>
                  </div>
                </div>
              )}

              {/* Mode 2: Interactive Console Simulation */}
              {canvasMode === 'console' && (
                <>
                  {/* 1. Evolune OS Live Pipeline Simulation */}
                  {activeTab === 'evolune-os' && (
                    <div className="agent-pipeline-box">
                      <div className="console-header">
                        <div className="console-dots">
                          <span className="console-dot dot-red" />
                          <span className="console-dot dot-yellow" />
                          <span className="console-dot dot-green" />
                        </div>
                        <span className="console-title">Evolune OS — Agent Orchestration Engine</span>
                        <span className="mono-chip" style={{ color: 'var(--accent-emerald)' }}>Active Session</span>
                      </div>

                      <div className="agent-stages">
                        {[
                          { role: 'ARC', name: 'Architect Agent', task: 'Synthesizing API specs & DB schema', status: 'Completed', done: true },
                          { role: 'DEV', name: 'Developer Agent', task: 'Writing type-safe TypeScript implementation', status: 'Completed', done: true },
                          { role: 'REV', name: 'Reviewer Agent', task: 'Validating AST rules & static security', status: 'Running Analysis', active: true },
                          { role: 'OPS', name: 'DevOps Agent', task: 'Automated container build & canary deploy', status: 'Queued', done: false },
                        ].map((st, i) => (
                          <div
                            key={i}
                            className={`agent-stage-row ${activeStage === i ? 'active-stage' : ''}`}
                            onClick={() => setActiveStage(i)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="stage-identity">
                              <div className="stage-role-icon">{st.role}</div>
                              <div>
                                <div className="stage-name">{st.name}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{st.task}</div>
                              </div>
                            </div>
                            <div className="stage-status">
                              {st.done && <span className="status-done">✓ Done</span>}
                              {st.active && <span className="status-active">● {st.status}</span>}
                              {!st.done && !st.active && <span style={{ color: 'var(--text-muted)' }}>◌ {st.status}</span>}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Human-in-the-loop gate: <strong style={{ color: '#fff' }}>Enabled</strong></span>
                        <span className="mono-chip">Latency: 14ms</span>
                      </div>
                    </div>
                  )}

                  {/* 2. Flasqo 13-in-1 Test Runner Simulation */}
                  {activeTab === 'flasqo' && (
                    <div className="test-runner-box">
                      <div className="console-header">
                        <div className="console-dots">
                          <span className="console-dot dot-red" />
                          <span className="console-dot dot-yellow" />
                          <span className="console-dot dot-green" />
                        </div>
                        <span className="console-title">Flasqo v2.4 — 13 Testing Engines Unified</span>
                        <span className="mono-chip" style={{ color: '#fcd34d' }}>PitchArena Finalist</span>
                      </div>

                      <div className="test-grid-summary">
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: 'var(--accent-emerald)' }}>2,841</div>
                          <div className="test-stat-lbl">Assertions Passed</div>
                        </div>
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: 'var(--accent-cyan-light)' }}>42ms</div>
                          <div className="test-stat-lbl">Avg Response</div>
                        </div>
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: '#ffffff' }}>0</div>
                          <div className="test-stat-lbl">Vulnerabilities</div>
                        </div>
                      </div>

                      <div className="test-suites-list">
                        {[
                          { name: 'Smoke & Functional Suite', time: '14ms', type: 'Instant', state: 'PASS' },
                          { name: 'GraphQL Query & Mutation Contract', time: '28ms', type: 'Schema Valid', state: 'PASS' },
                          { name: 'Chaos Network Latency & Drop Simulation', time: '64ms', type: 'Resilient', state: 'PASS' },
                          { name: 'High-Concurrency Load (10,000 req/s)', time: '82ms', type: '99.99% Ok', state: 'PASS' },
                          { name: 'FullSend E2E Browser Journey', time: '120ms', type: 'DOM Validated', state: 'PASS' },
                        ].map((suite, idx) => (
                          <div key={idx} className="test-suite-row">
                            <div className="test-type-name">
                              <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                              <span>{suite.name}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span className="test-metric-tag">{suite.time}</span>
                              <span className="mono-chip">{suite.state}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Status: <strong style={{ color: 'var(--accent-emerald)' }}>Production Ready</strong></span>
                        <a href="https://flasqo.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan-light)', textDecoration: 'none' }}>flasqo.com ↗</a>
                      </div>
                    </div>
                  )}

                  {/* 3. SpendVeto Agent Spend Policy Simulation */}
                  {activeTab === 'spendveto' && (
                    <div className="test-runner-box">
                      <div className="console-header">
                        <div className="console-dots">
                          <span className="console-dot dot-red" />
                          <span className="console-dot dot-yellow" />
                          <span className="console-dot dot-green" />
                        </div>
                        <span className="console-title">SpendVeto — Agent Payment Policy Engine</span>
                        <span className="mono-chip" style={{ color: 'var(--accent-emerald)' }}>Open Source</span>
                      </div>

                      <div className="test-grid-summary">
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: 'var(--accent-emerald)' }}>169M+</div>
                          <div className="test-stat-lbl">x402 Payments Cleared</div>
                        </div>
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: 'var(--accent-cyan-light)' }}>15</div>
                          <div className="test-stat-lbl">Chains Governed</div>
                        </div>
                        <div className="test-summary-stat">
                          <div className="test-stat-val" style={{ color: '#ffffff' }}>30s</div>
                          <div className="test-stat-lbl">Fail-Closed Window</div>
                        </div>
                      </div>

                      <div className="test-suites-list">
                        {[
                          { name: 'Per-Call Cap & Hourly Budget Check', time: '6ms', type: 'Within Policy', state: 'ALLOW' },
                          { name: 'Tool & Chain Scope Validation', time: '9ms', type: 'Scoped', state: 'ALLOW' },
                          { name: 'Burst Detection (10 req / 10s)', time: '4ms', type: 'Threshold Ok', state: 'ALLOW' },
                          { name: 'Human Approval Escalation', time: '30s', type: 'Fail-Closed', state: 'REVIEW' },
                          { name: 'ECDSA Receipt Signing & Audit Export', time: '11ms', type: 'Signed', state: 'ALLOW' },
                        ].map((suite, idx) => (
                          <div key={idx} className="test-suite-row">
                            <div className="test-type-name">
                              <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                              <span>{suite.name}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span className="test-metric-tag">{suite.time}</span>
                              <span className="mono-chip">{suite.state}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Status: <strong style={{ color: 'var(--accent-emerald)' }}>Apache-2.0 · Live</strong></span>
                        <a href="https://spendveto.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan-light)', textDecoration: 'none' }}>spendveto.com ↗</a>
                      </div>
                    </div>
                  )}

                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
