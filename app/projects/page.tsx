import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Starfield, NebulaGlow } from '@/components/backgrounds';
import { PrimaryLink, ArrowRight } from '@/components/Buttons';

export const metadata: Metadata = {
  title: 'Projects & Labs',
  description: 'Early-stage explorations and internal experiments from the Evolune EdgeTech engineering team.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-20">
        <Starfield density={100} />
        <NebulaGlow />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Projects & Labs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-brand-white leading-tight">
              The raw material behind our <span className="text-gradient">flagship products.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Internal R&D"
            title="Always building, always testing"
            subtitle="Beyond Evolune OS and Flasqo, our team runs continuous internal experimentation — prototyping deterministic verification techniques, agentic tooling, and edge-computing ideas before they graduate into products."
          />
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="glow-card rounded-2xl p-10">
              <p className="text-brand-silver/75 leading-relaxed">
                We don't publish a public roadmap of unreleased experiments — but if you're an engineer, researcher,
                or potential collaborator interested in what we're building next, we'd love to hear from you.
              </p>
              <div className="mt-8">
                <PrimaryLink href="/contact">
                  Get in Touch <ArrowRight />
                </PrimaryLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
