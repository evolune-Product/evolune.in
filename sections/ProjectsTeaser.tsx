import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function ProjectsTeaser() {
  return (
    <section className="relative bg-base-900 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Beyond the Flagships"
          title={<>Projects & <span className="text-gradient">Labs.</span></>}
          subtitle="Early-stage explorations and internal experiments from our engineering team — the raw material our future products are drawn from."
        />
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="glow-card rounded-2xl p-10 md:p-14">
            <p className="text-brand-silver/75 leading-relaxed mb-8">
              Beyond Evolune OS and Flasqo, our team runs continuous internal R&D — prototyping deterministic
              verification techniques, agentic tooling, and edge-computing experiments before they graduate into
              flagship products.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-brand-white hover:border-brand-cyan/40"
            >
              Visit Projects & Labs →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
