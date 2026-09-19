import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { credentials } from '@/lib/site';

const toneClasses: Record<string, string> = {
  gold: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
  emerald: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  indigo: 'bg-brand-violet/10 text-violet-300 border-brand-violet/30',
};

export function WhyEvolune() {
  return (
    <section className="relative bg-base-800 border-y border-white/5 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Evolune"
          title={<>Recognised by <span className="text-gradient">India's leading institutions.</span></>}
          subtitle="From premier IIT and IIM entrepreneurship summits to Government of India DPIIT accreditation, Evolune EdgeTech is validated by high-trust ecosystems."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {credentials.map((cred, i) => (
            <Reveal key={cred.title} delay={i * 0.08}>
              <div className="glow-card flex h-full flex-col justify-between rounded-2xl p-7">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[cred.badgeTone]}`}>
                      {cred.label}
                    </span>
                    <span className="text-xs font-mono text-brand-silver/50">{cred.tag}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-white mb-2.5">{cred.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/70">{cred.desc}</p>
                </div>
                {cred.meta.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cred.meta.map((m) => (
                      <span key={m} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-brand-silver/60">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                {cred.certificate && (
                  <a
                    href="/startup-india-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline underline-offset-4"
                  >
                    View verified DPIIT certificate →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
