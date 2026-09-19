import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/DeviceFrame';
import { ProductLogo } from '@/components/ProductLogo';
import { NebulaGlow, Starfield } from '@/components/backgrounds';
import { products, statusBadgeClass } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Evolune OS, Flasqo, and SpendVeto — the autonomous agentic SDLC platform, unified API reliability engine, and AI-agent spend-governance layer built by Evolune EdgeTech.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-40 pb-20">
        <Starfield density={100} />
        <NebulaGlow />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Product Ecosystem"
            title={<>Two products. <span className="text-gradient">Zero compromise.</span></>}
            subtitle="Each Evolune product eliminates a fundamental engineering bottleneck with autonomous intelligence and mathematical precision."
          />
        </div>
      </section>

      <section className="relative bg-base-900 pb-28">
        <div className="container-page space-y-8">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1}>
              <Link href={`/products/${product.slug}`} className="group grid grid-cols-1 gap-8 rounded-2xl glow-card p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClass(product.status)}`}>
                      {product.status}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/50">{product.category}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <ProductLogo product={product} size={32} />
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-white group-hover:text-brand-cyan transition-colors">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-brand-cyan/90 font-medium mb-4">{product.tagline}</p>
                  <p className="text-sm text-brand-silver/70 leading-relaxed mb-6">{product.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-white">
                    View full deep-dive
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <BrowserFrame src={product.image} alt={`${product.name} screenshot`} url={product.url.replace('https://', '')} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
