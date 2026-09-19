import Image from 'next/image';

// Real orbital logo — authoritative source: founder's "brand-v2" drop
// (public/images/brand-v2/), the third and final asset round. Supersedes
// both the earlier brand-kit/ and site-corrected/ logo crops.
//   /public/logo.png — icon mark, cropped + matted onto brand-dark, derived
//     from brand-v2/03_app_icon.png. Used for nav/compact use, favicon, and
//     app icon (see app/icon.png, app/apple-icon.png).
//   /public/images/brand-v2/01_logo_primary_dark.png — full lockup (icon +
//     wordmark + tagline), used where space allows and to build the OG image.
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/assets/evolune/brand/logo-icon.png"
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
  const height = Math.round((width * 400) / 1600);
  return (
    <Image
      src="/assets/evolune/brand/logo-primary-dark.png"
      alt="Evolune EdgeTech — Explore, Build, Evolve"
      width={width}
      height={height}
      className={className}
    />
  );
}
