import React, { useEffect, useCallback } from 'react';

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ isOpen, onClose }) => {
  // Prevent keyboard shortcuts for saving/printing/screenshots
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent Ctrl+S, Ctrl+P, Ctrl+Shift+S, PrintScreen
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) ||
      e.key === 'PrintScreen' ||
      (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S'))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  // Prevent right-click context menu
  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('contextmenu', handleContextMenu);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('contextmenu', handleContextMenu);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, handleKeyDown, handleContextMenu]);

  if (!isOpen) return null;

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="certificate-close-btn" onClick={onClose} aria-label="Close">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="certificate-header">
          <h2 className="text-2xl font-bold text-slate-800">Startup India Recognition Certificate</h2>
          <p className="text-slate-600 text-sm mt-2">DPIIT Certificate No: DIPP238722</p>
        </div>

        {/* Certificate container with protections */}
        <div className="certificate-container">
          {/* PDF displayed via iframe for full visibility */}
          <div className="certificate-content">
            <iframe
              src="/startup-india-certificate.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH,top"
              className="certificate-pdf"
              title="Startup India Certificate"
            />
          </div>
        </div>

        {/* Footer note */}
        <div className="certificate-footer">
          <p className="text-slate-500 text-xs">
            This certificate is issued by the Department for Promotion of Industry and Internal Trade (DPIIT),
            Government of India. Valid until 23-02-2035.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
