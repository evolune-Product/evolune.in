import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { pillars } from '@/lib/site';

const icons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
];

const pillarImages = [
  '/assets/evolune/backgrounds/ai-intelligence.jpg',
  '/assets/evolune/backgrounds/technology.jpg',
  '/assets/evolune/backgrounds/autonomous-systems.jpg',
];

export function Pillars() {
  return (
    <section className="relative bg-base-900 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Build"
          title={<>Three pillars, <span className="text-gradient">one standard.</span></>}
          subtitle="Every product we ship falls under one of three focus areas — each held to the same bar of deterministic reliability and radical simplicity."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="glow-card h-full overflow-hidden rounded-2xl">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={pillarImages[i]}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-base-900/70 border border-white/10 backdrop-blur">
                    <svg width="20" height="20" fill="none" stroke="#60D8FF" viewBox="0 0 24 24">
                      {icons[i]}
                    </svg>
                  </div>
                </div>
                <div className="p-8 pt-6">
                  <h3 className="font-display text-xl font-semibold text-brand-white mb-3">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/75">{pillar.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
