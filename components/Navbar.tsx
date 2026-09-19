'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLockup } from './Logo';
import { navLinks } from '@/lib/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base-900/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Evolune EdgeTech home">
          <BrandLockup size={32} />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                    pathname === link.href ? 'text-brand-cyan' : 'text-brand-silver/85'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(37,99,255,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-white"
        >
          {open ? (
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-base-900/95 backdrop-blur-xl">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-brand-silver/90 hover:bg-white/5"
              >
                <span>{link.label}</span>
                <span className="text-brand-silver/40">→</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
