import Image from 'next/image';
import { SpendVetoIcon } from './SpendVetoIcon';
import type { Product } from '@/lib/site';

/**
 * Real per-product logo mark, sized for a compact badge context (product
 * cards, detail-page headers). Uses each founder's actual original logo:
 *  - Evolune OS: dark rounded-square app icon (PNG)
 *  - Flasqo: cropped mark+wordmark, shown on its native light chip
 *  - SpendVeto: real bracket/gate SVG mark, tinted via currentColor
 */
export function ProductLogo({ product, size = 40 }: { product: Product; size?: number }) {
  if (product.slug === 'spendveto') {
    return (
      <span
        className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-cyan"
        style={{ width: size, height: size }}
      >
        <SpendVetoIcon className="h-1/2 w-1/2" />
      </span>
    );
  }

  if (product.slug === 'flasqo') {
    return (
      <span
        className="inline-flex items-center overflow-hidden rounded-xl bg-[#c7ccd4]"
        style={{ width: size * 2.1, height: size }}
      >
        <Image src={product.logo!} alt={`${product.name} logo`} width={size * 2.1} height={size} className="object-cover" />
      </span>
    );
  }

  return (
    <Image
      src={product.logo!}
      alt={`${product.name} logo`}
      width={size}
      height={size}
      className="rounded-xl"
    />
  );
}
