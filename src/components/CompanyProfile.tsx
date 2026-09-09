import React from 'react';

interface CompanyProfileProps {
  onOpenCertificate?: () => void;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ onOpenCertificate }) => {
  return (
    <section id="company" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-label">Institutional Credibility</span>
          <h2 className="section-title">
            Recognised by <span className="text-gradient-gold">India's Leading Institutions.</span>
          </h2>
          <p className="section-subtitle">
            From premier IIT and IIM entrepreneurship summits to Government of India DPIIT accreditation, Evolune EdgeTech is validated by high-trust ecosystems.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="credentials-grid">
          {/* Card 1: IIT Madras I-Summit Winner */}
          <div className="cred-card">
            <div>
              <div className="cred-card-top">
                <span className="cred-badge cred-badge-gold">
                  <span>Winner</span>
                </span>
                <span className="mono-chip">I-Summit 2026</span>
              </div>
              <h3 className="cred-title">Winner, I-Summit — IIT Madras</h3>
              <p className="cred-desc">
                Evolune EdgeTech won I-Summit 2026 at IIT Madras, and Flasqo reached the finals of PitchArena, the flagship startup pitching competition of the summit. Evaluated by leading venture capitalists and technical judges as a best-in-class developer tools innovation.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="mono-chip" style={{ color: '#fcd34d' }}>IIT Madras Campus</span>
              <span className="mono-chip">Developer Tools</span>
            </div>
          </div>

          {/* Card 2: DPIIT Government of India Recognition */}
          <div className="cred-card">
            <div>
              <div className="cred-card-top">
                <span className="cred-badge cred-badge-emerald">
                  <span>Govt. of India Certified</span>
                </span>
                <span className="mono-chip">DIPP238722</span>
              </div>
              <h3 className="cred-title">DPIIT Startup India Recognition</h3>
              <p className="cred-desc">
                Officially recognised as an innovative startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India. Certificate valid through 2035.
              </p>
            </div>
            {onOpenCertificate ? (
              <button
                type="button"
                onClick={onOpenCertificate}
                className="cred-action-btn"
              >
                <span>View Verified DPIIT Certificate</span>
                <span>→</span>
              </button>
            ) : (
              <a href="/startup-india-certificate.pdf" target="_blank" rel="noopener noreferrer" className="cred-action-btn">
                <span>View Verified DPIIT Certificate</span>
                <span>→</span>
              </a>
            )}
          </div>

          {/* Card 3: IIM Bangalore NSRCEL Incubation */}
          <div className="cred-card">
            <div>
              <div className="cred-card-top">
                <span className="cred-badge cred-badge-indigo">
                  <span>Incubation Shortlist</span>
                </span>
                <span className="mono-chip">IIM Bangalore</span>
              </div>
              <h3 className="cred-title">NSRCEL — IIM Bangalore</h3>
              <p className="cred-desc">
                Shortlisted by NSRCEL (N.S. Raghavan Centre for Entrepreneurial Learning) at Indian Institute of Management Bangalore for incubation consideration—one of India's most selective programmes for high-growth ventures.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="mono-chip" style={{ color: 'var(--accent-indigo-light)' }}>NSRCEL Cohort</span>
              <span className="mono-chip">Enterprise Tech</span>
            </div>
          </div>

          {/* Card 4: IIT Madras E-Summit & I-Summit Participation */}
          <div className="cred-card">
            <div>
              <div className="cred-card-top">
                <span className="cred-badge cred-badge-gold">
                  <span>Campus Pitch</span>
                </span>
                <span className="mono-chip">E-Summit '26</span>
              </div>
              <h3 className="cred-title">IIT Madras E-Summit Selection</h3>
              <p className="cred-desc">
                Selected among thousands of applicants to pitch directly on the IIT Madras campus at both E-Summit and I-Summit 2026, gaining direct exposure to national angel syndicates, institutional mentors, and enterprise partners.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="mono-chip" style={{ color: '#fcd34d' }}>IITM E-Cell</span>
              <span className="mono-chip">Chennai, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
