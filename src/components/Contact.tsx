import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="glass rounded-full px-6 py-2 mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-slate-600">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {/* Contact Information */}
          <div className="flex flex-col gap-8" style={{maxWidth: '800px', width: '100%'}}>
            <div className="contact-card glass rounded-3xl glass-hover">
              <div className="contact-icon gradient-blue">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="contact-title">Email Us</h3>
              <p className="contact-subtitle">We'll respond within 24 hours</p>
              <a href="mailto:contact@evolune.in" className="contact-link">
                contact@evolune.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
