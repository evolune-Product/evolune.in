import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/DeviceFrame';
import { ProductLogo } from '@/components/ProductLogo';
import { PrimaryLink, SecondaryLink, ArrowRight } from '@/components/Buttons';
import { NebulaGlow, Starfield, GridOverlay } from '@/components/backgrounds';
import { products, site, statusBadgeClass } from '@/lib/site';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
    openGraph: { title: `${product.name} — Evolune EdgeTech`, description: product.tagline },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: product.category,
    url: product.url,
    offers: {
      '@type': 'Offer',
      availability: product.status.startsWith('Live') ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
    },
    publisher: { '@type': 'Organization', name: site.legalName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-24">
        <Starfield density={90} />
        <NebulaGlow />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClass(product.status)}`}>
                {product.status}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/50">{product.category}</span>
              {product.openSource && (
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-brand-silver/80">
                  Open Source
                </span>
              )}
            </div>
            <div className="mb-5 flex items-center justify-center gap-3">
              <ProductLogo product={product} size={44} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-brand-white leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-brand-cyan/90 font-medium">{product.tagline}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryLink href={product.url} external>
                Visit {product.name} <ArrowRight />
              </PrimaryLink>
              <SecondaryLink href="/contact">Discuss Integration</SecondaryLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="relative bg-base-800 border-y border-white/5 py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xl md:text-2xl leading-relaxed text-brand-white">
              {product.statement}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot */}
      <section className="relative bg-base-900 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <BrowserFrame src={product.image} alt={`${product.name} screenshot`} url={product.url.replace('https://', '')} priority />
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative bg-base-900 pb-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div className="glow-card rounded-xl p-8 text-center">
                  <div className="font-display text-3xl font-semibold text-gradient mb-2">{m.value}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-silver/60">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Functionality / Capabilities */}
      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white">What it does</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-brand-silver/85 leading-relaxed">{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-base-900 py-20 md:py-28">
        <GridOverlay />
        <div className="container-page relative">
          <Reveal className="mb-12 max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white">The pipeline</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {product.howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="glow-card h-full rounded-xl p-6">
                  <div className="mb-4 font-mono text-xs text-brand-cyan/70">STEP {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-base font-semibold text-brand-white mb-2">{step.step}</h3>
                  <p className="text-sm leading-relaxed text-brand-silver/65">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative bg-base-800 border-y border-white/5 py-20 md:py-28">
        <div className="container-page">
          <Reveal className="mb-10 max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan/80 mb-4">
              Technology
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white">Under the hood</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {product.technology.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-brand-silver/85">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-base-900 py-24 md:py-28">
        <NebulaGlow />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-white mb-6">
              Ready to explore {product.name}?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryLink href={product.url} external>
                Visit {product.name} <ArrowRight />
              </PrimaryLink>
              <SecondaryLink href="/contact">Talk to the Team</SecondaryLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
