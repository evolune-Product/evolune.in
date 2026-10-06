import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <span className="section-label">System Architecture</span>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Scale & Autonomy.</span>
          </h2>
          <p className="section-subtitle">
            Our architectural pillars reflect a commitment to deterministic reliability, edge intelligence, and autonomous developer workflows.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="bento-grid">
          {/* Card 1: Autonomous Multi-Agent Orchestration (Span 2) */}
          <div className="bento-card bento-span-2">
            <div className="bento-icon-wrapper bento-icon-indigo">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="mono-chip">Evolune OS</span>
              <span className="mono-chip" style={{ color: 'var(--accent-indigo-light)' }}>Multi-Agent System</span>
            </div>
            <h3 className="bento-title">Autonomous Multi-Agent Orchestration</h3>
            <p className="bento-desc">
              Evolune OS coordinates multi-agent reasoning loops with strict deterministic boundaries.
              Specialized agents autonomously synthesize architecture specs, generate type-safe code,
              execute test suites, and conduct deep AST-level code reviews—keeping humans in the loop for high-level approvals.
            </p>
          </div>

          {/* Card 2: Unified 13-in-1 Testing Engine */}
          <div className="bento-card">
            <div className="bento-icon-wrapper bento-icon-cyan">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="mono-chip">Flasqo</span>
              <span className="mono-chip" style={{ color: 'var(--accent-cyan-light)' }}>13 Engines</span>
            </div>
            <h3 className="bento-title">Unified API Reliability Engine</h3>
            <p className="bento-desc">
              Consolidates smoke, chaos, GraphQL, contract, load, and browser testing into a single sub-second pipeline.
              Engineered to catch breaking API regressions before code reaches staging.
            </p>
          </div>

          {/* Card 3: Zero-Trust Deterministic Security */}
          <div className="bento-card">
            <div className="bento-icon-wrapper bento-icon-emerald">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="mono-chip">Security</span>
              <span className="mono-chip" style={{ color: 'var(--accent-emerald)' }}>Zero-Trust</span>
            </div>
            <h3 className="bento-title">Deterministic Quality Gates</h3>
            <p className="bento-desc">
              All agent mutations are governed by strict AST audits, static security scanners, and immutable provenance logs.
              Zero hallucinated code ever passes to deployment without verifiable green checks.
            </p>
          </div>

          {/* Card 4: Deployment & Observability (Span 2) */}
          <div className="bento-card bento-span-2">
            <div className="bento-icon-wrapper bento-icon-amber">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="mono-chip">Evolune OS</span>
              <span className="mono-chip" style={{ color: 'var(--accent-amber)' }}>Continuous Deployment</span>
            </div>
            <h3 className="bento-title">Autonomous Deployment & Real-Time Observability</h3>
            <p className="bento-desc">
              Every merge triggers a fully autonomous canary rollout with live telemetry, automated rollback triggers,
              and incident summaries surfaced directly to engineers—closing the loop from commit to production
              without manual intervention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
