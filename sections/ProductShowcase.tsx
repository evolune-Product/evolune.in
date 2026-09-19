import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/DeviceFrame';
import { products } from '@/lib/site';

export function ProductShowcase() {
  return (
    <section id="products" className="relative bg-base-800 border-y border-white/5 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Flagship Engineering"
          title={<>Intelligent systems. <span className="text-gradient">Zero compromise.</span></>}
          subtitle="Every Evolune product eliminates a fundamental engineering bottleneck with autonomous intelligence and mathematical precision."
        />

        <div className="space-y-20 md:space-y-28">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <BrowserFrame src={product.image} alt={`${product.name} product screenshot`} url={product.url.replace('https://', '')} />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      product.status === 'Live'
                        ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/30'
                        : 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                    }`}
                  >
                    {product.status}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/50">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-brand-white mb-3">
                  {product.name}
                </h3>
                <p className="text-brand-cyan/90 font-medium mb-4">{product.tagline}</p>
                <p className="text-brand-silver/75 leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {product.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-brand-silver/80">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    View Deep Dive
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-brand-white hover:border-brand-cyan/40"
                  >
                    Visit Live ↗
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
