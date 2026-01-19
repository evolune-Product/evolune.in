import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="glass rounded-full px-6 py-2">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Innovation</span> Meets <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600">
            At Evolune EdgeTech, we're not just building software – we're crafting the future.
          </p>
        </div>

        <div className="grid md-grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass rounded-3xl p-8 glass-hover">
            <div className="gradient-blue rounded-2xl flex items-center justify-center mb-6 glow" style={{width: '64px', height: '64px'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h3>
            <p className="text-slate-600">
              To empower businesses and individuals with innovative, user-centric software solutions
              that solve real-world problems. We believe in creating products that are not just functional,
              but delightful to use.
            </p>
          </div>

          {/* Vision */}
          <div className="glass rounded-3xl p-8 glass-hover">
            <div className="gradient-purple rounded-2xl flex items-center justify-center mb-6 glow" style={{width: '64px', height: '64px'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Vision</h3>
            <p className="text-slate-600">
              To be the leading force in technological innovation, setting new standards in software
              development. We envision a future where our products become indispensable tools that
              transform how people work and live.
            </p>
          </div>

          {/* Values */}
          <div className="glass rounded-3xl p-8 glass-hover values-card">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Our Core Values</h3>
            <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
              <div className="text-center">
                <div className="gradient-blue rounded-xl flex items-center justify-center mb-3" style={{width: '48px', height: '48px', margin: '0 auto'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Innovation</h4>
                <p className="text-sm text-slate-600">Pushing boundaries</p>
              </div>
              <div className="text-center">
                <div className="gradient-blue rounded-xl flex items-center justify-center mb-3" style={{width: '48px', height: '48px', margin: '0 auto'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Quality</h4>
                <p className="text-sm text-slate-600">Excellence in every detail</p>
              </div>
              <div className="text-center">
                <div className="gradient-purple rounded-xl flex items-center justify-center mb-3" style={{width: '48px', height: '48px', margin: '0 auto'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Collaboration</h4>
                <p className="text-sm text-slate-600">Together we grow</p>
              </div>
              <div className="text-center">
                <div className="gradient-purple rounded-xl flex items-center justify-center mb-3" style={{width: '48px', height: '48px', margin: '0 auto'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Agility</h4>
                <p className="text-sm text-slate-600">Adapt and evolve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
