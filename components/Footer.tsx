import Link from 'next/link';
import { BrandLockup } from './Logo';
import { site } from '@/lib/site';

const socialIcons = {
  linkedin: (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  instagram: (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072c-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
    </svg>
  ),
  github: (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-base-800">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block mb-4">
              <BrandLockup size={32} />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-brand-silver/70">
              Autonomous agentic platforms and unified developer reliability engines, engineered from India for
              global engineering teams.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.socials).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-brand-silver/80 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  {socialIcons[key as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-silver/50 mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/evolune-os" className="text-brand-silver/80 hover:text-brand-cyan">
                  Evolune OS
                </Link>
              </li>
              <li>
                <Link href="/products/flasqo" className="text-brand-silver/80 hover:text-brand-cyan">
                  Flasqo
                </Link>
              </li>
              <li>
                <Link href="/products/spendveto" className="text-brand-silver/80 hover:text-brand-cyan">
                  SpendVeto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-silver/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-brand-silver/80 hover:text-brand-cyan">About</Link>
              </li>
              <li>
                <Link href="/technology" className="text-brand-silver/80 hover:text-brand-cyan">Technology</Link>
              </li>
              <li>
                <Link href="/projects" className="text-brand-silver/80 hover:text-brand-cyan">Projects</Link>
              </li>
              <li>
                <Link href="/careers" className="text-brand-silver/80 hover:text-brand-cyan">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-silver/50 mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-brand-silver/80 hover:text-brand-cyan">
                  {site.email}
                </a>
              </li>
              <li className="text-brand-silver/60">{site.location}</li>
              <li>
                <a
                  href="/startup-india-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-silver/80 hover:text-brand-cyan"
                >
                  DPIIT Certificate ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-brand-silver/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Evolune EdgeTech LLP. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>DPIIT Certified Startup · {site.dpiitCert}</span>
            <span>I-Summit Winner, IIT Madras 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
