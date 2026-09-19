import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { GridOverlay, NebulaGlow, SectionImage } from '@/components/backgrounds';

const stack = [
  { label: 'Multi-Agent Orchestration', detail: 'Specialized agent roles coordinating under deterministic constraints.' },
  { label: 'Deterministic AST Verification', detail: 'Every mutation audited against static rules before it ships.' },
  { label: 'Chaos & Load Engineering', detail: 'Sub-millisecond fault injection and high-concurrency simulation.' },
  { label: 'Autonomous CI/CD', detail: 'Canary rollouts, automated rollback, and live observability loops.' },
];

export function EdgeLab() {
  return (
    <section className="relative overflow-hidden bg-base-900 py-24 md:py-32">
      <SectionImage src="/images/backgrounds/edge_lab.jpg" alt="" opacity={0.35} overlay="dark" />
      <NebulaGlow />
      <GridOverlay />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="The Edge Lab"
          title={<>Where our <span className="text-gradient">next systems</span> get built.</>}
          subtitle="Our internal R&D lab pushes on deterministic verification, edge intelligence, and autonomous engineering infrastructure ahead of what ships in our products today."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="glow-card h-full rounded-xl p-6">
                <div className="mb-3 h-1.5 w-8 rounded-full bg-brand-gradient" />
                <h3 className="text-sm font-semibold text-brand-white mb-2">{item.label}</h3>
                <p className="text-xs leading-relaxed text-brand-silver/65">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Link href="/technology" className="text-sm font-semibold text-brand-cyan hover:underline underline-offset-4">
            Explore our technology & Edge Lab →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
