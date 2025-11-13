import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Cutting-Edge Technology',
      description: 'Built with the latest technologies and frameworks to ensure optimal performance and scalability.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with users in mind, ensuring seamless experiences across all touchpoints.',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient infrastructure that grows with your needs and ensures 99.9% uptime.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI and machine learning capabilities to automate tasks and provide intelligent insights.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, ensuring your data is always protected.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Seamless Integration',
      description: 'Easy integration with your existing tools and workflows through robust APIs and webhooks.',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="glass rounded-full px-6 py-2 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="text-gradient">Performance</span>
            <br />
            Designed for <span className="text-gradient">Success</span>
          </h2>
          <p className="text-xl text-slate-600">
            Experience the difference with features that set us apart from the competition.
          </p>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 glass-hover"
            >
              <div className={`gradient-${feature.gradient.includes('blue') ? 'blue' : feature.gradient.includes('purple') ? 'purple' : feature.gradient.includes('indigo') ? 'blue' : feature.gradient.includes('green') ? 'green' : feature.gradient.includes('orange') || feature.gradient.includes('red') ? 'orange' : 'orange'} rounded-2xl flex items-center justify-center mb-6 glow`} style={{width: '56px', height: '56px'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 glass rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-slate-800">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-600 mb-8">
            Join thousands of satisfied customers who have already discovered the power of Evolune EdgeTech solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
