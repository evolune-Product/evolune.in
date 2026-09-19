import Link from 'next/link';
import { Starfield, HeroPlanet, OrbitalLines } from '@/components/backgrounds';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-base-900">
      <Starfield density={140} />
      <OrbitalLines />
      <HeroPlanet />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-900/40 to-base-900" />
      <div className="container-page relative z-10 text-center">
        <p className="font-mono text-sm text-brand-cyan/70 mb-4">404</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-white mb-5">
          Still exploring this <span className="text-gradient">part of the system.</span>
        </h1>
        <p className="mx-auto max-w-md text-brand-silver/75 mb-10">
          The page you're looking for doesn't exist, or has moved. Let's get you back on course.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(37,99,255,0.7)] transition-transform hover:-translate-y-0.5"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
