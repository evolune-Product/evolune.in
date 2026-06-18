import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={`section contact-section ${visible ? 'contact-visible' : ''}`}>

      {/* Floating background orbs */}
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />
      <div className="contact-orb contact-orb-3" />

      <div className="container">

        {/* Header */}
        <div className="section-header contact-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something{' '}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Card */}
        <div className="contact-wrapper">
          <div className="contact-card-animated">
            <div className="contact-card-border" />
            <div className="contact-card-inner">
              <div className="contact-icon gradient-blue contact-icon-pulse">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="contact-title">Email Us</h3>
              <p className="contact-subtitle">We'll respond within 24 hours</p>
              <a href="mailto:business@evolune.in" className="contact-link contact-link-shine">
                business@evolune.in
                <span className="contact-link-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
