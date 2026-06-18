import React from 'react';

const blogPosts = [
  {
    tag: 'Developer Tools',
    tagClass: 'blog-tag-cyan',
    accentGradient: 'linear-gradient(90deg, #22d3ee, #818cf8)',
    title: 'Introducing Flasqo: 13 Types of API Testing in One Unified Platform',
    excerpt:
      'API testing has always been fragmented — different tools for functional, performance, security, and load testing. Flasqo changes that by covering everything in one intelligent dashboard powered by AI.',
    date: 'Jun 10, 2025',
    readTime: '5 min read',
    href: 'https://flasqo.com/',
  },
  {
    tag: 'AI & Fashion',
    tagClass: 'blog-tag-violet',
    accentGradient: 'linear-gradient(90deg, #ec4899, #f97316)',
    title: 'How StyleSense AI is Redefining Virtual Try-On with Computer Vision',
    excerpt:
      "Virtual try-on technology has come a long way. StyleSense AI uses cutting-edge computer vision and style intelligence to let users experience clothes virtually — before they buy. Here's the tech behind it.",
    date: 'May 28, 2025',
    readTime: '4 min read',
    href: '#',
  },
  {
    tag: 'Company',
    tagClass: 'blog-tag-green',
    accentGradient: 'linear-gradient(90deg, #10b981, #06b6d4)',
    title: 'From Zero to IIT Madras: The Evolune EdgeTech Founding Story',
    excerpt:
      'We started Evolune EdgeTech in February 2025 with a simple belief — great software should solve real problems. Within months, we were pitching at IIT Madras E-Summit and winning PitchArena.',
    date: 'May 5, 2025',
    readTime: '6 min read',
    href: '#',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">From the Team</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Blog</span>
          </h2>
          <p className="section-subtitle">
            Insights, product updates, and stories from the team building the future at Evolune EdgeTech.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card"
              style={{ '--card-accent': post.accentGradient } as React.CSSProperties}
            >
              <span className={`blog-tag ${post.tagClass}`}>{post.tag}</span>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span className="blog-card-meta-dot" />
                <span>{post.readTime}</span>
              </div>
              <a href={post.href} className="blog-card-link" target="_blank" rel="noopener noreferrer">
                Read more
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <a href="#" className="btn btn-outline">
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
