import React from 'react';

interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  status: string;
  link?: string;
  androidLink?: string;
  iosLink?: string;
}

const products: Product[] = [
  {
    name: 'Cal Coach',
    tagline: 'Your Personal Nutrition Guide',
    description: 'An intelligent calorie tracking application that helps you achieve your health goals with precision and ease. Track meals, monitor nutrition, and get personalized insights.',
    features: ['Smart calorie tracking', 'Nutritional insights', 'Goal setting', 'Progress analytics'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-green-500 to-emerald-600',
    status: 'Live',
    androidLink: 'https://play.google.com/store/apps/details?id=com.calcoach.evolune',
    iosLink: 'https://apps.apple.com/in/app/cal-coach-calorie-tracker/id6754588180',
  },
  {
    name: 'FluxTest',
    tagline: 'AI-Powered API Testing Revolution',
    description: 'The all-in-one AI-based API testing platform that transforms how you test, monitor, and optimize your APIs. Intelligent test generation, automated validation, and comprehensive analytics.',
    features: ['AI test generation', 'Automated testing', 'Real-time monitoring', 'Performance analytics'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-blue-500 to-cyan-600',
    status: 'Live',
    link: 'https://fluxtest.evolune.in/',
  },
  {
    name: 'NextPost',
    tagline: 'Unified Social Media Management',
    description: 'Manage all your social media accounts from one powerful platform. Schedule posts, analyze engagement, and grow your online presence across multiple platforms effortlessly.',
    features: ['Multi-platform posting', 'Content scheduling', 'Analytics dashboard', 'Team collaboration'],
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    gradient: 'from-purple-500 to-pink-600',
    status: 'Live',
    link: 'https://social.evolune.in/',
  },
  {
    name: 'DarkPearl',
    tagline: 'Code in Natural Language',
    description: 'Revolutionary development platform that lets you code applications in simple, natural language. Watch your ideas transform into fully functional applications with real-time preview.',
    features: ['Natural language coding', 'Real-time preview', 'Auto-completion', 'Export to any framework'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-slate-700 to-indigo-900',
    status: 'Beta',
    link: 'https://darkpearlai.evolune.in/',
  },
  {
    name: 'More Coming Soon',
    tagline: 'Innovation Never Stops',
    description: 'We are constantly pushing boundaries and developing cutting-edge solutions. Stay tuned for more revolutionary products that will transform how you work.',
    features: ['AI-powered tools', 'Cloud solutions', 'Developer platforms', 'Business automation'],
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    gradient: 'from-orange-500 to-red-600',
    status: 'Coming Soon',
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="glass rounded-full px-6 py-2 mb-4">
            Our Products
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Powerful Solutions</span>
            <br />
            for Modern Challenges
          </h2>
          <p className="text-xl text-slate-600">
            Discover our suite of innovative products designed to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card glass rounded-3xl glass-hover"
            >
              {/* Status badge */}
              <div className={`product-badge ${
                product.status === 'Live'
                  ? 'badge-live'
                  : product.status === 'Beta'
                  ? 'badge-beta'
                  : 'badge-coming'
              }`}>
                {product.status}
              </div>

              {/* Icon */}
              <div className={`product-icon gradient-${product.gradient.includes('green') ? 'green' : product.gradient.includes('blue') ? 'blue' : product.gradient.includes('purple') ? 'purple' : product.gradient.includes('slate') ? 'blue' : 'orange'}`}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="product-title">{product.name}</h3>
              <p className="product-tagline">
                {product.tagline}
              </p>
              <p className="product-description">
                {product.description}
              </p>

              {/* Features */}
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {product.status !== 'Coming Soon' && (
                <>
                  {/* For apps with Android and iOS links */}
                  {product.androidLink && product.iosLink ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => window.open(product.androidLink, '_blank')}
                        className="flex-1 product-btn gradient-green"
                        style={{background: 'linear-gradient(135deg, var(--color-green-500), #14b8a6)'}}
                      >
                        <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.523 15.3414c-.5511-.0455-.9302-.4999-.9302-1.0381 0-.5607.3988-1.0156.9542-1.0156h.0069c.5542 0 .9486.455.9517 1.0156 0 .5382-.3975.9926-.9826 1.0381zm-11.1045 0c-.585-.0455-.9836-.4999-.9836-1.0381 0-.5607.4202-1.0156.9757-1.0156.5555 0 .9487.455.9518 1.0156 0 .5382-.3974.9926-.9439 1.0381zM8.0001 3.0391C8.0001 2.1665 8.5951 1.5 9.3871 1.5h5.2258c.7919 0 1.3869.6665 1.3869 1.5391v.8282h-8V3.0391zM5.2002 5.3673h13.5996c1.1044 0 2 .9522 2 2.127v11.3787c0 1.1748-.8956 2.127-2 2.127H5.2002c-1.1044 0-2-.9522-2-2.127V7.4943c0-1.1748.8956-2.127 2-2.127z"/>
                        </svg>
                        Android
                      </button>
                      <button
                        onClick={() => window.open(product.iosLink, '_blank')}
                        className="flex-1 product-btn gradient-green"
                        style={{background: 'linear-gradient(135deg, var(--color-green-500), #14b8a6)'}}
                      >
                        <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        iOS
                      </button>
                    </div>
                  ) : (
                    /* For web apps with single link */
                    <button
                      onClick={() => window.open(product.link, '_blank')}
                      className={`product-btn gradient-${product.gradient.includes('green') ? 'green' : product.gradient.includes('blue') ? 'blue' : product.gradient.includes('purple') ? 'purple' : product.gradient.includes('slate') ? 'blue' : 'orange'}`}
                      style={{background: `linear-gradient(135deg, ${product.gradient.includes('green') ? 'var(--color-green-500), #14b8a6' : product.gradient.includes('blue') ? 'var(--color-blue-500), var(--color-indigo-600)' : product.gradient.includes('purple') ? 'var(--color-purple-600), #ec4899' : product.gradient.includes('slate') ? 'var(--color-slate-700), var(--color-indigo-900)' : '#f97316, #dc2626'})`}}
                    >
                      {product.status === 'Beta' ? 'Try Beta' : 'Visit Website'}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
