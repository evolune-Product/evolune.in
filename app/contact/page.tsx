import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { Starfield, NebulaGlow } from '@/components/backgrounds';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with Evolune EdgeTech — ${site.email}. Bengaluru, India · Global Remote.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-base-900 pt-40 pb-28 min-h-screen">
      <Starfield density={100} />
      <NebulaGlow />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
            Connect Directly
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brand-white leading-tight">
            Let's engineer the <span className="text-gradient">next breakthrough.</span>
          </h1>
          <p className="mt-5 text-brand-silver/75 leading-relaxed">
            Whether you want to deploy Evolune OS, run testing on Flasqo, explore a pilot partnership, or invest in
            our journey — we respond promptly.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <div className="glow-card h-full rounded-2xl p-8">
              <h2 className="font-display text-lg font-semibold text-brand-white mb-3">Direct Inquiries</h2>
              <p className="text-sm text-brand-silver/70 leading-relaxed mb-6">
                We work closely with engineering leaders, technical founders, and enterprise teams. Reach out
                directly to the core team.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mb-6 block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-mono text-brand-cyan hover:border-brand-cyan/40"
              >
                {site.email}
              </a>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-xs text-brand-silver/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Response guaranteed within 24 business hours.
              </div>
              <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-sm text-brand-silver/70">
                <p>{site.location}</p>
                <p>DPIIT Certified Startup ({site.dpiitCert})</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-card rounded-2xl p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
