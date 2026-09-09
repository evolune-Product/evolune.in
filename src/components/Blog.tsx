import React from 'react';

interface BlogPost {
  tag: string;
  tagClass: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  image: string;
  isExternal?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    tag: 'Developer Tools',
    tagClass: 'badge-beta',
    title: 'Introducing Flasqo: Unifying 13 Testing Silos in a Single Engine',
    excerpt:
      'API testing has always been fragmented across separate smoke, chaos, load, and contract tools. Flasqo introduces a unified engine that cuts test cycle latency to under 50ms.',
    date: 'Jun 2025',
    readTime: '5 min read',
    href: 'https://flasqo.com/',
    image: '/images/flasqo-preview.jpg',
    isExternal: true,
  },
  {
    tag: 'Agentic SDLC',
    tagClass: 'badge-live',
    title: 'Evolune OS: Orchestrating Autonomous Agent Teams Across the SDLC',
    excerpt:
      'How we architected a multi-agent pipeline with deterministic AST verification, automated test synthesis, and human-in-the-loop quality gates.',
    date: 'Sep 2026',
    readTime: '4 min read',
    href: 'https://evoluneos.com',
    image: '/images/evolune-os-preview.jpg',
    isExternal: true,
  },
  {
    tag: 'Institutional Win',
    tagClass: 'badge-soon',
    title: 'I-Summit at IIT Madras: Building Developer Infrastructure from India',
    excerpt:
      'The journey of taking Flasqo to IIT Madras I-Summit 2026, winning the summit, reaching the PitchArena finals, and being shortlisted by IIM Bangalore NSRCEL for incubation.',
    date: 'May 2025',
    readTime: '6 min read',
    href: '#company',
    image: '/images/flasqo-preview.jpg',
    isExternal: false,
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <span className="section-label">Engineering Insights</span>
          <h2 className="section-title">
            Dispatches from the <span className="text-gradient">Frontier.</span>
          </h2>
          <p className="section-subtitle">
            Deep-dives into agentic systems architecture, API testing telemetry, and startup milestones from the Evolune EdgeTech team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              {/* Thumbnail Image */}
              <div className="blog-thumb-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-thumb-img"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="blog-card-body">
                <div>
                  <span className={`blog-tag ${post.tagClass}`}>{post.tag}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>

                <div className="blog-meta-row">
                  <span>{post.date} • {post.readTime}</span>
                  <a
                    href={post.href}
                    className="blog-link"
                    target={post.isExternal ? '_blank' : undefined}
                    rel={post.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <span>Read publication</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
