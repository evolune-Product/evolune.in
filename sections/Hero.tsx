import { HeroPlanet, Starfield, OrbitalLines } from '@/components/backgrounds';
import { PrimaryLink, SecondaryLink, ArrowRight } from '@/components/Buttons';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-base-900 pt-28 pb-20">
      <Starfield density={160} />
      <OrbitalLines />
      <HeroPlanet />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-900/40 to-base-900" />

      <div className="container-page relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-brand-silver/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_theme(colors.brand.cyan)]" />
            Winner, I-Summit IIT Madras 2026 · DPIIT Recognised
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-brand-white">
            Building What <span className="text-gradient">Comes Next.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg md:text-xl text-brand-silver/80 leading-relaxed">
            Evolune EdgeTech engineers autonomous, intelligent platforms — an agentic SDLC engine that ships
            software end-to-end, and a unified API reliability engine that replaces thirteen fragmented testing
            tools with one.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryLink href="/products">
              Explore Products <ArrowRight />
            </PrimaryLink>
            <SecondaryLink href="/about">Our Story</SecondaryLink>
          </div>

          <p className="mt-16 text-xs font-mono uppercase tracking-[0.3em] text-brand-silver/40">
            Explore <span className="mx-2 text-brand-cyan/60">→</span> Build
            <span className="mx-2 text-brand-cyan/60">→</span> Evolve
          </p>
        </Reveal>
      </div>
    </section>
  );
}
