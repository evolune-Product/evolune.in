import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { NebulaGlow, GridOverlay, SectionImage } from '@/components/backgrounds';
import { philosophy, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Evolune EdgeTech LLP — founded February 2025, DPIIT-certified, building autonomous engineering platforms from Bengaluru for global teams.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-20">
        <SectionImage src="/assets/evolune/backgrounds/about-company.jpg" alt="About Evolune EdgeTech architecture" priority opacity={0.55} />
        <NebulaGlow />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              About Evolune
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-brand-white leading-tight">
              We build for engineers who <span className="text-gradient">demand more.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white leading-tight">
              A DPIIT-certified startup, built in Bengaluru for global engineering teams.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-brand-silver/80 leading-relaxed mb-4">
              {site.legalName} was founded in {site.founded} and is based in {site.hq}, working globally with remote
              teams. We're officially recognised as an innovative startup by DPIIT, Ministry of Commerce and
              Industry, Government of India (Certificate {site.dpiitCert}, valid through {site.dpiitValidThrough}).
            </p>
            <p className="text-brand-silver/80 leading-relaxed">
              In our first year, we won I-Summit at IIT Madras, reached the PitchArena finals with Flasqo, and were
              shortlisted by NSRCEL at IIM Bangalore for incubation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we believe (philosophy) */}
      <section className="relative bg-base-900 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Believe"
            title={<>Built for engineers who <span className="text-gradient">demand more.</span></>}
            subtitle="At Evolune EdgeTech, we reject modern software bloat. We build high-leverage autonomous platforms that multiply engineering output by orders of magnitude."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {philosophy.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.08}>
                <div className="glow-card h-full rounded-2xl p-7">
                  <span className="block font-mono text-xs text-brand-cyan/70 mb-3">{item.num}</span>
                  <h3 className="font-display text-lg font-semibold text-brand-white mb-2.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/75">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="relative overflow-hidden bg-base-800 border-y border-white/5 py-20 md:py-28">
        <GridOverlay />
        <div className="container-page relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              How We Build
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white leading-tight">
              Deterministic verification. Human-in-the-loop governance.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-brand-silver/80 leading-relaxed mb-4">
              Whether it's an autonomous agent writing production code in Evolune OS, or a chaos-injection test
              running in Flasqo, every system we build passes through strict deterministic gates — AST audits,
              static security scans, and immutable provenance logs — before it reaches a human for final sign-off.
            </p>
            <p className="text-brand-silver/80 leading-relaxed">
              We measure our engineering culture by one standard: software that actually ships, verifiably and
              safely.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Where we're going */}
      <section className="relative bg-base-900 py-20 md:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Where We're Going
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white leading-tight mb-6">
              From three flagship products to an ecosystem of autonomous engineering infrastructure.
            </h2>
            <p className="text-brand-silver/75 leading-relaxed">
              Evolune OS, Flasqo, and SpendVeto are the first systems in a longer roadmap of autonomous,
              deterministic engineering tools — all built on the same principles of agency, rigor, density, and
              velocity that got us here.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
