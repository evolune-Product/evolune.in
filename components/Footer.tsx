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
      <path d="M12 2.16c3.2 0 3.58.02 4.85.07 1.17.06 1.8.25 2.23.42.56.21.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.21-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C20.65 1.35 19.98.93 19.19.63c-.76-.3-1.64-.5-2.91-.56C15 .01 14.59 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
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
