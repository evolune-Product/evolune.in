import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Demo / Flasqo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'business@evolune.in';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct mailto link as fallback
    const subject = encodeURIComponent(`[${formData.topic}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <span className="section-label">Connect Directly</span>
          <h2 className="section-title">
            Let's Engineer the <span className="text-gradient">Next Breakthrough.</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to deploy Evolune OS, run testing on Flasqo, explore pilot partnership, or invest in our journey—we respond promptly.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="contact-container">
          {/* Left Column: Direct Communication & SLA */}
          <div className="contact-info-col">
            <div>
              <h3 className="contact-direct-title">Direct Inquiries</h3>
              <p className="contact-direct-desc">
                We work closely with engineering leaders, technical founders, and enterprise teams. Skip the bureaucracy and reach out directly to the core engineering team.
              </p>

              {/* 1-Click Copy Email Card */}
              <div
                className="copy-email-box"
                onClick={handleCopyEmail}
                title="Click to copy email address"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(); }}
              >
                <div className="copy-email-meta">
                  <span className="email-label">Official Enterprise Email</span>
                  <span className="email-address">{emailAddress}</span>
                </div>
                {copied ? (
                  <span className="copy-feedback-badge">✓ Copied!</span>
                ) : (
                  <span className="mono-chip" style={{ cursor: 'pointer' }}>Click to Copy</span>
                )}
              </div>

              {/* SLA Guarantee */}
              <div className="sla-badge">
                <span className="sla-dot" />
                <span>Executive SLA: Response guaranteed within <strong>24 business hours</strong>.</span>
              </div>
            </div>

            {/* Quick stats & location */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <span className="pill-dot" style={{ background: 'var(--accent-indigo-light)', boxShadow: 'none' }} />
                <span>Bengaluru, India • Global Remote</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <span className="pill-dot" style={{ background: '#f59e0b', boxShadow: 'none' }} />
                <span>DPIIT Certified Startup (DIPP238722)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="contact-form-col">
            {submitted ? (
              <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '16px' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <svg width="36" height="36" fill="none" stroke="var(--accent-indigo)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Opening Mail Client...</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Your draft has been composed and forwarded to your default mail client. If it did not launch automatically, send your note directly to <strong>{emailAddress}</strong>.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Compose Another Note
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Work Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="ada@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-topic" className="form-label">Inquiry Area</label>
                  <select
                    id="contact-topic"
                    className="form-select"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  >
                    <option value="Product Demo / Flasqo">Flasqo API Testing Platform Demo</option>
                    <option value="Evolune OS Agentic SDLC">Evolune OS Integration / Beta Access</option>
                    <option value="Investment / Institutional">Institutional / Investment Discussion</option>
                    <option value="Careers / Engineering">Engineering Roles & Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Project Brief / Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us what you are building and how we can collaborate..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Direct Inquiry
                  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
