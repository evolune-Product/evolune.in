import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { NebulaGlow, Starfield, OrbitalLines, GridOverlay } from '@/components/backgrounds';

export const metadata: Metadata = {
  title: 'Technology & Edge Lab',
  description: 'The deterministic verification, multi-agent orchestration, and edge-computing systems behind Evolune EdgeTech products.',
};

const architecture = [
  {
    title: 'Autonomous Multi-Agent Orchestration',
    tag: 'Evolune OS',
    desc: 'Coordinates multi-agent reasoning loops with strict deterministic boundaries. Specialized agents autonomously synthesize architecture specs, generate type-safe code, execute test suites, and conduct deep AST-level code reviews — keeping humans in the loop for high-level approvals.',
  },
  {
    title: 'Unified API Reliability Engine',
    tag: 'Flasqo',
    desc: 'Consolidates smoke, chaos, GraphQL, contract, load, and browser testing into a single sub-second pipeline. Engineered to catch breaking API regressions before code reaches staging.',
  },
  {
    title: 'Deterministic Quality Gates',
    tag: 'Security',
    desc: 'All agent mutations are governed by strict AST audits, static security scanners, and immutable provenance logs. Zero hallucinated code ever passes to deployment without verifiable green checks.',
  },
  {
    title: 'Autonomous Deployment & Observability',
    tag: 'Evolune OS',
    desc: 'Every merge triggers a fully autonomous canary rollout with live telemetry, automated rollback triggers, and incident summaries surfaced directly to engineers — closing the loop from commit to production without manual intervention.',
  },
];

const labFocus = [
  { title: 'Deterministic Verification', desc: 'Research into AST-level and formal verification techniques for autonomous code generation.' },
  { title: 'Edge Intelligence', desc: 'Exploring low-latency, edge-deployed reasoning for real-time engineering feedback loops.' },
  { title: 'Agentic Tooling', desc: 'Prototyping the next generation of specialized agent roles and coordination protocols.' },
  { title: 'Autonomous Infrastructure', desc: 'Internal experiments in self-healing CI/CD and zero-touch deployment pipelines.' },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-20">
        <Starfield density={120} />
        <OrbitalLines />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Technology & Edge Lab
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-brand-white leading-tight">
              Engineered for <span className="text-gradient">scale & autonomy.</span>
            </h1>
            <p className="mt-6 text-lg text-brand-silver/80 leading-relaxed">
              Our architectural pillars reflect a commitment to deterministic reliability, edge intelligence, and
              autonomous developer workflows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="System Architecture" title="Core architectural pillars" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {architecture.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="glow-card h-full rounded-2xl p-8">
                  <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-brand-silver/70">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-brand-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/75">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base-900 py-20 md:py-28">
        <NebulaGlow />
        <GridOverlay />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Edge Lab"
            title={<>What we're researching <span className="text-gradient">right now.</span></>}
            subtitle="Our internal R&D lab pushes on the systems that will underpin the next generation of Evolune products."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labFocus.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="glow-card h-full rounded-xl p-6">
                  <div className="mb-3 h-1.5 w-8 rounded-full bg-brand-gradient" />
                  <h3 className="text-sm font-semibold text-brand-white mb-2">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-brand-silver/65">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
