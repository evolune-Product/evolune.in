import { Reveal } from '@/components/Reveal';
import { GridOverlay } from '@/components/backgrounds';

export function CompanyIntro() {
  return (
    <section className="relative border-t border-white/5 bg-base-900 py-24 md:py-32">
      <GridOverlay />
      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-brand-white leading-tight">
              Founded to eliminate the gap between{' '}
              <span className="text-gradient">human intent and shipped software.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg leading-relaxed text-brand-silver/80">
              Founded in February 2025 and based in Bengaluru, Evolune EdgeTech is a DPIIT-certified startup
              (DIPP238722) building high-leverage autonomous platforms for engineering teams. In our first year we
              won I-Summit at IIT Madras, reached the finals of PitchArena with Flasqo, and were shortlisted by
              NSRCEL at IIM Bangalore for incubation.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-brand-silver/80">
              We reject modern software bloat. Every system we ship is built on deterministic verification,
              mathematical rigor, and radical simplicity — measured strictly by what actually reaches production.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
