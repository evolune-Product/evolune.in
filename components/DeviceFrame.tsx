import Image from 'next/image';

/** Clean browser-chrome frame wrapping a real product screenshot. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
}: {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
}) {
  return (
    <div className="glow-card rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {url && (
          <div className="flex-1 rounded-md bg-black/30 px-3 py-1 text-center text-[11px] font-mono text-brand-silver/60 truncate">
            {url}
          </div>
        )}
      </div>
      <div className="relative aspect-[16/9] w-full bg-base-800">
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
      </div>
    </div>
  );
}
