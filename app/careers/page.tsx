import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { NebulaGlow, SectionImage } from '@/components/backgrounds';
import { PrimaryLink, ArrowRight } from '@/components/Buttons';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Evolune EdgeTech — build autonomous agentic platforms and unified developer tools from Bengaluru, India.',
};

const values = [
  { title: 'Autonomous Agency', desc: 'We hire engineers who want to architect real systems, not tune prompts.' },
  { title: 'Mathematical Rigor', desc: 'Every claim we make is backed by deterministic, verifiable computation.' },
  { title: 'Radical Simplicity', desc: 'We eliminate dependency bloat and cognitive friction, ruthlessly.' },
  { title: 'Relentless Execution', desc: 'We measure success strictly by software that actually ships.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-20">
        <SectionImage src="/images/backgrounds/careers.jpg" alt="" priority opacity={0.55} />
        <NebulaGlow />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Careers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-brand-white leading-tight">
              Build the next era of <span className="text-gradient">autonomous software.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What We Value" title="The standard we hold ourselves to" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glow-card h-full rounded-2xl p-7">
                  <h3 className="font-display text-lg font-semibold text-brand-white mb-2.5">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/75">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-base-900 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open Roles"
            title="No open roles listed right now"
            subtitle="We're a small, early-stage team — we don't have specific open positions posted at the moment. But we're always interested in exceptional engineers, and internships and general applications are welcome."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <Reveal>
              <div className="glow-card h-full rounded-2xl p-8 text-center">
                <h3 className="font-display text-lg font-semibold text-brand-white mb-3">Internships</h3>
                <p className="text-sm text-brand-silver/70 leading-relaxed mb-6">
                  Interested in an internship with our engineering team? Reach out with your background and what
                  you'd want to work on.
                </p>
                <PrimaryLink href={`mailto:${site.email}?subject=Internship%20Application`} external>
                  Apply for an Internship <ArrowRight />
                </PrimaryLink>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glow-card h-full rounded-2xl p-8 text-center">
                <h3 className="font-display text-lg font-semibold text-brand-white mb-3">General Application</h3>
                <p className="text-sm text-brand-silver/70 leading-relaxed mb-6">
                  Don't see a fit but think you'd be valuable to the team? Send us a general application anyway.
                </p>
                <PrimaryLink href={`mailto:${site.email}?subject=General%20Application`} external>
                  Send General Application <ArrowRight />
                </PrimaryLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
