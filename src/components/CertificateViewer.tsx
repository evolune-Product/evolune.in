import React, { useEffect, useCallback } from 'react';

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="cert-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cert-header">
          <div className="cert-identity">
            <div className="cert-seal-icon">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5z" />
              </svg>
            </div>
            <div>
              <h3 className="cert-title">Startup India Recognition Certificate</h3>
              <div className="cert-sub">
                <span>DPIIT Certificate No: </span>
                <strong style={{ color: '#fcd34d' }}>DIPP238722</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="cert-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Frame */}
        <div className="cert-frame-wrapper">
          <iframe
            src="/startup-india-certificate.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH,top"
            className="cert-iframe"
            title="DPIIT Startup India Certificate"
          />
        </div>

        {/* Modal Footer */}
        <div className="cert-footer">
          <span>Issued by Department for Promotion of Industry and Internal Trade, Govt. of India.</span>
          <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>● Valid through 23-02-2035</span>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
