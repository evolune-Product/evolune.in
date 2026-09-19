import Image from 'next/image';

// Real orbital logo assets supplied by the founder (brand-kit concept sheet),
// cropped and matted onto the brand-dark background:
//   /public/logo.png            — icon mark, square, for nav/compact use + favicon seed
//   /public/images/brand-kit/logo_main_clean_full.png — full lockup (icon + wordmark + tagline)
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Evolune EdgeTech"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}

/** Compact header/footer lockup: real icon mark + coded wordmark (crisp at any size). */
export function BrandLockup({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo size={size} />
      <span className="flex items-baseline gap-1.5 font-display font-semibold tracking-tight">
        <span className="text-brand-white">EVOLUNE</span>
        <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-cyan/80">EDGETECH</span>
      </span>
    </span>
  );
}

/** Full real lockup image (icon + wordmark + tagline) — used where space allows, e.g. hero credibility or About. */
export function FullLockupImage({ className = '', width = 260 }: { className?: string; width?: number }) {
  const height = Math.round((width * 278) / 376);
  return (
    <Image
      src="/images/brand-kit/logo_main_clean_full.png"
      alt="Evolune EdgeTech — Explore, Build, Evolve"
      width={width}
      height={height}
      className={className}
    />
  );
}
