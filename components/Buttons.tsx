import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan';

export function PrimaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  const cls = `${base} bg-brand-gradient text-white shadow-[0_0_30px_-8px_rgba(37,99,255,0.7)] hover:shadow-[0_0_45px_-6px_rgba(96,216,255,0.8)] hover:-translate-y-0.5`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  const cls = `${base} border border-white/15 bg-white/[0.03] text-brand-white hover:border-brand-cyan/40 hover:bg-white/[0.06]`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowRight() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
